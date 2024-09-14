import Image from "next/image";
import { Title2 } from "../Titles/Title2";
import { Title3 } from "../Titles/Title3";

import { CursorIconGreen, CursorIconOrange, CursorIconPurple } from "@/assets/icons/CursoIcon";

type Props = {};

export const WhatIDOSection = (props: Props) => {
  return (
    <section id="whatIdo" className="py-24 px-10 lg:px-28 space-y-24">
      <Title2 text="What I Do" />

      <article className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:justify-items-center justify-items-start">
        <div className="space-y-10">
          <Title3
            text="FullStack Development"
            Icon={CursorIconPurple}
            borderColor="border border-purple-600"
            bgCircleColor="bg-purple-600"
          />
          <p>
            I specialize in full-stack development using Django. I create robust and scalable web applications that meet
            the needs of clients, focusing on both backend and frontend development. My expertise includes developing
            RESTful APIs, integrating with various databases, and ensuring the overall security and performance of the
            application. On the frontend, I utilize modern JavaScript frameworks to create interactive and responsive
            user interfaces.
          </p>
        </div>

        <div className="w-full flex justify-center lg:justify-start">
          <Image
            src={"/landing-page.png"}
            alt="What this Code Lab does"
            className="w-[518px] h-[294px] object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </article>

      {/* <article className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:justify-items-center justify-items-start ">
        <div className="w-full flex justify-center lg:justify-start">
          <Image
            src={"/o-que-fazemos.png"}
            alt="What this Code Lab does"
            className="w-[518px] h-[485px] object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className="space-y-10 w-full">
          <Title3 text="Mobile Apps" Icon={CursorIconTurquoise} />
          <p>
            I develop mobile applications using React Native. My focus is on creating performant, user-friendly apps
            that work seamlessly on both iOS and Android platforms. I ensure that the apps I develop are not only
            functional but also provide an intuitive user experience. This includes designing custom UI components,
            optimizing the app for performance, and integrating with backend services to provide a seamless experience
            for the end-users.
          </p>
        </div>
      </article> */}

      <article className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:justify-items-center justify-items-start">
        <div className="w-full flex justify-center lg:justify-start">
          <Image
            src={"/websites.png"}
            alt="What this Code Lab does"
            className="w-[518px] h-[294px]"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>

        <div className="space-y-10">
          <Title3
            text="Websites"
            Icon={CursorIconOrange}
            borderColor="border border-orange-600"
            bgCircleColor="bg-orange-600"
          />
          <p>
            I create comprehensive solutions from design to implementation. My focus is on developing responsive,
            visually appealing, and optimized websites. My work includes content customization, feature integration, and
            ensuring an intuitive navigation experience. I use modern web technologies to build sites that are not only
            aesthetically pleasing but also fast and accessible. Whether it&apos;s s an e-commerce site, a personal
            blog, or a corporate website, I ensure it meets the highest standards of quality and usability.
          </p>
        </div>
      </article>

      <article className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:justify-items-center justify-items-start">
        <div className="space-y-10">
          <Title3
            text="Systems"
            Icon={CursorIconGreen}
            borderColor="border border-green-600"
            bgCircleColor="bg-green-600"
          />
          <p>
            I design custom solutions tailored to the specific needs of clients, focusing on efficiency, security, and
            integration. My approach includes designing intuitive interfaces and optimizing processes for your business.
            I leverage various technologies to create systems that streamline operations, improve productivity, and
            enhance overall business performance. From CRM systems to custom dashboards, I ensure that every solution I
            develop is secure, reliable, and easy to use.
          </p>
        </div>

        <div className="w-full flex justify-center lg:justify-start">
          <Image
            src={"/sistemas.png"}
            alt="What this Code Lab does"
            className="w-[518px] h-[294px] object-cover"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </article>
    </section>
  );
};
