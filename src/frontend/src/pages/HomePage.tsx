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
  Sparkles,
  Calendar,
  ArrowRight,
  Zap,
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

  const premiumServices = [
    {
      icon: Stethoscope,
      title: 'Multi-Specialty Consultations',
      description: 'Expert care across Dermatology, Orthopedics, ENT, Gynecology, Pediatrics, and General Medicine. Our experienced specialists provide personalized treatment plans tailored to your unique health needs.',
      cta: 'Book Appointment',
      ctaLink: 'tel:9875539688',
    },
    {
      icon: Activity,
      title: 'Advanced Physiotherapy',
      description: 'State-of-the-art physiotherapy services including IFT/TENS therapy, traction therapy, and rehabilitation programs. Our certified physiotherapists help you recover faster and regain mobility with evidence-based treatments.',
      cta: 'Schedule Consultation',
      ctaLink: 'tel:9875539688',
    },
    {
      icon: Microscope,
      title: 'Pathkind Lab Diagnostics',
      description: 'Comprehensive diagnostic services with our trusted Pathkind Lab partnership. Get accurate test results for full body checkups, preventive health packages, and specialized tests—all with 10% OFF on full body checkups.',
      cta: 'Explore Lab Tests',
      ctaLink: '/lab-tests',
    },
    {
      icon: Heart,
      title: 'Ultrasound & Imaging',
      description: 'Modern ultrasound and diagnostic imaging services for accurate diagnosis and monitoring. Our advanced equipment and skilled technicians ensure precise results for obstetric, abdominal, and musculoskeletal imaging.',
      cta: 'Learn More',
      ctaLink: 'tel:9875539688',
    },
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
              Premium Healthcare in Beleghata
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

      <section className="py-16 md:py-20 bg-[oklch(0.75_0.08_180)] mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto observe-scroll">
            <Card className="card-premium relative shadow-large border-0 overflow-hidden">
              <div className="card-border-glow"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
              <CardHeader className="text-center pb-4 relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-soft">
                  <Sparkles className="w-8 h-8 text-primary card-icon" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4">About Oishi Heal Touch</CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  Your Trusted Healthcare Partner in Beleghata, Kolkata
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10 px-6 md:px-12 pb-10">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  At Oishi Heal Touch, we are committed to providing comprehensive, compassionate healthcare services to our community. With a team of experienced specialists and state-of-the-art facilities, we offer expert medical care across multiple specialties including dermatology, orthopedics, gynecology, pediatrics, and more.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                  As a trusted Pathkind Lab partner, we ensure accurate diagnostics and preventive health packages, all under one roof. Your health and well-being are our top priorities.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-2 hover:bg-secondary hover:scale-105 transition-all duration-300 px-8 py-6 text-base mobile-touch-target"
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 observe-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive healthcare solutions designed for your well-being
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {premiumServices.map((service, index) => {
              const Icon = service.icon;
              const isExternalLink = service.ctaLink.startsWith('tel:');
              
              return (
                <Card 
                  key={index} 
                  className="card-premium relative shadow-soft hover:shadow-premium border-0 transition-all duration-300 hover:-translate-y-2 observe-scroll group h-full"
                >
                  <div className="card-border-glow"></div>
                  <CardContent className="p-8 md:p-10 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 shadow-soft group-hover:shadow-medium transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary card-icon" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    
                    {isExternalLink ? (
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-soft hover:shadow-premium-md hover:scale-105 transition-all duration-300 px-8 py-6 text-base md:text-lg mobile-touch-target group/btn"
                      >
                        <a href={service.ctaLink}>
                          <Calendar className="w-5 h-5 mr-2 group-hover/btn:animate-icon-bounce" />
                          {service.cta}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    ) : (
                      <Button
                        asChild
                        size="lg"
                        className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-soft hover:shadow-premium-md hover:scale-105 transition-all duration-300 px-8 py-6 text-base md:text-lg mobile-touch-target group/btn"
                      >
                        <Link to={service.ctaLink}>
                          <Zap className="w-5 h-5 mr-2 group-hover/btn:animate-icon-bounce" />
                          {service.cta}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white mobile-spacing-lg">
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing-lg">
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
