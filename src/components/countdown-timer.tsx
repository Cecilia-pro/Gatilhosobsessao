'use client';
import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [time, setTime] = useState(15 * 60); 

  useEffect(() => {
    if (time <= 0) return;

    const intervalId = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <span className="font-bold tabular-nums">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
}
