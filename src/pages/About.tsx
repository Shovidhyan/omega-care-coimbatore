import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactButton from "@/components/StickyContactButton";
import { Heart, Award, Users, Star } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion First",
      description: "Every patient receives care with genuine warmth and empathy",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Certified nurses with extensive training and experience",
    },
    {
      icon: Users,
      title: "Family-Centered Care",
      description: "We work closely with families to ensure the best outcomes",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Continuous monitoring and improvement of our services",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The care my mother received was exceptional. The nurses were not only professional but also very caring and patient.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      text: "After my father's surgery, Omega's post-operative care made his recovery smooth and comfortable. Highly recommended!",
      rating: 5,
    },
    {
      name: "Lakshmi Venkatesh",
      text: "Professional, punctual, and compassionate. The elderly care service has been a blessing for our family.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyContactButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About Omega Home Nursing Care
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in leading-relaxed">
              Dedicated to providing compassionate, professional home nursing care that brings
              comfort and healing to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-4">
              <p className="leading-relaxed">
                Omega Home Nursing Care was founded with a simple yet profound mission: to bring
                high-quality medical care into the comfort and familiarity of patients' homes. We
                understand that healing happens best in a comfortable environment surrounded by loved
                ones.
              </p>
              <p className="leading-relaxed">
                With years of experience in healthcare, our team of certified nursing professionals
                has been serving the Coimbatore community with dedication and excellence. We've built
                our reputation on trust, compassion, and unwavering commitment to patient well-being.
              </p>
              <p className="leading-relaxed">
                Every member of our team undergoes rigorous training and brings extensive experience
                in their respective fields. From critical care to gentle elderly support, we ensure
                that each patient receives personalized attention tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-hover transition-smooth text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What Our Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Experience the Omega Difference
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of families who trust us with their loved ones' care
          </p>
          <a
            href="tel:+919342036924"
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-smooth shadow-hover"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
