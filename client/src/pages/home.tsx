import Header from "@/components/header";
import Hero from "@/components/hero";
import Benefits from "@/components/benefits";
import ParentsSection from "@/components/parents-section";
import Testimonials from "@/components/testimonials";
import SchoolsSection from "@/components/schools-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <ParentsSection />
      <Testimonials />
      <SchoolsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
