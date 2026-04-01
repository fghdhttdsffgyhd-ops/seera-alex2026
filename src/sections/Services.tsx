import { useEffect, useRef, useState } from 'react';
import { 
  Monitor, 
  RefreshCw, 
  CreditCard, 
  Satellite, 
  Video,
  Wifi,
  Shield,
  ChevronLeft,
  Fingerprint
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Monitor,
    title: 'إصلاح الشاشات',
    description: 'صيانة وإصلاح جميع أنواع الشاشات باحترافية عالية مع ضمان على الإصلاح',
    features: ['شاشات LCD', 'شاشات LED', 'شاشات سمارت', 'شاشات كمبيوتر'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: RefreshCw,
    title: 'تحديث السوفت وير',
    description: 'تحديث وترقية البرامج الثابتة لجميع الأجهزة الإلكترونية',
    features: ['تحديث الرسيفر', 'تحديث الشاشات', 'تحديث الراوتر', 'إصلاح الأعطال البرمجية'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: CreditCard,
    title: 'كروت إنترنت',
    description: 'صيانة وتركيب وبرمجة كروت الإنترنت للكافيهات والشركات والقهاوي',
    features: ['كروت كافيهات', 'كروت شركات', 'كروت قهاوي', 'برمجة وإدارة'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Satellite,
    title: 'الرسيفر والأطباق',
    description: 'تركيب وصيانة الرسيفرات والأطباق الصناعية بجميع أنواعها',
    features: ['تركيب الأطباق', 'ضبط الإشارة', 'صيانة الرسيفر', 'تحديث القنوات'],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Video,
    title: 'كاميرات المراقبة',
    description: 'تركيب وصيانة كاميرات المراقبة بأحدث التقنيات',
    features: ['IP كاميرات', 'وايرلس كاميرات', 'CCTV كاميرات', 'كاميرات رقمية'],
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Fingerprint,
    title: 'أجهزة البصمة',
    description: 'تركيب وصيانة وبرمجة أجهزة البصمة للحضور والانصراف',
    features: ['تركيب الأجهزة', 'برمجة النظام', 'صيانة دورية', 'دعم فني'],
    color: 'from-purple-500 to-pink-500',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 bg-gradient-tech overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <Shield className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            نقدم <span className="text-gradient">حلول تقنية</span> شاملة
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            فريق متخصص في تقديم جميع الخدمات التقنية بأعلى معايير الجودة والاحترافية
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              data-index={index}
              className={`service-card group relative overflow-hidden bg-gradient-card border-white/5 hover:border-orange-500/30 transition-all duration-500 hover-lift ${
                visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <CardContent className="p-6 relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/201065063147"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-orange-400 hover:text-orange-300 hover:bg-orange-500/10 group/btn"
                  >
                    <span>اطلب الخدمة</span>
                    <ChevronLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 border border-orange-500/20">
            <div className="flex items-center gap-3">
              <Wifi className="w-6 h-6 text-orange-400" />
              <span className="text-white font-medium">هل تحتاج إلى خدمة غير مذكورة؟</span>
            </div>
            <a
              href="https://wa.me/201065063147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">
                تواصل معنا
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
