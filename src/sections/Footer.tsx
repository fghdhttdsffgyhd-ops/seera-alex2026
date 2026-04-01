import { 
  Phone, 
  MessageCircle, 
  MapPin,
  ExternalLink,
  Heart
} from 'lucide-react';

const quickLinks = [
  { name: 'الرئيسية', href: '#home' },
  { name: 'خدماتنا', href: '#services' },
  { name: 'من نحن', href: '#about' },
  { name: 'تواصل معنا', href: '#contact' },
];

const services = [
  'إصلاح الشاشات',
  'تحديث السوفت وير',
  'كروت إنترنت',
  'الرسيفر والأطباق',
  'كاميرات المراقبة',
  'أجهزة البصمة',
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-glow">
                <span className="text-2xl font-bold text-white">س</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">سيرا</h3>
                <p className="text-xs text-orange-400">للحلول التقنية</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              نقدم جميع الخدمات التقنية باحترافية عالية، من إصلاح الشاشات وتحديث السوفت وير 
              إلى تركيب كاميرات المراقبة وبرمجة الميكروتيك.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/201065063147"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:01065063147"
                className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#services');
                    }}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:01065063147"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">اتصل بنا</p>
                    <p className="text-white font-medium">01065063147</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/201065063147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">واتساب</p>
                    <p className="text-white font-medium">01065063147</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">الموقع</p>
                  <p className="text-white font-medium">مصر</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-right">
              جميع الحقوق محفوظة © {new Date().getFullYear()} سيرا للحلول التقنية
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              صنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" /> في مصر
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/201065063147"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </footer>
  );
};

export default Footer;
