import { Zap, Shield, Users, TrendingUp, Clock, Headphones } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: 'سرعة في التنفيذ',
      description: 'نقوم بتنفيذ جميع الخدمات بسرعة عالية دون التأثير على جودة العمل',
    },
    {
      icon: Shield,
      title: 'جودة مضمونة',
      description: 'نستخدم أحدث التقنيات والمعايير العالمية في جميع خدماتنا',
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: 'فريق ذو خبرة عالية ومتدرب على أحدث التقنيات في المجال',
    },
    {
      icon: TrendingUp,
      title: 'حلول مخصصة',
      description: 'نقدم حلول مخصصة تناسب احتياجات عملك بالضبط',
    },
    {
      icon: Clock,
      title: 'دعم 24/7',
      description: 'دعم فني متواصل على مدار الساعة لحل أي مشاكل فوراً',
    },
    {
      icon: Headphones,
      title: 'تواصل سهل',
      description: 'تواصل مباشر وسهل مع فريقنا عبر الواتس والهاتف والبريد',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">لماذا </span>
            <span className="text-gradient">تختار سيرا</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            نحن نقدم أفضل الخدمات التقنية بأسعار تنافسية وجودة عالية مضمونة مع دعم فني متواصل
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-card border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="w-14 h-14 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-all">
                <reason.icon className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-card border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">مقارنة خدماتنا</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-3 text-gray-400 font-semibold">المميزات</th>
                  <th className="px-4 py-3 text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-semibold">سيرا</span>
                  </th>
                  <th className="px-4 py-3 text-center text-gray-500">الآخرون</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'سرعة التنفيذ',
                  'جودة الخدمة',
                  'الأسعار التنافسية',
                  'الدعم الفني 24/7',
                  'الحلول المخصصة',
                  'التدريب المجاني',
                  'الضمان الشامل',
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-all">
                    <td className="px-4 py-3 text-gray-300">{feature}</td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-gray-500" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">جاهز لبدء رحلتك معنا؟</h3>
          <p className="text-gray-400 mb-8">
            تواصل معنا الآن واحصل على عرض خاص لخدماتك
          </p>
          <a href="https://wa.me/201065063147" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50">
              اطلب عرض سعر الآن
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
