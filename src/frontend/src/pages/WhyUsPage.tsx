import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Activity, Heart, IndianRupee, Clock, Shield } from 'lucide-react';

export default function WhyUsPage() {
  const reasons = [
    {
      icon: Award,
      title: 'Pathkind Lab Partner',
      description:
        'We are proud partners with Pathkind Labs, one of India\'s most trusted diagnostic chains. This partnership ensures you receive NABL-accredited lab reports with the highest accuracy and reliability. Our patients benefit from advanced diagnostic technology and quick turnaround times.',
    },
    {
      icon: Users,
      title: 'Experienced Verified Doctors',
      description:
        'Our team consists of highly qualified and experienced specialists who are verified and registered with medical councils. Each doctor brings years of expertise in their respective fields, ensuring you receive the best possible medical care and treatment recommendations.',
    },
    {
      icon: Activity,
      title: 'Wide Specialist Coverage',
      description:
        'From dermatology to orthopedics, ENT to gynecology, we offer comprehensive specialist coverage under one roof. Whether you need a skin consultation, joint treatment, or women\'s health services, our diverse team of experts is here to help you.',
    },
    {
      icon: Heart,
      title: 'Advanced Therapies',
      description:
        'We offer state-of-the-art physiotherapy services including IFT/TENS therapy, traction therapy, and ultrasound treatments. Our modern equipment and trained therapists ensure effective treatment for pain management, injury recovery, and rehabilitation.',
    },
    {
      icon: IndianRupee,
      title: 'Affordable Pricing',
      description:
        'Quality healthcare shouldn\'t break the bank. We maintain competitive and transparent pricing for all our services. With consultation fees starting from ₹500 and special discounts on lab packages, we make premium healthcare accessible to everyone.',
    },
    {
      icon: Clock,
      title: 'Easy Booking',
      description:
        'Booking an appointment is simple and hassle-free. Just call us at 98755 39688, and our friendly staff will help you schedule a consultation at your convenience. We offer flexible timing options to accommodate your busy schedule.',
    },
    {
      icon: Shield,
      title: 'Clean & Hygienic Facility',
      description:
        'Your safety is our priority. We maintain the highest standards of cleanliness and hygiene throughout our facility. Our clinic is regularly sanitized, and we follow strict infection control protocols to ensure a safe environment for all patients.',
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Oishi Heal Touch</h1>
            <p className="text-lg text-muted-foreground">
              Discover what makes us the preferred healthcare destination in Kolkata
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{reason.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-16">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Experience the Difference
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who trust Oishi Heal Touch for their healthcare needs. We're
              committed to providing you with the best medical care in a comfortable and caring environment.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">12+</p>
                  <p className="text-sm text-muted-foreground">Expert Specialists</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Medical Services</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
