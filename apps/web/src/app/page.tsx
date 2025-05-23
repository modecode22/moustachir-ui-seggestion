import ConsultantsSection from "@/components/sections/ConsultantsSection";
import ContactUs from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/hero/Hero";
import OurMission from "@/components/sections/OurMission";
import Services from "@/components/sections/Serviecs";

export default function Home() {


  return (
    <div>
      <Hero />
      <OurMission />
      <ConsultantsSection />
      <Services />
      <ContactUs />
    </div>
  );
}
