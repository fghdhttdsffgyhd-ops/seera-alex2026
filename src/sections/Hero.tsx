import { useEffect, useRef } from 'react';
import { ArrowDown, Cpu, Shield, Zap, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    const particleCount = 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Cpu, text: 'حلول تقنية متكاملة' },
    { icon: Shield, text: 'جودة وضمان' },
    { icon: Zap, text: 'سرعة في التنفيذ' },
    { icon: Wifi, text: 'دعم فني مستمر' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-tech"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-radial-gradient" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-400 text-sm font-medium">نقدم حلول تقنية احترافية</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-down">
            <span className="text-white">سيرا</span>
            <br />
            <span className="text-gradient">للحلول التقنية</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            نقدم جميع الخدمات التقنية باحترافية عالية، من إصلاح الشاشات وتحديث السوفت وير
            إلى تركيب كاميرات المراقبة وبرمجة الميكروتيك
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://wa.me/201065063147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 text-lg font-semibold gap-2"
              >
                <span>تواصل معنا</span>
                <ArrowDown className="w-5 h-5 rotate-180" />
              </Button>
            </a>
            <button onClick={scrollToServices}>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 px-8 py-6 rounded-full transition-all duration-300 text-lg font-semibold"
              >
                استكشف خدماتنا
              </Button>
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-gray-300 text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
