import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Eye, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Oishi Heal Touch</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted healthcare partner in Kolkata
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Oishi Heal Touch is a premium healthcare facility located in the heart of Beleghata, Kolkata. We are
                committed to providing compassionate, high-quality medical care to our community. As a trusted
                Pathkind Lab partner, we combine expert medical consultation with advanced diagnostic services under
                one roof.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded with a vision to make quality healthcare accessible and affordable, Oishi Heal Touch has
                grown to become one of the most trusted healthcare providers in the Beleghata area. Our journey began
                with a simple belief: every patient deserves expert care, modern facilities, and compassionate
                treatment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we serve hundreds of families with a team of verified specialists across multiple disciplines,
                from dermatology and orthopedics to gynecology and pediatrics. Our partnership with Pathkind Labs
                ensures that our patients receive accurate diagnostic services with quick turnaround times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide accessible, affordable, and high-quality healthcare services to the community of
                    Kolkata. We strive to combine medical excellence with compassionate care, ensuring every patient
                    receives personalized attention and treatment.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and preferred healthcare destination in Kolkata, known for our medical
                    expertise, advanced facilities, and patient-centric approach. We envision a healthier community
                    where quality healthcare is within everyone's reach.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">Compassion</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We treat every patient with empathy, respect, and understanding, recognizing that healthcare is
                      not just about treating conditions but caring for people.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Award className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">Excellence</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We maintain the highest standards of medical care through continuous learning, modern equipment,
                      and evidence-based practices.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Target className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">Integrity</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We operate with transparency and honesty, ensuring our patients receive accurate information and
                      ethical treatment recommendations.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">Accessibility</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      We believe quality healthcare should be affordable and accessible to all, which is why we offer
                      competitive pricing and flexible appointment scheduling.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
