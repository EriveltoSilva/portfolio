import Image from "next/image";

import { FadeWrapper } from "../AOS/FadeWrapper/fade-wrapper";
import { Title2 } from "../Titles/Title2";
type Props = {};

export const AboutMeSection = (props: Props) => {
  return (
    <section id="about" className="py-24 px-10 lg:px-28 grid lg:grid-cols-2 grid-cols-1 gap-4 justify-items-center">
      <FadeWrapper dataAOS="fade-right" className="space-y-10 lg:items-start">
        <Title2 text="About me" />
        <p>
          Hi, I&apos;m <span className="text-blue-600"> Erivelto Clénio da Costa e Silva</span>, a junior backend
          developer passionate about challenges and obsessed with constantly learning. I&apos;m always looking for new
          knowledge to drive innovative solutions.
        </p>

        <p>
          My journey in technology is marked by my desire for learn more. Currently, I am immersed in the study of
          Artificial Intelligence, firmly believing in its potential to improve solutions and automate processes,
          providing increasingly effective solutions.
        </p>

        <p>
          In addition to the technical skills I master, I am recognized for my enthusiasm in embracing new technologies
          and applying them to challenging projects. I see each challenge as an opportunity for growth, and my
          commitment to continuous learning is reflected in the search for increasingly innovative solutions.
        </p>

        <p>
          If you&apos;re looking for not just a developer with technical skills, but someone who brings a palpable
          enthusiasm for learning and applying emerging technologies, I&apos;m here to contribute and offer solutions
          that propel your projects to the next level.
        </p>
      </FadeWrapper>

      <FadeWrapper dataAOS="flip-down" className="flex justify-center lg:justify-start">
        <Image
          src={"/erivelto.jpg"}
          alt="Who is Erivelto Silva"
          className="min-w-[300px] md:w-full min-h-[264px] md:h-full object-cover"
          width={0}
          height={0}
          sizes="100vw"
        />
      </FadeWrapper>
    </section>
  );
};
