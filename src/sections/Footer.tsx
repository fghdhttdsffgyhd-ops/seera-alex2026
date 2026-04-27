import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'الخدمات', href: '#services' },
    { label: 'عن الشركة', href: '#about' },
    { label: 'لماذا نحن', href: '#why-us' },
    { label: 'التواصل', href: '#contact' },
  ];

  const services = [
    'إصلاح الشاشات',
    'تحديث السوفت وير',
    'برمجة الميكروتيك',
    'أنظمة الكاشير',
    'الأنظمة المحاسبية',
    'كاميرات المراقبة',
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-background border-t border-white/10">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">سيرا</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                شركة متخصصة في تقديم الحلول التقنية والخدمات المحاسبية المتكاملة
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 hover:bg-orange-500/30 transition-all"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">الخدمات</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">تواصل معنا</h4>
              <div className="space-y-4">
                <a
                  href="tel:+201065063147"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+201065063147</span>
                </a>
                <a
                  href="mailto:info@seera-tech.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@seera-tech.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>الإسكندرية، مصر</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>
              © {currentYear} سيرا للحلول التقنية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                شروط الخدمة
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                سياسة الاستخدام
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201065063147"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50 animate-bounce"
        title="تواصل عبر الواتس"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.214-3.675-.964.984 3.595-.235.364a9.847 9.847 0 1013.201-13.196c.001 0 .003 0 .005 0z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
