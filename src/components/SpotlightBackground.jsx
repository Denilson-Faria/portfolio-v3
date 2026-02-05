import { useEffect, useRef } from 'react';

export default function GradientMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const blobs = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: 300,
        color: 'rgba(34, 211, 238, 0.4)',
        speedX: 0.3,
        speedY: 0.2,
        angle: 0
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.4,
        radius: 350,
        color: 'rgba(59, 130, 246, 0.35)', 
        speedX: -0.25,
        speedY: 0.3,
        angle: Math.PI / 2
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.7,
        radius: 280,
        color: 'rgba(34, 197, 94, 0.3)', 
        speedX: 0.2,
        speedY: -0.25,
        angle: Math.PI
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.6,
        radius: 250,
        color: 'rgba(168, 85, 247, 0.25)', 
        speedX: -0.15,
        speedY: -0.2,
        angle: Math.PI * 1.5
      }
    ];

    const animate = () => {
     
      ctx.fillStyle = '#0a0e1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

     
      ctx.filter = 'blur(80px)';

      blobs.forEach(blob => {
        
        blob.angle += 0.002;
        const offsetX = Math.cos(blob.angle) * 100;
        const offsetY = Math.sin(blob.angle) * 80;

        blob.x += blob.speedX;
        blob.y += blob.speedY;

        if (blob.x < -200 || blob.x > canvas.width + 200) {
          blob.speedX *= -1;
        }
        if (blob.y < -200 || blob.y > canvas.height + 200) {
          blob.speedY *= -1;
        }

        const gradient = ctx.createRadialGradient(
          blob.x + offsetX, 
          blob.y + offsetY, 
          0,
          blob.x + offsetX, 
          blob.y + offsetY, 
          blob.radius
        );
        
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(0.5, blob.color.replace(/[\d.]+\)$/, '0.2)'));
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x + offsetX, blob.y + offsetY, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.filter = 'none';
      ctx.fillStyle = 'rgba(10, 14, 26, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: '#0a0e1a' }}
    />
  );
}