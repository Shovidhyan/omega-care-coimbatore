import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactButton from "@/components/StickyContactButton";
import heroImage from "@/assets/hero-nursing.jpg";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Treating every patient with dignity, respect, and genuine warmth",
    },
    {
      icon: Shield,
      title: "Certified Professionals",
      description: "Highly trained and experienced nursing staff with proven expertise",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock care whenever you need us, day or night",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description: "Customized care plans tailored to individual needs and preferences",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyContactButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Complete Nursing Care at Home —{" "}
              <span className="text-primary">Compassion with Professionalism</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in leading-relaxed">
              Serving Coimbatore and nearby cities with 24/7 trained nursing staff for all your
              healthcare needs at home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button size="lg" asChild className="group">
                <Link to="/services">
                  Book a Nurse Now
                  <ArrowRight className="ml-2 w-5 h-5 transition-smooth group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+919342036924">Call Us: +91 93420 36924</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Omega?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine medical excellence with heartfelt care to provide the best home nursing
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="gradient-hero rounded-2xl p-12 text-center shadow-hover">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Need Home Nursing Care?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Our compassionate team is ready to provide professional care in the comfort of your
              home. Available 24/7 for your peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:+919342036924">Call Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
