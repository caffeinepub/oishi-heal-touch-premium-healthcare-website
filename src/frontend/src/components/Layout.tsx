import { Outlet, Link, useLocation } from '@tanstack/react-router';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/lab-tests', label: 'Lab Tests' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/about', label: 'About' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'glass-effect-strong shadow-soft' : 'bg-white/95'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center group">
              <img 
                src="/assets/3a6f56c9-6623-412d-8fe2-58573e18b61f.png" 
                alt="Oishi Heal Touch Logo" 
                className="h-[60px] md:h-[65px] w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.href
                      ? 'bg-primary text-primary-foreground shadow-premium-sm'
                      : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-sm hover:shadow-premium-md hover:scale-105 transition-all duration-300"
              >
                <a href="tel:9875539688">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="rounded-full">
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-2 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        location.pathname === link.href
                          ? 'bg-primary text-primary-foreground shadow-soft'
                          : 'text-foreground hover:bg-secondary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-sm mobile-touch-target"
                  >
                    <a href="tel:9875539688">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 98755 39688
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-br from-slate-50 to-blue-50 border-t border-border mt-auto">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/assets/3a6f56c9-6623-412d-8fe2-58573e18b61f.png" 
                  alt="Oishi Heal Touch Logo" 
                  className="h-[50px] w-auto object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your trusted healthcare partner in Kolkata, providing compassionate and expert medical care.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 tracking-wide">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Specialist Consultations</li>
                <li>Lab Diagnostics</li>
                <li>Physiotherapy</li>
                <li>Health Checkups</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 tracking-wide">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>CIT More, Kalimuddin Sarkar Lane</li>
                <li>Beleghata, Kolkata – 700010</li>
                <li>
                  <a href="tel:9875539688" className="hover:text-primary transition-colors duration-200">
                    +91 98755 39688
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Oishi Heal Touch. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                  typeof window !== 'undefined' ? window.location.hostname : 'oishi-heal-touch'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline transition-all duration-200"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="lg:hidden mobile-sticky-cta">
        <Button
          asChild
          size="lg"
          className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-md hover:shadow-premium-lg hover:scale-[1.02] transition-all duration-300 mobile-touch-target"
        >
          <a href="tel:9875539688">
            <Phone className="w-5 h-5 mr-2" />
            Call: 98755 39688
          </a>
        </Button>
      </div>
    </div>
  );
}
