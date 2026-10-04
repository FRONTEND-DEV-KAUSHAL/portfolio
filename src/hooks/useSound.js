import { useEffect, useRef, useState } from 'react';

export function useSound() {
  const context = useRef(null);
  const timer = useRef(null);
  const [soundStatus, setSoundStatus] = useState('READY');
  useEffect(
    () => () => {
      clearTimeout(timer.current);
      if (context.current) {
        context.current.close();
        context.current = null;
      }
    },
    [],
  );

  async function playChime(frequency, label) {
    try {
      context.current ??= new (
        window.AudioContext || window.webkitAudioContext
      )();
      const audio = context.current;
      if (audio.state === 'suspended') await audio.resume();
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(frequency, audio.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(
        frequency / 2,
        audio.currentTime + 0.22,
      );
      gain.gain.setValueAtTime(0.12, audio.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.22);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.onended = () => {
        oscillator.disconnect();
        gain.disconnect();
      };
      oscillator.start();
      oscillator.stop(audio.currentTime + 0.22);
      setSoundStatus(label.toUpperCase());
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setSoundStatus('READY'), 800);
    } catch {
      setSoundStatus('AUDIO UNAVAILABLE');
    }
  }
  return { playChime, soundStatus };
}
