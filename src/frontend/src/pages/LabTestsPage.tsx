import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Phone, Microscope, CheckCircle2, Users, Award } from 'lucide-react';

export default function LabTestsPage() {
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
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">Pathkind Lab Partner</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Lab Tests & Diagnostics</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Accurate, reliable diagnostic services with quick turnaround times
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:9875539688">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Lab Test
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Award className="w-6 h-6 text-primary" />
                    <span>10% OFF Full Body Checkup</span>
                  </CardTitle>
                  <CardDescription>Special offer for all patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get comprehensive health screening at discounted rates. Book your full body checkup today and
                    take charge of your health.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span>15% OFF for Senior Citizens</span>
                  </CardTitle>
                  <CardDescription>Special discount for seniors (60+ years)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We care for our senior citizens. Enjoy exclusive discounts on all lab tests and health packages.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Available Tests & Packages</h2>
              <p className="text-lg text-muted-foreground">
                Browse our comprehensive range of diagnostic tests
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {testCategories.map((category, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-3 text-left">
                      <Microscope className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-2">
                      {category.tests.map((test, testIndex) => (
                        <div key={testIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{test}</span>
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

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Why Choose Pathkind Labs?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">NABL Accredited</p>
                    <p className="text-sm text-muted-foreground">
                      Certified for quality and accuracy in diagnostic testing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Quick Reports</p>
                    <p className="text-sm text-muted-foreground">
                      Most reports available within 24-48 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Advanced Technology</p>
                    <p className="text-sm text-muted-foreground">
                      State-of-the-art equipment for precise results
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Home Sample Collection</p>
                    <p className="text-sm text-muted-foreground">
                      Convenient sample collection at your doorstep
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Book Your Lab Test?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Call us now to schedule your test or get more information
          </p>
          <Button asChild size="lg" variant="secondary">
            <a href="tel:9875539688">
              <Phone className="w-5 h-5 mr-2" />
              Call: 98755 39688
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
