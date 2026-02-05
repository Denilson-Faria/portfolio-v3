import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
  text,
  className = '',
  delay = 80,
  duration = 0.8,
  ease = 'power3.out',
  tag = 'span',
  textAlign = 'center',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.split-char');
   
    gsap.fromTo(
      chars,
      { 
        opacity: 0, 
        y: 50,
        rotationX: -90
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: duration,
        ease: ease,
        stagger: delay / 1000,
        delay: 0.5 
      }
    );
  }, []);

  const renderChars = () => {
    return text.split('').map((char, index) => (
      <span
        key={index}
        className="split-char"
        style={{ 
          display: 'inline-block',
          transformOrigin: 'center bottom'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const Tag = tag;
  
  return (
    <Tag
      ref={containerRef}
      className={className}
      style={{ textAlign, display: 'block' }}
    >
      {renderChars()}
    </Tag>
  );
};

export default SplitText;//