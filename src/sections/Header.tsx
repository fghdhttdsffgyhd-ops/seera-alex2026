import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'من نحن', href: '#about' },
    { name: 'تواصل معنا', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect border-b border-orange-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-white">س</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">سيرا</h1>
              <p className="text-xs text-orange-400">للحلول التقنية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/201065063147"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 gap-2">
                <Phone className="w-4 h-4" />
                <span>اتصل بنا</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-effect border-b border-orange-500/20 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-lg font-medium py-2 border-b border-gray-700/50"
            >
              {link.name}
            </button>
          ))}
          <a
            href="https://wa.me/201065063147"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4"
          >
            <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-full shadow-glow gap-2">
              <Phone className="w-5 h-5" />
              <span>اتصل بنا</span>
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
