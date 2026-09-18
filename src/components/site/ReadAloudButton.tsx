"use client";

import { useEffect, useRef, useState } from "react";
import { VolumeIcon, VolumeOffIcon, SettingsIcon } from "@/components/icons";
import {
  SPEECH_RATES,
  getStoredRate,
  setStoredRate,
  getStoredVoiceURI,
  setStoredVoiceURI,
  sanitizeForSpeech,
} from "@/lib/speechPrefs";

// Lecture audio via la synthèse vocale du navigateur (gratuit, aucun appel
// serveur). Un seul utterance actif à la fois : démarrer une lecture coupe
// toute lecture en cours ailleurs sur la page. Vitesse et voix sont des
// préférences partagées (localStorage) entre tous les boutons du site.
export function ReadAloudButton({ text, className }: { text: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [rate, setRate] = useState(1);
  const [voiceURI, setVoiceURI] = useState<string>("");
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    setSupported(true);
    setRate(getStoredRate());

    function loadVoices() {
      const frVoices = window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith("fr"));
      setVoices(frVoices);
      const stored = getStoredVoiceURI();
      const fallback = frVoices[0]?.voiceURI ?? "";
      setVoiceURI(stored && frVoices.some((v) => v.voiceURI === stored) ? stored : fallback);
    }
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.cancel();
    };
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setShowSettings(false);
      }
    }
    if (showSettings) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [showSettings]);

  if (!supported) return null;

  function toggle() {
    const synth = window.speechSynthesis;
    if (playing) {
      synth.cancel();
      setPlaying(false);
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(sanitizeForSpeech(text));
    utterance.lang = "fr-FR";
    utterance.rate = rate;
    const voice = voices.find((v) => v.voiceURI === voiceURI);
    if (voice) utterance.voice = voice;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    synth.speak(utterance);
    setPlaying(true);
  }

  function applyRate(next: number) {
    setRate(next);
    setStoredRate(next);
    if (playing) {
      // La synthèse vocale du navigateur ne permet pas de changer la
      // vitesse d'un utterance en cours — on relance avec la nouvelle valeur.
      window.speechSynthesis.cancel();
      setPlaying(false);
    }
  }

  function applyVoice(next: string) {
    setVoiceURI(next);
    setStoredVoiceURI(next);
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
    }
  }

  return (
    <div className="relative inline-flex items-center gap-1.5">
      <button
        type="button"
        onClick={toggle}
        className={
          className ??
          "inline-flex items-center gap-2 rounded-full border border-line bg-surface text-ink-soft font-bold text-sm px-4 py-2 hover:border-blue hover:text-blue transition"
        }
      >
        {playing ? <VolumeOffIcon className="w-4 h-4" /> : <VolumeIcon className="w-4 h-4" />}
        {playing ? "Arrêter la lecture" : "Écouter la correction"}
      </button>

      <button
        type="button"
        onClick={() => setShowSettings((s) => !s)}
        aria-label="Réglages de lecture audio"
        className="w-8 h-8 shrink-0 rounded-full border border-line bg-surface text-ink-faint flex items-center justify-center hover:border-blue hover:text-blue transition"
      >
        <SettingsIcon className="w-4 h-4" />
      </button>

      {showSettings && (
        <div
          ref={panelRef}
          className="absolute z-10 top-full mt-2 right-0 w-64 rounded-2xl border border-line bg-surface shadow-lg p-4 flex flex-col gap-3"
        >
          <div>
            <label className="text-xs font-bold text-ink-faint uppercase tracking-wide">
              Vitesse de lecture
            </label>
            <select
              value={rate}
              onChange={(e) => applyRate(parseFloat(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-line bg-bg px-2.5 py-2 text-sm font-semibold"
            >
              {SPEECH_RATES.map((r) => (
                <option key={r} value={r}>
                  {r}x
                </option>
              ))}
            </select>
          </div>
          {voices.length > 0 && (
            <div>
              <label className="text-xs font-bold text-ink-faint uppercase tracking-wide">
                Voix
              </label>
              <select
                value={voiceURI}
                onChange={(e) => applyVoice(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line bg-bg px-2.5 py-2 text-sm font-semibold"
              >
                {voices.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
