import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function TestimonialsPage() {
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

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Excellent care and professional staff. Dr. Swarnali Maity is very knowledgeable and caring. The clinic is clean and well-maintained.',
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      text: 'Best orthopedic treatment in Kolkata. Dr. Sudipta Samanta helped me recover quickly from my knee injury. Highly recommended!',
    },
    {
      name: 'Anita Das',
      rating: 5,
      text: 'Very clean facility with modern equipment. The Pathkind lab reports are accurate and fast. Staff is courteous and helpful.',
    },
    {
      name: 'Amit Ghosh',
      rating: 5,
      text: 'Affordable and quality healthcare. Highly recommend for families in Beleghata area. Dr. Salim Zaman is an excellent physician.',
    },
    {
      name: 'Sneha Banerjee',
      rating: 5,
      text: 'Dr. Nidhi Agarwal is an excellent gynecologist. Very patient and understanding. Made me feel comfortable throughout my pregnancy.',
    },
    {
      name: 'Rahul Chatterjee',
      rating: 5,
      text: 'Great experience with the physiotherapy services. The IFT therapy really helped with my back pain. Professional and caring staff.',
    },
    {
      name: 'Meera Sen',
      rating: 5,
      text: 'Dr. P.S. Nayak treated my skin condition effectively. Very knowledgeable dermatologist. The consultation was thorough and helpful.',
    },
    {
      name: 'Sanjay Mukherjee',
      rating: 5,
      text: 'Excellent ENT specialist Dr. Sayan Banerjee. He diagnosed my problem accurately and the treatment worked perfectly. Thank you!',
    },
    {
      name: 'Ritu Dutta',
      rating: 5,
      text: 'Dr. Goutam Ghosh is wonderful with children. My son was comfortable throughout the checkup. Highly recommend for pediatric care.',
    },
    {
      name: 'Arijit Roy',
      rating: 5,
      text: 'The lab test packages are very affordable. Got my full body checkup done with 10% discount. Reports were ready in 24 hours.',
    },
    {
      name: 'Soma Chakraborty',
      rating: 5,
      text: 'Clean and hygienic clinic. All COVID protocols are followed strictly. Feel safe bringing my family here for treatment.',
    },
    {
      name: 'Debashis Pal',
      rating: 5,
      text: 'Dr. Biswajit Dutta is an excellent orthopedic surgeon. His treatment plan for my shoulder pain was very effective.',
    },
    {
      name: 'Kavita Singh',
      rating: 5,
      text: 'The ultrasound facility is modern and the technician is very professional. Got my reports explained clearly by the doctor.',
    },
    {
      name: 'Subrata Bose',
      rating: 5,
      text: 'Dr. Pradyut Majumdar is a caring and attentive physician. Takes time to listen to all concerns. Very satisfied with the treatment.',
    },
    {
      name: 'Nandini Ghosh',
      rating: 5,
      text: 'Booking appointment was very easy. Staff is friendly and helpful. The clinic location is convenient with good parking facility.',
    },
  ];

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Patient Testimonials</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Read what our patients have to say about their experience with us
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0 observe-scroll">
                <div className="card-border-glow"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 observe-scroll">
            Join Our Happy Patients
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed observe-scroll">
            Experience the same quality care and compassionate treatment that our patients rave about
          </p>
        </div>
      </section>
    </div>
  );
}
