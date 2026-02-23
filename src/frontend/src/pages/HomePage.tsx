import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef } from 'react';
import {
  Phone,
  Stethoscope,
  Heart,
  Activity,
  Users,
  Award,
  Clock,
  Shield,
  CheckCircle2,
  Star,
  Microscope,
  Baby,
  Eye,
} from 'lucide-react';

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.observe-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const clinicServices = [
    { name: 'Dermatology', icon: Activity },
    { name: 'Orthopedic', icon: Activity },
    { name: 'General Physician', icon: Stethoscope },
    { name: 'ENT', icon: Eye },
    { name: 'Gynecology', icon: Heart },
    { name: 'Pediatrics', icon: Baby },
    { name: 'Physiotherapy', icon: Activity },
    { name: 'Ultrasound', icon: Microscope },
    { name: 'IFT/TENS Therapy', icon: Activity },
    { name: 'Traction Therapy', icon: Activity },
  ];

  const labServices = [
    'Pathkind Lab Diagnostics',
    'Full Body Checkup',
    'Preventive Health Packages',
  ];

  const highlights = [
    { icon: Award, text: 'Trusted Pathkind Lab Partner' },
    { icon: Users, text: 'Verified & Experienced Specialists' },
    { icon: Activity, text: 'Advanced Physiotherapy & Ultrasound' },
    { icon: Shield, text: 'Clean & Hygienic Facility' },
    { icon: Heart, text: 'Affordable Consultation Fees' },
    { icon: Clock, text: 'Quick Appointment Booking' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Excellent care and professional staff. Dr. Swarnali Maity is very knowledgeable and caring.',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best orthopedic treatment in Kolkata. Dr. Sudipta Samanta helped me recover quickly.',
    },
    {
      name: 'Anita Das',
      rating: 5,
      text: 'Very clean facility with modern equipment. The Pathkind lab reports are accurate and fast.',
    },
    {
      name: 'Amit Ghosh',
      rating: 5,
      text: 'Affordable and quality healthcare. Highly recommend for families in Beleghata area.',
    },
    {
      name: 'Sneha Banerjee',
      rating: 5,
      text: 'Dr. Nidhi Agarwal is an excellent gynecologist. Very patient and understanding.',
    },
  ];

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 md:py-28 lg:py-36 overflow-hidden mobile-spacing-lg">
        <div className="floating-shape floating-shape-1"></div>
        <div className="floating-shape floating-shape-2"></div>
        <div className="floating-shape floating-shape-3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <Badge className="mb-8 text-sm px-6 py-2 rounded-full shadow-soft" variant="secondary">
              Trusted Healthcare Partner in Kolkata
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Premium, Compassionate Healthcare in Kolkata
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Expert Specialists. Advanced Diagnostics. Trusted Pathkind Lab Partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-7 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 mobile-touch-target"
              >
                <a href="tel:9875539688">
                  <Phone className="w-6 h-6 mr-3" />
                  Book Appointment
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 rounded-full border-2 hover:bg-secondary hover:scale-105 transition-all duration-300 mobile-touch-target"
              >
                <Link to="/doctors">View Our Doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services under one roof
            </p>
          </div>

          <div className="mb-16 observe-scroll">
            <h3 className="text-3xl font-semibold text-foreground mb-10 text-center">Clinic Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {clinicServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0">
                    <div className="card-border-glow"></div>
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary card-icon" />
                      </div>
                      <p className="text-base font-semibold text-foreground">{service.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="glass-effect rounded-3xl p-10 md:p-16 shadow-large observe-scroll">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-premium-sm">
                Special Offer
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Pathkind Lab Services
              </h3>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                10% OFF Full Body Checkup – Pathkind Partner
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {labServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-center space-x-3 bg-white rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-base font-medium text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 px-10 py-6 text-lg mobile-touch-target"
              >
                <Link to="/lab-tests">Explore Lab Tests</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your health and well-being are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0 observe-scroll">
                  <div className="card-border-glow"></div>
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 shadow-soft">
                      <Icon className="w-8 h-8 text-primary card-icon" />
                    </div>
                    <CardTitle className="text-xl leading-tight">{highlight.text}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0 observe-scroll">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center observe-scroll">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-2 hover:bg-secondary hover:scale-105 transition-all duration-300 px-10 py-6 text-lg mobile-touch-target"
            >
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden mobile-spacing-lg">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Call us now or visit our clinic for expert healthcare services
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-7 rounded-full shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 mobile-touch-target"
            >
              <a href="tel:9875539688">
                <Phone className="w-6 h-6 mr-3" />
                Call: 98755 39688
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 rounded-full bg-white text-primary hover:bg-white/90 border-0 shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 mobile-touch-target"
            >
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
