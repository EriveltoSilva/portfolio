"use client";

import { websiteURL } from "@/constants/addresses";
import { certificates } from "@/data/certifications";
import { projects } from "@/data/projects";
import Script from "next/script";

export function SeoSchema() {
  const projectSchemas = projects.map((project, index) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url:
      project.linkURL ||
      project.linkedinVideoURL ||
      project.youtubeVideoURL ||
      project.githubRepositoryURL ||
      websiteURL,
    creator: {
      "@type": "Person",
      name: "Erivelto Silva",
    },
    programmingLanguage: ["JavaScript", "Python", "TypeScript"],
    keywords: project.category,
  }));

  const certificateSchemas = certificates.map((cert, index) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    name: cert.title,
    description: cert.description,
    recognizedBy: {
      "@type": "Organization",
      name: cert.organizationName || "",
      url: cert.organizationURL || "",
    },
    credentialCategory: "ProfessionalCertificate",
    url: cert.url || "",
  }));

  return (
    <>
      {/* Dados fixos: Pessoa e Website */}
      <Script
        id="ld-json-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Erivelto Silva",
            alternateName: "Erivelto Clénio",
            url: websiteURL,
            image: `${websiteURL}/erivelto.jpg`,
            sameAs: [
              "https://www.linkedin.com/in/erivelto-da-costa-e-silva/",
              "https://github.com/EriveltoSilva",
              "https://x.com/erivelto_clenio",
            ],
            jobTitle: "Innovation Analyst and Full-stack developer",
            worksFor: {
              "@type": "Organization",
              name: "Banco BAI",
              url: "https://www.bancobai.ao/pt/particulares",
            },
            description:
              "Innovation Analyst and Full-stack developer passionate about researching and creating modern web applications with AI and IoT solutions.",
          }),
        }}
      />

      <Script
        id="ld-json-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Erivelto Silva | Full-Stack Developer & Digital Solutions Creator",
            url: websiteURL,
            description:
              "Portfolio website of Erivelto Silva, a full-stack developer focused on building modern web applications with AI and IoT solutions.",
            publisher: {
              "@type": "Person",
              name: "Erivelto Silva",
            },
          }),
        }}
      />

      {/* Projetos dinamicamente renderizados */}
      {projectSchemas.map((schema, idx) => (
        <Script
          key={`project-schema-${idx}`}
          id={`ld-json-project-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Certificados dinamicamente renderizados */}
      {certificateSchemas.map((schema, idx) => (
        <Script
          key={`certificate-schema-${idx}`}
          id={`ld-json-certificate-${idx}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
