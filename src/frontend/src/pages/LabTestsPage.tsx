import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Phone, Microscope, CheckCircle2, Users, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function LabTestsPage() {
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

  const testCategories = [
    {
      title: 'Full Body Checkup',
      description: 'Comprehensive health screening package',
      tests: [
        'Complete Blood Count (CBC)',
        'Lipid Profile',
        'Liver Function Test',
        'Kidney Function Test',
        'Thyroid Profile',
        'Blood Sugar (Fasting & PP)',
        'Vitamin D & B12',
        'Urine Routine',
      ],
    },
    {
      title: 'Diabetes Screening',
      description: 'Monitor and manage diabetes effectively',
      tests: ['Fasting Blood Sugar', 'Post Prandial Blood Sugar', 'HbA1c', 'Urine Sugar'],
    },
    {
      title: 'Cardiac Health',
      description: 'Heart health monitoring tests',
      tests: ['Lipid Profile', 'ECG', 'Troponin T', 'CK-MB', 'Homocysteine'],
    },
    {
      title: 'Thyroid Profile',
      description: 'Complete thyroid function assessment',
      tests: ['T3', 'T4', 'TSH', 'Anti-TPO Antibodies'],
    },
    {
      title: 'Women\'s Health',
      description: 'Specialized tests for women',
      tests: ['Pap Smear', 'Mammography', 'Hormone Panel', 'Iron Studies', 'Bone Density'],
    },
    {
      title: 'Preventive Health Packages',
      description: 'Age-specific health screening packages',
      tests: [
        'Basic Health Checkup',
        'Advanced Health Checkup',
        'Senior Citizen Package',
        'Women Wellness Package',
        'Executive Health Checkup',
      ],
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2 rounded-full shadow-premium-sm">
              Pathkind Lab Partner
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Lab Tests & Diagnostics</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Accurate, reliable diagnostic services with quick turnaround times
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 px-10 py-6 text-lg mobile-touch-target"
              >
                <a href="tel:9875539688">
                  <Phone className="w-6 h-6 mr-3" />
                  Book Lab Test
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12 observe-scroll">
              <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-soft">
                      <Award className="w-6 h-6 text-primary card-icon" />
                    </div>
                    <span>10% OFF Full Body Checkup</span>
                  </CardTitle>
                  <CardDescription className="text-base mt-3">Special offer for all patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Get comprehensive health screening at discounted rates. Book your full body checkup today and
                    take charge of your health.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-soft">
                      <Users className="w-6 h-6 text-primary card-icon" />
                    </div>
                    <span>15% OFF for Senior Citizens</span>
                  </CardTitle>
                  <CardDescription className="text-base mt-3">Special discount for seniors (60+ years)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    We care for our senior citizens. Enjoy exclusive discounts on all lab tests and health packages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 observe-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Available Tests & Packages</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Browse our comprehensive range of diagnostic tests
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-6 observe-scroll">
              {testCategories.map((category, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-0 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 px-8 bg-white"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Microscope className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                        <p className="text-base text-muted-foreground mt-1">{category.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-6 pb-4 space-y-3 pl-16">
                      {category.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-base text-foreground">{test}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 observe-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Why Choose Pathkind Labs?</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                India's most trusted diagnostic partner
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 observe-scroll">
              {[
                { title: 'NABL Accredited', desc: 'Certified quality standards' },
                { title: 'Quick Reports', desc: 'Fast turnaround times' },
                { title: 'Advanced Technology', desc: 'State-of-the-art equipment' },
              ].map((benefit, index) => (
                <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0 text-center">
                  <div className="card-border-glow"></div>
                  <CardContent className="pt-10 pb-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-soft">
                      <CheckCircle2 className="w-8 h-8 text-primary card-icon" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary via-primary to-accent text-white mobile-spacing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Book Your Lab Test?</h2>
          <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Call us now to schedule your diagnostic tests with Pathkind Labs
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 px-10 py-6 text-lg mobile-touch-target"
          >
            <a href="tel:9875539688">
              <Phone className="w-6 h-6 mr-3" />
              Call: 98755 39688
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
