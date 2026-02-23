import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Eye, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function AboutPage() {
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

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Oishi Heal Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your trusted healthcare partner in Kolkata
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="observe-scroll">
              <h2 className="text-4xl font-bold text-foreground mb-8">Introduction</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Oishi Heal Touch is a premium healthcare facility located in the heart of Beleghata, Kolkata. We are
                committed to providing compassionate, high-quality medical care to our community. As a trusted
                Pathkind Lab partner, we combine expert medical consultation with advanced diagnostic services under
                one roof.
              </p>
            </div>

            <div className="observe-scroll">
              <h2 className="text-4xl font-bold text-foreground mb-8">Our Story</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to make quality healthcare accessible and affordable, Oishi Heal Touch has
                grown to become one of the most trusted healthcare providers in the Beleghata area. Our journey began
                with a simple belief: every patient deserves expert care, modern facilities, and compassionate
                treatment.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Today, we serve hundreds of families with a team of verified specialists across multiple disciplines,
                from dermatology and orthopedics to gynecology and pediatrics. Our partnership with Pathkind Labs
                ensures that our patients receive accurate diagnostic services with quick turnaround times.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 observe-scroll">
              <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 shadow-soft">
                    <Target className="w-8 h-8 text-primary card-icon" />
                  </div>
                  <CardTitle className="text-3xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To provide accessible, affordable, and high-quality healthcare services to the community of
                    Kolkata. We strive to combine medical excellence with compassionate care, ensuring every patient
                    receives personalized attention and treatment.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 shadow-soft">
                    <Eye className="w-8 h-8 text-primary card-icon" />
                  </div>
                  <CardTitle className="text-3xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To be the most trusted and preferred healthcare destination in Kolkata, known for our medical
                    expertise, advanced facilities, and patient-centric approach. We envision a healthier community
                    where quality healthcare is within everyone's reach.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="observe-scroll">
              <h2 className="text-4xl font-bold text-foreground mb-10">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                  <div className="card-border-glow"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Heart className="w-7 h-7 text-primary card-icon" />
                      </div>
                      <CardTitle className="text-2xl">Compassion</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We treat every patient with empathy, respect, and understanding, recognizing that healthcare is
                      not just about treating conditions but caring for people.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                  <div className="card-border-glow"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Award className="w-7 h-7 text-primary card-icon" />
                      </div>
                      <CardTitle className="text-2xl">Excellence</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We maintain the highest standards of medical care through continuous learning, modern equipment,
                      and evidence-based practices.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                  <div className="card-border-glow"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Target className="w-7 h-7 text-primary card-icon" />
                      </div>
                      <CardTitle className="text-2xl">Integrity</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      We operate with transparency and honesty, ensuring our patients receive accurate information and
                      ethical treatment recommendations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-premium relative shadow-soft hover:shadow-large border-0">
                  <div className="card-border-glow"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 shadow-soft">
                        <Heart className="w-7 h-7 text-primary card-icon" />
                      </div>
                      <CardTitle className="text-2xl">Accessibility</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-lg">
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
