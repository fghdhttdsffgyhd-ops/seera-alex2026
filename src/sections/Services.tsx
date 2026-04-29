import { Camera, Wifi, Fingerprint, ShoppingCart, Code, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Camera,
      title: 'أنظمة المراقبة',
      subtitle: 'CCTV & DVR',
      description: 'حلول مراقبة أمنية متطورة وموثوقة',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      features: [
        'تركيب احترافي للكاميرات عالية الدقة',
        'صيانة دورية وإصلاح الأعطال',
        'إعداد وتكوين أجهزة التسجيل (DVR/NVR)',
        'ربط الأنظمة للمراقبة عن بعد',
        'دعم فني متواصل 24/7'
      ],
      color: 'from-red-600 to-red-700',
      lightColor: 'bg-red-500/10',
      borderColor: 'border-red-500/30',
      hoverBorder: 'hover:border-red-500/60'
    },
    {
      id: 2,
      icon: Wifi,
      title: 'الشبكات والسيرفرات',
      subtitle: 'Networking & MikroTik',
      description: 'بنية تحتية شبكية قوية وآمنة',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
      features: [
        'تأسيس البنية التحتية للشبكات',
        'برمجة وإدارة راوترات مايكروتيك',
        'إعداد أنظمة الهوت سبوت (Hotspot Billing)',
        'ربط الفروع وتأمين البيانات',
        'مراقبة الأداء والصيانة الدورية'
      ],
      color: 'from-blue-600 to-blue-700',
      lightColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/60'
    },
    {
      id: 3,
      icon: Fingerprint,
      title: 'أنظمة الحضور والانصراف',
      subtitle: 'ZKTeco & Access Control',
      description: 'إدارة الموارد البشرية بكفاءة',
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=800&h=600&fit=crop',
      features: [
        'تركيب أجهزة البصمة والتعرف البيومتري',
        'ربط الأجهزة بالأنظمة الإدارية',
        'التحكم في الأبواب والصلاحيات',
        'تقارير دقيقة وتفصيلية للموظفين',
        'تكامل مع أنظمة الموارد البشرية'
      ],
      color: 'from-purple-600 to-purple-700',
      lightColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500/60'
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: 'أنظمة الكاشير ونقاط البيع',
      subtitle: 'POS Systems',
      description: 'حلول متكاملة لإدارة المبيعات',
      image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop',
      features: [
        'توريد وتركيب أجهزة الكاشير (POS)',
        'ربط طابعات الفواتير وقوارئ الباركود',
        'تنصيب برامج إدارة المبيعات والمخازن',
        'دعم فني وتدريب شامل للموظفين',
        'تقارير مبيعات وتحليلات متقدمة'
      ],
      color: 'from-green-600 to-green-700',
      lightColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      hoverBorder: 'hover:border-green-500/60'
    },
    {
      id: 5,
      icon: Code,
      title: 'الحلول البرمجية',
      subtitle: 'Software Solutions',
      description: 'تطبيقات مخصصة وحلول ذكية',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      features: [
        'لوحات تحكم سحابية لإدارة البنية التحتية',
        'لوحات تحكم مخصصة لإدارة المشتركين والأجهزة',
        'استضافة وتطوير تطبيقات الويب',
        'تطبيقات الهاتف المحمول (iOS/Android)',
        'دعم فني وصيانة مستمرة'
      ],
      color: 'from-indigo-600 to-indigo-700',
      lightColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30',
      hoverBorder: 'hover:border-indigo-500/60'
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-semibold border border-blue-500/30">
              خدماتنا الميدانية
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            احترافية في التنفيذ
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              على أرض الواقع
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            فريقنا من المهندسين والفنيين المتخصصين يضمن لك جودة التركيب والصيانة بأحدث الأدوات والتقنيات
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                expandedService === service.id ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
            >
              {/* Image Background with Lazy Loading */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-25 group-hover:opacity-45 transition-opacity duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
              </div>

              {/* Card Border */}
              <div className={`absolute inset-0 rounded-2xl border-2 ${service.borderColor} ${service.hoverBorder} transition-all duration-500 z-10`} />

              {/* Content Container */}
              <div className="relative p-8 h-full flex flex-col backdrop-blur-[2px] z-20">
                
                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-xl ${service.lightColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5`}>
                  <service.icon className={`w-8 h-8 text-white`} />
                </div>

                {/* Title Section */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500">
                    {service.title}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features List */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  expandedService === service.id 
                    ? 'max-h-96 opacity-100 mb-6' 
                    : 'max-h-0 opacity-0 md:max-h-0'
                }`}>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/201065063147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-500 group/btn bg-gradient-to-r ${service.color} hover:shadow-lg hover:shadow-current/50 w-full`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>اطلب معاينة الآن عبر واتساب</span>
                  <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                {/* Expand/Collapse Indicator */}
                <div className="mt-4 text-center">
                  <button className="text-xs text-gray-400 hover:text-gray-300 transition-colors">
                    {expandedService === service.id ? 'اضغط للإغلاق' : 'اضغط لعرض المزيد'}
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-700">
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">حلول مخصصة</h4>
            <p className="text-gray-400">نقدم حلولاً مخصصة تناسب احتياجات عملك بالضبط</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">تنفيذ سريع</h4>
            <p className="text-gray-400">تنفيذ احترافي وسريع مع ضمان الجودة العالية</p>
          </div>
          
          <div className="text-center">
            <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">دعم مستمر</h4>
            <p className="text-gray-400">دعم فني متواصل وصيانة دورية لضمان الأداء الأمثل</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-12 rounded-2xl bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-green-600/20 border border-blue-500/30 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">هل تحتاج لحل تقني مخصص؟</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            فريقنا المتخصص جاهز لتقديم الاستشارة المجانية والحل الأمثل لاحتياجات عملك
          </p>
          <a
            href="https://wa.me/201065063147"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 text-lg"
          >
            <span>تواصل معنا الآن</span>
            <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
