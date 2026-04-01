import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Users, 
  Clock, 
  CheckCircle2,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const stats = [
  { icon: Award, value: '+10', label: 'سنوات خبرة', color: 'from-yellow-500 to-amber-500' },
  { icon: Users, value: '+5000', label: 'عميل سعيد', color: 'from-blue-500 to-cyan-500' },
  { icon: CheckCircle2, value: '+10000', label: 'خدمة منجزة', color: 'from-green-500 to-emerald-500' },
  { icon: Clock, value: '24/7', label: 'دعم فني', color: 'from-orange-500 to-red-500' },
];

const values = [
  {
    icon: Target,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة في جميع خدماتنا',
  },
  {
    icon: Lightbulb,
    title: 'الابتكار',
    description: 'نستخدم أحدث التقنيات والحلول التقنية المتقدمة',
  },
  {
    icon: TrendingUp,
    title: 'التطوير',
    description: 'نسعى دائماً لتطوير خدماتنا ومهاراتنا',
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 bg-gradient-tech overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">من نحن</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            شريكك الموثوق في <span className="text-gradient">الحلول التقنية</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white">
              نقدم حلول تقنية متكاملة باحترافية عالية
            </h3>
            <p className="text-gray-400 leading-relaxed">
              سيرا للحلول التقنية هي شركة متخصصة في تقديم الخدمات التقنية المتنوعة. 
              نمتلك فريقاً من المهندسين والفنيين المتخصصين ذوي الخبرة العالية في مجال 
              الصيانة والبرمجة وتركيب الأنظمة الأمنية.
            </p>
            <p className="text-gray-400 leading-relaxed">
              نسعى دائماً لتقديم أفضل الخدمات لعملائنا مع الالتزام بأعلى معايير الجودة 
              والدقة في العمل. هدفنا هو إرضاء العميل وتقديم حلول تقنية مبتكرة تلبي 
              احتياجاته.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                'فريق متخصص ومحترف',
                'أسعار تنافسية',
                'ضمان على جميع الخدمات',
                'سرعة في التنفيذ',
                'دعم فني مستمر',
                'استشارات مجانية',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-orange-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-card border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            قيمنا <span className="text-gradient">الأساسية</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-card border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
