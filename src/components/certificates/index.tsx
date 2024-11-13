"use client";

import { useRef, useState } from "react";

import { ArrowLeftIcon } from "@/assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon";
import { certificates } from "@/data/certifications";
import { Certificate } from "@/types/Certificates";
import { Title2 } from "../Titles/Title2";
import { CertificateCard } from "./CertificateCard";
import { CertificateDetailModal } from "./CertificateDetailModal";

type Props = {};

export const CertificatesSection = (props: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const [isCertificateDetailOpen, setIsCertificateDetailOpen] = useState<boolean>(false);

  const openCertificateDetailModal = () => {
    setIsCertificateDetailOpen(true);
  };

  const closeCertificateDetailModal = () => {
    setIsCertificateDetailOpen(false);
  };
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate>(certificates[0]);
  const handle = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    openCertificateDetailModal();
  };

  return (
    <section id="certificates" className="py-24 px-10 lg:px-28 relative">
      <Title2 text="Courses | Certifications | Workshops | Events" />

      <div className="flex items-center gap-2">
        <div className="hidden md:block flex-shrink-0">
          <button onClick={scrollLeft} className="text-2xl">
            <ArrowLeftIcon width="40" height="40" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex flex-1 w-full overflow-x-auto overflow-y-hidden space-x-4 flex-nowrap hide-scrollbar"
        >
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              title={certificate.title}
              image={certificate.image}
              handleOnclick={() => handle(certificate)}
              description={certificate.description}
            />
          ))}
        </div>
        <div className="hidden lg:block flex-shrink-0">
          <button onClick={scrollRight} className="text-2xl">
            <ArrowRightIcon width="40" height="40" />
          </button>
        </div>
      </div>
      {isCertificateDetailOpen && (
        <CertificateDetailModal
          certificate={selectedCertificate}
          closeCertificateDetailModal={closeCertificateDetailModal}
        />
      )}
    </section>
  );
};
