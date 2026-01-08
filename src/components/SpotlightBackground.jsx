import { useEffect, useRef } from 'react';

export default function GradientMeshBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Criar blobs de gradiente
    const blobs = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        radius: 300,
        color: 'rgba(34, 211, 238, 0.4)', // cyan
        speedX: 0.3,
        speedY: 0.2,
        angle: 0
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.4,
        radius: 350,
        color: 'rgba(59, 130, 246, 0.35)', // blue
        speedX: -0.25,
        speedY: 0.3,
        angle: Math.PI / 2
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.7,
        radius: 280,
        color: 'rgba(34, 197, 94, 0.3)', // green
        speedX: 0.2,
        speedY: -0.25,
        angle: Math.PI
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.6,
        radius: 250,
        color: 'rgba(168, 85, 247, 0.25)', // purple
        speedX: -0.15,
        speedY: -0.2,
        angle: Math.PI * 1.5
      }
    ];

    const animate = () => {
      // Limpar canvas com cor de fundo escura
      ctx.fillStyle = '#0a0e1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aplicar blur para efeito suave
      ctx.filter = 'blur(80px)';

      // Animar e desenhar cada blob
      blobs.forEach(blob => {
        // Movimento circular suave
        blob.angle += 0.002;
        const offsetX = Math.cos(blob.angle) * 100;
        const offsetY = Math.sin(blob.angle) * 80;

        blob.x += blob.speedX;
        blob.y += blob.speedY;

        // Rebater nas bordas
        if (blob.x < -200 || blob.x > canvas.width + 200) {
          blob.speedX *= -1;
        }
        if (blob.y < -200 || blob.y > canvas.height + 200) {
          blob.speedY *= -1;
        }

        // Desenhar gradiente radial
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

      // Adicionar overlay de textura sutil
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