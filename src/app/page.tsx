"use client";

import BGBODY from "@/assets/icons/bg.png";
import { AboutMeSection } from "@/components/about-us";
import { Banner } from "@/components/Banner/Banner";
import { CertificatesSection } from "@/components/certificates";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SkillsSection } from "@/components/skills";
import { WhatIDOSection } from "@/components/whatido";
import { useState } from "react";

export default function Home() {
  const bg = {
    backgroundImage: `url(${BGBODY.src})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };

  const [isContactFormOpen, setIsContactFormOpen] = useState<boolean>(false);

  const openContactFormModal = () => {
    setIsContactFormOpen(true);
  };

  return (
    <div>
      <Navbar openContactFormModal={openContactFormModal} />
      <Banner />

      <main style={bg}>
        <AboutMeSection />

        <WhatIDOSection />

        <SkillsSection />

        <CertificatesSection />
      </main>

      {/* <CallActionSection openContactFormModal={openContactFormModal} /> */}

      <Footer />
    </div>
  );
}
