import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-1.5" variant="secondary">
              Trusted Healthcare Partner in Kolkata
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium, Compassionate Healthcare in Kolkata
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Expert Specialists. Advanced Diagnostics. Trusted Pathkind Lab Partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="text-base px-8">
                <a href="tel:9875539688">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Appointment
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-8">
                <Link to="/doctors">View Our Doctors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare services under one roof
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Clinic Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {clinicServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                      <p className="text-sm font-medium text-foreground">{service.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="mb-4 bg-primary text-primary-foreground">Special Offer</Badge>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Pathkind Lab Services
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                10% OFF Full Body Checkup – Pathkind Partner
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {labServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 bg-white rounded-lg p-4">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg">
                <Link to="/lab-tests">Explore Lab Tests</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your health and well-being are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{highlight.text}</CardTitle>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real experiences from our valued patients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-base">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Appointment?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Call us now or visit our clinic for expert healthcare services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <a href="tel:9875539688">
                <Phone className="w-5 h-5 mr-2" />
                Call: 98755 39688
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Get Directions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
