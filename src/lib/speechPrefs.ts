// Préférences de lecture audio (vitesse + voix), partagées par tous les
// boutons "Écouter" du site via localStorage — réglées une fois, appliquées
// partout. Best-effort : si le stockage est indisponible (navigation privée,
// SSR), on retombe simplement sur les valeurs par défaut.
const RATE_KEY = "nansah_tts_rate";
const VOICE_KEY = "nansah_tts_voice";

export const SPEECH_RATES = [0.75, 1, 1.25, 1.5, 1.75, 2];

export function getStoredRate(): number {
  try {
    const raw = window.localStorage.getItem(RATE_KEY);
    const parsed = raw ? parseFloat(raw) : NaN;
    return SPEECH_RATES.includes(parsed) ? parsed : 1;
  } catch {
    return 1;
  }
}

export function setStoredRate(rate: number) {
  try {
    window.localStorage.setItem(RATE_KEY, String(rate));
  } catch {
    // navigation privée ou stockage bloqué — préférence simplement non retenue
  }
}

export function getStoredVoiceURI(): string | null {
  try {
    return window.localStorage.getItem(VOICE_KEY);
  } catch {
    return null;
  }
}

export function setStoredVoiceURI(voiceURI: string) {
  try {
    window.localStorage.setItem(VOICE_KEY, voiceURI);
  } catch {
    // navigation privée ou stockage bloqué — préférence simplement non retenue
  }
}

// Retire les marques d'écriture inclusive entre parenthèses ("informé(e)",
// "nouveau (nouvelle)", "chèr(e)s"...) pour ne faire lire que la forme
// masculine par la synthèse vocale.
export function sanitizeForSpeech(text: string): string {
  return text.replace(/\s?\([a-zà-öø-ÿ']{1,20}\)/gi, "");
}
