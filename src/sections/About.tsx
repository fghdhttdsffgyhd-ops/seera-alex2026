import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'عميل راضٍ', value: '500+' },
    { icon: Award, label: 'سنوات الخبرة', value: '10+' },
    { icon: Zap, label: 'مشروع مكتمل', value: '1000+' },
    { icon: CheckCircle, label: 'معدل النجاح', value: '99%' },
  ];

  const features = [
    'فريق متخصص وذو خبرة عالية في جميع المجالات التقنية',
    'أحدث التقنيات والأدوات في مجال الصيانة والبرمجة',
    'دعم فني متواصل 24/7 لجميع العملاء',
    'حلول مخصصة تناسب احتياجات كل عميل',
    'أسعار تنافسية وجودة عالية مضمونة',
    'التزام كامل بالمواعيد والجودة في التنفيذ',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-tech">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">عن </span>
              <span className="text-gradient">سيرا</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              شركة سيرا للحلول التقنية متخصصة في تقديم خدمات تقنية احترافية وشاملة، من إصلاح وصيانة الأجهزة إلى برمجة وتركيب أنظمة الكاشير والحلول المحاسبية المتكاملة.
            </p>
            
            <div className="space-y-3 mb-8">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 mb-8">
              نحن نؤمن بأن الخدمة الممتازة والدعم المستمر هما مفتاح النجاح، لذلك نلتزم بتقديم أفضل الحلول التقنية بأسعار تنافسية وجودة عالية مضمونة.
            </p>

            <div className="space-y-3">
              {features.slice(3).map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-orange-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">رسالتنا</h3>
            <p className="text-gray-400 leading-relaxed">
              تقديم حلول تقنية متطورة وموثوقة تساعد الشركات والمحلات التجارية على تحسين كفاءتها وزيادة إنتاجيتها من خلال أنظمة الكاشير والحلول المحاسبية المتكاملة.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا</h3>
            <p className="text-gray-400 leading-relaxed">
              أن نكون الشركة الأولى والموثوقة في تقديم الخدمات التقنية والحلول الرقمية في المنطقة، مع الالتزام بأعلى معايير الجودة والخدمة المتميزة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
