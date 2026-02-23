import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Clock, IndianRupee } from 'lucide-react';

export default function DoctorsPage() {
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
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Expert Doctors</h1>
            <p className="text-lg text-muted-foreground">
              Meet our team of verified and experienced specialists dedicated to your health
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  </div>
                  <Badge className={specialtyColors[doctor.specialty] || 'bg-gray-100 text-gray-800'}>
                    {doctor.specialty}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Schedule</p>
                      <p className="text-sm text-muted-foreground">{doctor.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Consultation Fee</p>
                      <p className="text-sm text-muted-foreground">{doctor.fees}</p>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-4" size="sm">
                    <a href="tel:9875539688">
                      <Phone className="w-4 h-4 mr-2" />
                      Book Appointment
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need Help Choosing a Doctor?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Call us and our staff will help you book an appointment with the right specialist
          </p>
          <Button asChild size="lg">
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
