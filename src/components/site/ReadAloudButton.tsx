"use client";

import { useEffect, useState } from "react";
import { VolumeIcon, VolumeOffIcon } from "@/components/icons";

// Lecture audio via la synthèse vocale du navigateur (gratuit, aucun appel
// serveur). Un seul utterance actif à la fois : démarrer une lecture coupe
// toute lecture en cours ailleurs sur la page.
export function ReadAloudButton({ text, className }: { text: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  if (!supported) return null;

  function toggle() {
    const synth = window.speechSynthesis;
    if (playing) {
      synth.cancel();
      setPlaying(false);
      return;
    }
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "fr-FR";
    const frVoice = synth.getVoices().find((v) => v.lang.startsWith("fr"));
    if (frVoice) utterance.voice = frVoice;
    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);
    synth.speak(utterance);
    setPlaying(true);
  }

  return (
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
  );
}
