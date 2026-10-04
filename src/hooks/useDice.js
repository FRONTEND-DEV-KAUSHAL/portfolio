import { useEffect, useRef, useState } from 'react';

const randomRoll = () => Math.floor(Math.random() * 20) + 1;

export function useDice() {
  const [value, setValue] = useState(20);
  const [feedback, setFeedback] = useState('NATURAL 20! CRITICAL SUCCESS!');
  const [rolling, setRolling] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearInterval(timer.current), []);

  function roll() {
    if (timer.current) return;
    setRolling(true);
    setFeedback('ROLLING INITIATIVE...');
    let ticks = 0;
    const reducedMotion = matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    timer.current = setInterval(() => {
      const result = randomRoll();
      setValue(result);
      ticks += 1;
      if (ticks >= (reducedMotion ? 1 : 10)) {
        clearInterval(timer.current);
        timer.current = null;
        setRolling(false);
        setFeedback(
          result === 20
            ? 'NATURAL 20! CRITICAL HIT! ⚔️'
            : result === 1
              ? 'NATURAL 1... CRITICAL FAIL!'
              : result >= 10
                ? 'CHECK PASSED! BONUS LOOT ACQUIRED.'
                : 'CHECK FAILED. TRY AGAIN.',
        );
      }
    }, 50);
  }
  return { value, feedback, rolling, roll };
}
