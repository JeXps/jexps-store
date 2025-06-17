import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const ConfettiSketch = ({ onEnd }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const confetti = (p) => {
      let particles = [];
      let lifespan = 120;

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight).parent(sketchRef.current);
        for (let i = 0; i < 150; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(-p.height, 0),
            speed: p.random(2, 6),
            size: p.random(4, 10),
            color: p.color(p.random(255), p.random(255), p.random(255))
          });
        }
      };

      p.draw = () => {
        p.clear();
        particles.forEach(particle => {
          p.fill(particle.color);
          p.noStroke();
          p.ellipse(particle.x, particle.y, particle.size);
          particle.y += particle.speed;
          if (particle.y > p.height) particle.y = p.random(-p.height, 0);
        });

        lifespan--;
        if (lifespan <= 0) {
          p.noLoop();
          if (onEnd) onEnd();
        }
      };
    };

    const myp5 = new p5(confetti);
    return () => myp5.remove();
  }, [onEnd]);

  return (
    <div
      ref={sketchRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ConfettiSketch;
