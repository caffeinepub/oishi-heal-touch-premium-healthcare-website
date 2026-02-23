import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Calendar, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
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

  const categories = [
    'Skin Care Tips',
    'Women\'s Health',
    'Child Care',
    'ENT Care',
    'Preventive Health',
    'Diagnostic Advice',
  ];

  const blogPosts = [
    {
      title: '10 Essential Skin Care Tips for Kolkata\'s Humid Climate',
      category: 'Skin Care Tips',
      date: 'February 20, 2026',
      excerpt:
        'Learn how to protect and nourish your skin in Kolkata\'s tropical climate. Our dermatologists share expert advice on maintaining healthy, glowing skin year-round.',
    },
    {
      title: 'Understanding Thyroid Health: Symptoms and Treatment',
      category: 'Preventive Health',
      date: 'February 18, 2026',
      excerpt:
        'Thyroid disorders are common but often go undiagnosed. Learn about the symptoms, diagnostic tests, and treatment options available at our clinic.',
    },
    {
      title: 'Women\'s Health: Importance of Regular Checkups',
      category: 'Women\'s Health',
      date: 'February 15, 2026',
      excerpt:
        'Regular health screenings are crucial for women\'s wellness. Discover which tests you should get and when, from our experienced gynecologists.',
    },
    {
      title: 'Managing Joint Pain: When to See an Orthopedic Specialist',
      category: 'Preventive Health',
      date: 'February 12, 2026',
      excerpt:
        'Joint pain can significantly impact your quality of life. Learn when it\'s time to consult an orthopedic specialist and what treatment options are available.',
    },
    {
      title: 'Child Vaccination Schedule: A Complete Guide for Parents',
      category: 'Child Care',
      date: 'February 10, 2026',
      excerpt:
        'Keep your child protected with timely vaccinations. Our pediatricians provide a comprehensive guide to the vaccination schedule for children.',
    },
    {
      title: 'ENT Health: Common Ear, Nose, and Throat Problems',
      category: 'ENT Care',
      date: 'February 8, 2026',
      excerpt:
        'From sinusitis to hearing loss, learn about common ENT issues and their treatments. Expert advice from our ENT specialists.',
    },
    {
      title: 'Benefits of Physiotherapy for Chronic Pain Management',
      category: 'Preventive Health',
      date: 'February 5, 2026',
      excerpt:
        'Discover how physiotherapy can help manage chronic pain without medication. Learn about IFT, TENS, and other advanced therapy options.',
    },
    {
      title: 'Diabetes Prevention: Lifestyle Changes That Matter',
      category: 'Preventive Health',
      date: 'February 3, 2026',
      excerpt:
        'Prevent diabetes with simple lifestyle modifications. Our physicians share practical tips for maintaining healthy blood sugar levels.',
    },
    {
      title: 'Understanding Lab Reports: A Patient\'s Guide',
      category: 'Diagnostic Advice',
      date: 'February 1, 2026',
      excerpt:
        'Confused by medical terminology in your lab reports? This guide helps you understand common tests and what the results mean for your health.',
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-hero">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Health Blog</h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Expert health advice, tips, and insights from our medical professionals
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-14 h-14 rounded-full shadow-soft text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 mobile-spacing-lg">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 observe-scroll">
              <h2 className="text-3xl font-bold text-foreground mb-6">Categories</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-6 py-2 rounded-full text-base"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="card-premium relative shadow-soft hover:shadow-large border-0 flex flex-col observe-scroll">
                  <div className="card-border-glow"></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="rounded-full px-4 py-1">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-2xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-base text-muted-foreground mb-6 flex-1 leading-relaxed">{post.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="w-full justify-between group rounded-full hover:bg-secondary transition-all duration-300"
                      size="lg"
                    >
                      Read More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 mobile-spacing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 observe-scroll">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed observe-scroll">
            Follow our blog for regular updates on health, wellness, and medical advice from our expert doctors
          </p>
        </div>
      </section>
    </div>
  );
}
