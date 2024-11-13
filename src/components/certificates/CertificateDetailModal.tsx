import { X2Icon } from "@/assets/icons/XIcon";
import { Certificate } from "@/types/Certificates";
import Image from "next/image";
import { FadeWrapper } from "../AOS/FadeWrapper/fade-wrapper";
interface CertificateDetailModalProps {
  certificate: Certificate;
  closeCertificateDetailModal: () => void;
}

export function CertificateDetailModal({ certificate, closeCertificateDetailModal }: CertificateDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="relative w-full h-full max-w-4xl max-h-90vh bg-zinc-950 rounded-xl overflow-hidden">
        <button
          type="button"
          onClick={closeCertificateDetailModal}
          className="absolute top-4 right-4 z-10 text-zinc-400"
        >
          <X2Icon />
        </button>
        <FadeWrapper dataAOS="zoom-in-up" className="relative w-full h-full">
          <Image src={certificate.image} alt="Certificate" layout="fill" objectFit="contain" />
        </FadeWrapper>
      </div>
    </div>
  );
}
