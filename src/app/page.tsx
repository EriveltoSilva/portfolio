import backgroundImage from "@/assets/images/bg.webp";
import { AboutMeSection } from "@/components/about-us";
import { Banner } from "@/components/Banner/Banner";
import { CertificatesSection } from "@/components/certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";
import { WhatIDOSection } from "@/components/whatido";

export default function Home() {
  const bg = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  return (
    <div>
      <Navbar />
      <Banner />

      <main style={bg}>
        <AboutMeSection />

        <WhatIDOSection />

        <SkillsSection />

        <ProjectsSection />

        <CertificatesSection />
      </main>

      {/* <CallActionSection openContactFormModal={openContactFormModal} /> */}

      <Footer />
    </div>
  );
}
