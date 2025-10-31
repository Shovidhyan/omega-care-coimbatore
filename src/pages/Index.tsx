import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  ArrowRight,
  Heart,
  Shield,
  Clock,
  Users,
  Activity,
  Scissors,
  Brain,
  UserCheck,
  Droplet,
  Droplets,
  Baby,
  Home,
  ChefHat,
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Award,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactButton from "@/components/StickyContactButton";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-nursing.jpg";
import criticalCareImage from "@/assets/critical-care.jpg";
import elderlyCareImage from "@/assets/elderly-care.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";
import babyCareImage from "@/assets/baby-care.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

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

  const services = [
    {
      icon: Activity,
      title: "Critical Care Nursing",
      description:
        "Expert 24/7 monitoring and care for patients with critical health conditions requiring intensive medical attention and support.",
      image: criticalCareImage,
    },
    {
      icon: Heart,
      title: "Tracheostomy Care",
      description:
        "Specialized care for patients with tracheostomy tubes, including cleaning, suctioning, and emergency management by trained professionals.",
    },
    {
      icon: Scissors,
      title: "Post-Surgery Care",
      description:
        "Comprehensive post-operative care including wound management, pain control, medication administration, and recovery monitoring.",
    },
    {
      icon: Brain,
      title: "Post-Stroke Rehabilitation",
      description:
        "Dedicated rehabilitation support focusing on mobility, speech, and daily activities to help stroke survivors regain independence.",
    },
    {
      icon: Users,
      title: "Elder / Senior Citizen Care",
      description:
        "Compassionate and dignified care for elderly individuals, ensuring comfort, companionship, and assistance with daily living activities.",
      image: elderlyCareImage,
    },
    {
      icon: UserCheck,
      title: "Attender Care",
      description:
        "Professional attendants to assist with patient mobility, personal hygiene, feeding, and providing companionship throughout the day.",
    },
    {
      icon: Droplet,
      title: "Ryles Tube Care",
      description:
        "Expert management of nasogastric feeding tubes including insertion, feeding administration, and maintenance with proper hygiene.",
    },
    {
      icon: Droplets,
      title: "Catheter Care",
      description:
        "Professional urinary catheter management including insertion, maintenance, and infection prevention with strict hygiene protocols.",
    },
    {
      icon: Baby,
      title: "Baby Care",
      description:
        "Gentle and expert newborn care including feeding, bathing, sleep monitoring, and guidance for new parents on infant care.",
      image: babyCareImage,
    },
    {
      icon: Home,
      title: "House Maid Services",
      description:
        "Reliable housekeeping support to maintain a clean and healthy home environment, allowing families to focus on patient care.",
    },
    {
      icon: ChefHat,
      title: "Cooking Services",
      description:
        "Nutritious meal preparation tailored to dietary requirements and medical conditions, ensuring patients receive proper nutrition.",
    },
    {
      icon: Dumbbell,
      title: "Physiotherapy",
      description:
        "Professional physiotherapy sessions at home focusing on mobility improvement, pain management, and functional recovery.",
      image: physiotherapyImage,
    },
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    const message = `*New Service Request*%0A%0AName: ${encodeURIComponent(
      formData.name
    )}%0APhone: ${encodeURIComponent(formData.phone)}%0AService Needed: ${encodeURIComponent(
      formData.service || "Not specified"
    )}%0AMessage: ${encodeURIComponent(formData.message || "No additional message")}`;

    window.open(`https://wa.me/919342036924?text=${message}`, "_blank");

    toast.success("Redirecting to WhatsApp...");

    setFormData({
      name: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyContactButton />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
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
              <Button
                size="lg"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="group"
              >
                Book a Nurse Now
                <ArrowRight className="ml-2 w-5 h-5 transition-smooth group-hover:translate-x-1" />
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About Omega Home Nursing Care
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in leading-relaxed">
              Dedicated to providing compassionate, professional home nursing care that brings
              comfort and healing to your doorstep.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
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

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h3>
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
                  <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Our Families Say
            </h3>
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
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">— {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-secondary/50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Comprehensive Care Services
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in leading-relaxed">
              From critical care to daily assistance, we provide a full spectrum of professional
              nursing and support services in the comfort of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h2>
            <p className="text-xl text-muted-foreground animate-fade-in leading-relaxed">
              We're here to answer your questions and provide the care your loved ones deserve.
              Reach out to us anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We're available 24/7 to assist you. Feel free to reach out through any of the
                  following channels:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 rounded-lg bg-card shadow-soft hover:shadow-hover transition-smooth">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Address</h4>
                    <p className="text-muted-foreground text-sm">
                      17/5, Lakshmipuram 1st Street
                      <br />
                      Coimbatore - 641045
                      <br />
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-card shadow-soft hover:shadow-hover transition-smooth">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <a
                      href="tel:+919342036924"
                      className="text-primary hover:underline block text-sm"
                    >
                      +91 93420 36924
                    </a>
                    <a
                      href="tel:+918072790044"
                      className="text-primary hover:underline block text-sm"
                    >
                      +91 80727 90044
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-card shadow-soft hover:shadow-hover transition-smooth">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <a
                      href="mailto:johnbosco2882@gmail.com"
                      className="text-primary hover:underline text-sm"
                    >
                      johnbosco2882@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg bg-card shadow-soft hover:shadow-hover transition-smooth">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      24/7 Available
                      <br />
                      All Days of the Week
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-6">Request a Service</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <Input
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="e.g., Elderly Care, Post-Surgery Care"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Request via WhatsApp
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you'll be redirected to WhatsApp to complete your
                  request.
                </p>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Find Us on Map</h3>
            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2615873015985!2d76.95815731464087!3d11.016434992154836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Omega Home Nursing Care Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Home Nursing Care?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Our compassionate team is ready to provide professional care in the comfort of your
            home. Available 24/7 for your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started Today
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
      </section>

      <Footer />
    </div>
  );
};

export default Index;
