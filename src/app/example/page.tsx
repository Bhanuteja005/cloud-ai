'use client';

import { useEffect, useState } from 'react';
import { HeroParallaxDemo } from './HeroParallaxDemo';
import { SparklesPreview } from './SparklesPreview';
import { TailwindcssButtons } from './TailwindcssButtons';
import { TextRevealCardPreview } from './TextRevealCardPreview';
import { WavyBackgroundDemo } from './WavyBackgroundDemo';
export default function Page() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, []);

  return (
    <>
      <HeroParallaxDemo />
      <TailwindcssButtons />
      <SparklesPreview />
      
      <WavyBackgroundDemo />
      {!isTouchDevice && <TextRevealCardPreview />}
    </>
  );
}
