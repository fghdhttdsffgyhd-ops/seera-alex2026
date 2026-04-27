import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // إنشاء رسالة واتس
    const whatsappMessage = `مرحباً، أنا ${formData.name}\nالبريد: ${formData.email}\nالهاتف: ${formData.phone}\nالخدمة المطلوبة: ${formData.service}\nالرسالة: ${formData.message}`;
    const whatsappUrl = `https://wa.me/201065063147?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+201065063147',
      link: 'tel:+201065063147',
    },
    {
      icon: MessageCircle,
      title: 'واتس آب',
      value: '+201065063147',
      link: 'https://wa.me/201065063147',
    },
    {
      icon: MapPin,
      title: 'الموقع',
      value: 'الإسكندرية، مصر',
      link: '#',
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@seera-tech.com',
      link: 'mailto:info@seera-tech.com',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-tech">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">تواصل </span>
            <span className="text-gradient">معنا</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع أسئلتك والبدء في تقديم الخدمة لك فوراً
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">معلومات التواصل</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/30 transition-all">
                    <info.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Links */}
            <div className="p-6 rounded-lg bg-gradient-card border border-white/10">
              <h4 className="font-semibold text-white mb-4">الروابط السريعة</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/201065063147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>→</span> تواصل عبر الواتس
                </a>
                <a
                  href="tel:+201065063147"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>→</span> اتصل بنا مباشرة
                </a>
                <a
                  href="#services"
                  className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>→</span> استعرض الخدمات
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">أرسل لنا رسالة</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">الهاتف</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                    placeholder="رقم هاتفك"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">الخدمة المطلوبة</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all"
                >
                  <option value="">اختر الخدمة</option>
                  <option value="إصلاح شاشات">إصلاح شاشات</option>
                  <option value="تحديث سوفت وير">تحديث سوفت وير</option>
                  <option value="برمجة ميكروتيك">برمجة ميكروتيك</option>
                  <option value="تركيب كاشير">تركيب كاشير</option>
                  <option value="برمجة كاشير">برمجة كاشير</option>
                  <option value="أنظمة محاسبية">أنظمة محاسبية</option>
                  <option value="كاميرات مراقبة">كاميرات مراقبة</option>
                  <option value="خدمة أخرى">خدمة أخرى</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all resize-none"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/50"
              >
                إرسال الرسالة عبر الواتس
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
