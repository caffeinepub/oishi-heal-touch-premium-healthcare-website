import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, MapPin, Clock } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/919875539688?text=Name:%20${encodeURIComponent(
      formData.name
    )}%20Number:%20${encodeURIComponent(formData.phone)}%20Message:%20${encodeURIComponent(formData.message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with us for appointments, inquiries, or any assistance
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="shadow-soft border-0 rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-3xl">Get In Touch</CardTitle>
                  <CardDescription className="text-base">Fill out the form and we'll get back to you shortly</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="mt-2 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="mt-2 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-base">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="mt-2 rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-premium-md hover:shadow-premium-lg hover:scale-105 transition-all duration-300 mobile-touch-target"
                      size="lg"
                    >
                      <SiWhatsapp className="w-5 h-5 mr-2" />
                      Send via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="shadow-soft border-0 rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>Our Location</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    CIT More, Kalimuddin Sarkar Lane
                    <br />
                    Beleghata, Kolkata – 700010
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-secondary hover:scale-105 transition-all duration-300 mobile-touch-target"
                    size="lg"
                  >
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=CIT+More+Kalimuddin+Sarkar+Lane+Beleghata+Kolkata+700010"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-5 h-5 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <span>Phone & WhatsApp</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-secondary hover:scale-105 transition-all duration-300 mobile-touch-target"
                    size="lg"
                  >
                    <a href="tel:9875539688">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +91 98755 39688
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full border-2 hover:bg-secondary hover:scale-105 transition-all duration-300 mobile-touch-target"
                    size="lg"
                  >
                    <a href="https://wa.me/919875539688" target="_blank" rel="noopener noreferrer">
                      <SiWhatsapp className="w-5 h-5 mr-2" />
                      WhatsApp: +91 98755 39688
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-0 rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span>Clinic Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-base">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Saturday</span>
                      <span className="font-semibold">10:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-semibold">11:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-6">
                    * Doctor schedules may vary. Please call to confirm availability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 md:py-12">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-large border-0 rounded-3xl">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0!2d88.3832!3d22.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzExLjAiTiA4OMKwMjInNTkuNSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oishi Heal Touch Location"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
