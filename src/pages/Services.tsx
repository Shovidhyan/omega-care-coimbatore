import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContactButton from "@/components/StickyContactButton";
import ServiceCard from "@/components/ServiceCard";
import {
  Activity,
  Heart,
  Scissors,
  Brain,
  Users,
  UserCheck,
  Droplet,
  Droplets,
  Baby,
  Home,
  ChefHat,
  Dumbbell,
} from "lucide-react";
import criticalCareImage from "@/assets/critical-care.jpg";
import elderlyCareImage from "@/assets/elderly-care.jpg";
import physiotherapyImage from "@/assets/physiotherapy.jpg";
import babyCareImage from "@/assets/baby-care.jpg";

const Services = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <StickyContactButton />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Our Comprehensive Care Services
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in leading-relaxed">
              From critical care to daily assistance, we provide a full spectrum of professional
              nursing and support services in the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Quality Home Care?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team is available 24/7 to discuss your specific needs and create a personalized
              care plan for your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919342036924"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth shadow-soft hover:shadow-hover"
              >
                Call: +91 93420 36924
              </a>
              <a
                href="https://wa.me/919342036924"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20BA5A] transition-smooth shadow-soft hover:shadow-hover"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
