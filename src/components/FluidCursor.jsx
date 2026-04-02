import { useEffect, useRef } from 'react';

export default function FluidCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let points = [];
    const numPoints = 20;

    for (let i = 0; i < numPoints; i++) {
        points.push({ x: 0, y: 0 });
    }

    let mouse = { x: 0, y: 0 };

    const onMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        points[0].x = mouse.x;
        points[0].y = mouse.y;

        for (let i = 1; i < numPoints; i++) {
            points[i].x += (points[i - 1].x - points[i].x) * 0.3;
            points[i].y += (points[i - 1].y - points[i].y) * 0.3;
        }

        ctx.strokeStyle = 'rgba(210, 201, 177, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < numPoints; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();

        requestAnimationFrame(animate);
    };

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 pointer-events-none z-[999]'
    />
  );
}