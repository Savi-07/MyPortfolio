import React, { useEffect, useRef, useState } from 'react';
import './Loader.css';

const NAME = 'Sahil Kumar Singh';

const Loader: React.FC = () => {
  const [phase, setPhase] = useState<'start' | 'typing' | 'done'>('start');
  const [typed, setTyped] = useState('');
  const typingIndex = useRef(0);

  useEffect(() => {
    // Phase 1: show S on white bg for 0.8s
    const t1 = setTimeout(() => setPhase('typing'), 800);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (phase === 'typing') {
      // Animate typing the name, one letter at a time
      const interval = setInterval(() => {
        typingIndex.current++;
        setTyped(NAME.slice(0, typingIndex.current));
        if (typingIndex.current >= NAME.length) {
          clearInterval(interval);
          setTimeout(() => setPhase('done'), 700); // Wait a bit before fade out
        }
      }, 60);
      return () => clearInterval(interval);
    }
    if (phase === 'start') {
      setTyped('');
      typingIndex.current = 0;
    }
  }, [phase]);

  return (
    <div className={`loader2${phase === 'done' ? ' loader2-fade' : ''}${phase === 'typing' ? ' loader2-dark' : ''}`}>
      <div className="loader2-content">
        <span className={`loader2-s${phase !== 'start' ? ' loader2-s-white' : ''}`}></span>
        <span className="loader2-name">{phase === 'typing' || phase === 'done' ? typed : ''}</span>
      </div>
    </div>
  );
};

export default Loader; 