import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Clock, IndianRupee } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function DoctorsPage() {
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

  const doctors = [
    { name: 'Dr. P.S. Nayak', specialty: 'Dermatologist', schedule: 'Wed 4:30pm', fees: '₹500' },
    { name: 'Dr. Soumyabrata Bagchi', specialty: 'Dermatologist', schedule: 'Mon–Fri 7:30pm', fees: '₹500' },
    { name: 'Dr. Swarnali Maity', specialty: 'Dermatologist', schedule: 'Mon–Sat 7:00–10:00pm', fees: '₹700' },
    { name: 'Dr. Sudipta Samanta', specialty: 'Orthopedic', schedule: 'Mon/Tue/Fri 8:30pm & Sat 11:00am', fees: '₹500' },
    { name: 'Dr. Biswajit Dutta', specialty: 'Orthopedic', schedule: 'Thu 6:00pm', fees: '₹500' },
    { name: 'Dr. Sayan Banerjee', specialty: 'ENT', schedule: 'Thu 7:30pm', fees: '₹500' },
    { name: 'Dr. Salim Zaman', specialty: 'General Physician', schedule: 'Mon–Sat 1:30pm & Sun 11:00am', fees: '₹550' },
    { name: 'Dr. Sayan Biswas', specialty: 'General Physician', schedule: 'By Appointment', fees: '₹500' },
    { name: 'Dr. Pradyut Majumdar', specialty: 'General Physician', schedule: 'Tue & Fri 6:30pm', fees: '₹500' },
    { name: 'Dr. Goutam Ghosh', specialty: 'Pediatrician', schedule: 'By Appointment', fees: '₹500' },
    { name: 'Dr. Pallavi Sinha', specialty: 'Gynecologist', schedule: 'By Appointment', fees: '₹500' },
    { name: 'Dr. Nidhi Agarwal', specialty: 'Gynecologist', schedule: 'Mon/Thu/Fri 6pm; Tue/Sun All Day', fees: '₹500' },
  ];

  const specialtyColors: Record<string, string> = {
    Dermatologist: 'bg-blue-100 text-blue-800',
    Orthopedic: 'bg-green-100 text-green-800',
    ENT: 'bg-purple-100 text-purple-800',
    'General Physician': 'bg-orange-100 text-orange-800',
    Pediatrician: 'bg-pink-100 text-pink-800',
    Gynecologist: 'bg-rose-100 text-rose-800',
  };

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Expert Doctors</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Meet our team of verified and experienced specialists dedicated to your health
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0 observe-scroll">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                  </div>
                  <Badge className={`${specialtyColors[doctor.specialty] || 'bg-gray-100 text-gray-800'} rounded-full px-4 py-1`}>
                    {doctor.specialty}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Schedule</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{doctor.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IndianRupee className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">Consultation Fee</p>
                      <p className="text-sm text-muted-foreground">{doctor.fees}</p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-6 rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-sm hover:shadow-premium-md hover:scale-105 transition-all duration-300 mobile-touch-target"
                    size="lg"
                  >
                    <a href="tel:9875539688">
                      <Phone className="w-5 h-5 mr-2" />
                      Book Appointment
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Need Help Choosing a Doctor?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Call us and our staff will help you book an appointment with the right specialist
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 px-10 py-6 text-lg mobile-touch-target"
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
