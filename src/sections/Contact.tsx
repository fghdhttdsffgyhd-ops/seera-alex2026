import { useEffect, useRef, useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Phone,
    title: 'اتصل بنا',
    value: '01065063147',
    description: 'متاح على مدار الساعة',
    href: 'tel:01065063147',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MessageCircle,
    title: 'واتساب',
    value: '01065063147',
    description: 'راسلنا على واتساب',
    href: 'https://wa.me/201065063147',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Clock,
    title: 'ساعات العمل',
    value: '24 ساعة / 7 أيام',
    description: 'خدمة على مدار الأسبوع',
    href: null,
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MapPin,
    title: 'الموقع',
    value: 'مصر',
    description: 'خدمة في جميع المحافظات',
    href: null,
    color: 'from-blue-500 to-cyan-500',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `الاسم: ${formData.name}%0Aالهاتف: ${formData.phone}%0Aالخدمة المطلوبة: ${formData.service}%0Aالرسالة: ${formData.message}`;
    window.open(`https://wa.me/201065063147?text=${message}`, '_blank');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 bg-gradient-tech overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-6">
            <Headphones className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">تواصل معنا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            نحن هنا <span className="text-gradient">لمساعدتك</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            لا تتردد في التواصل معنا لأي استفسار أو طلب خدمة. فريقنا جاهز لخدمتك على مدار الساعة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-gradient-card border-white/5 hover:border-orange-500/30 transition-all duration-300 hover-lift"
                >
                  <CardContent className="p-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                    <p className="text-orange-400 font-semibold mb-1">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                    {info.href && (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="absolute inset-0"
                      />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Contact Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-glow flex-shrink-0">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">تواصل عبر واتساب</h3>
                  <p className="text-gray-300 mb-3">احصل على استجابة سريعة وخدمة ممتازة</p>
                  <a
                    href="https://wa.me/201065063147"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full gap-2">
                      <MessageCircle className="w-4 h-4" />
                      <span>راسلنا الآن</span>
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="bg-gradient-card border-white/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">أرسل لنا رسالة</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">الاسم</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-2">رقم الهاتف</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">الخدمة المطلوبة</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-orange-500 focus:outline-none transition-colors appearance-none"
                    >
                      <option value="" className="bg-slate-900">اختر الخدمة</option>
                      <option value="إصلاح شاشات" className="bg-slate-900">إصلاح شاشات</option>
                      <option value="تحديث سوفت وير" className="bg-slate-900">تحديث سوفت وير</option>
                      <option value="كروت إنترنت" className="bg-slate-900">كروت إنترنت</option>
                      <option value="رسيفر وأطباق" className="bg-slate-900">رسيفر وأطباق صناعية</option>
                      <option value="كاميرات مراقبة" className="bg-slate-900">كاميرات مراقبة</option>
                      <option value="أجهزة بصمة" className="bg-slate-900">أجهزة بصمة</option>
                      <option value="أخرى" className="bg-slate-900">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm mb-2">الرسالة</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 gap-2"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>تم الإرسال بنجاح</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>إرسال عبر واتساب</span>
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
