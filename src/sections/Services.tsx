import { Smartphone, Cpu, Wifi, Monitor, ShoppingCart, Settings, Zap, BarChart3, Users, Headphones } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'إصلاح وصيانة الشاشات',
      description: 'إصلاح وصيانة شاملة لجميع أنواع الشاشات والمونيتورات بأحدث التقنيات',
      category: 'تقني'
    },
    {
      icon: Smartphone,
      title: 'تحديث السوفت وير',
      description: 'تحديث وتطوير البرامج الثابتة لجميع الأجهزة الإلكترونية',
      category: 'برمجة'
    },
    {
      icon: Wifi,
      title: 'برمجة وتركيب الميكروتيك',
      description: 'حلول شبكات احترافية وبرمجة أنظمة الميكروتيك المتقدمة',
      category: 'شبكات'
    },
    {
      icon: Cpu,
      title: 'كروت الصيانة والإصلاح',
      description: 'توفير وبرمجة كروت الصيانة المتخصصة لجميع الأجهزة',
      category: 'قطع غيار'
    },
    {
      icon: ShoppingCart,
      title: 'تركيب أنظمة الكاشير',
      description: 'تركيب واستقرار كامل لأنظمة نقاط البيع (POS) الاحترافية',
      category: 'كاشير'
    },
    {
      icon: Settings,
      title: 'برمجة أنظمة الكاشير',
      description: 'برمجة مخصصة وتطوير أنظمة الكاشير حسب احتياجات عملك',
      category: 'كاشير'
    },
    {
      icon: BarChart3,
      title: 'الأنظمة المحاسبية',
      description: 'حلول محاسبية متكاملة وأنظمة إدارة المخزون والفواتير',
      category: 'محاسبة'
    },
    {
      icon: Headphones,
      title: 'صيانة وتطوير الكاشير',
      description: 'صيانة دورية وتطوير مستمر لأنظمة الكاشير والدعم الفني 24/7',
      category: 'كاشير'
    },
    {
      icon: Zap,
      title: 'كاميرات المراقبة',
      description: 'تركيب وبرمجة أنظمة المراقبة الأمنية الحديثة',
      category: 'أمان'
    },
    {
      icon: Users,
      title: 'التدريب والدعم الفني',
      description: 'تدريب شامل على استخدام الأنظمة والدعم الفني المستمر',
      category: 'دعم'
    },
  ];

  const categories = ['الكل', 'كاشير', 'محاسبة', 'تقني', 'برمجة', 'شبكات', 'أمان', 'دعم'];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">خدماتنا </span>
            <span className="text-gradient">المتميزة</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات التقنية واحترافية، من الصيانة والإصلاح إلى أنظمة الكاشير والحلول المحاسبية المتكاملة
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                category === 'الكل'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/50 border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 group-hover:bg-orange-500/30 transition-all">
                  <service.icon className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  <span className="inline-block px-2 py-1 rounded bg-orange-500/20 text-orange-300 text-xs font-medium">
                    {service.category}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-card border border-white/10 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">هل تحتاج لخدمة مخصصة؟</h3>
          <p className="text-gray-400 mb-6">
            نحن هنا لتقديم حلول مخصصة تناسب احتياجات عملك بالضبط
          </p>
          <a href="https://wa.me/201065063147" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50">
              تواصل معنا الآن
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
