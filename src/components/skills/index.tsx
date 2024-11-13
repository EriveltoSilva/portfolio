import { CursorIconGreen, CursorIconOrange, CursorIconPurple, CursorIconTurquoise } from "@/assets/icons/CursoIcon";
import {
  FaBootstrap,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLanguage,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiArduino,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiSpring,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Title2 } from "../Titles/Title2";
import { Title3 } from "../Titles/Title3";
import { TechnologyCard } from "../whatido/TechnologyCard";

type Props = {};

export const SkillsSection = (props: Props) => {
  return (
    <section id="skills" className="py-24 px-10 lg:px-28 space-y-16">
      <Title2 text="Skills and Tools" className="text-center" />

      <div className="space-y-16">
        <Title3 Icon={CursorIconOrange} text="Coding" bgCircleColor="bg-orange-500" borderColor="border-orange-500" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <TechnologyCard
            className="border-orange-500"
            title="HTML5"
            Icon={FaHtml5}
            iconClassName="bg-orange-500 text-white text-4xl rounded-sm p-1"
            description="A markup language used for structuring and presenting content on the web."
            expertiseLevel={100}
          />
          <TechnologyCard
            className="border-blue-500"
            title="CSS3"
            Icon={FaCss3}
            iconClassName="bg-blue-500 text-white text-4xl rounded-sm p-1"
            description="A style sheet language used for describing the look and formatting of a document written in HTML."
            expertiseLevel={70}
          />
          <TechnologyCard
            className="border-yellow-500"
            title="JavaScript"
            Icon={FaJs}
            iconClassName="bg-yellow-500 text-white text-4xl rounded-sm p-1"
            description="A high-level, just-in-time compiled programming language that conforms to the ECMAScript specification."
            expertiseLevel={95}
          />
          <TechnologyCard
            className="border-blue-500"
            title="TypeScript"
            Icon={SiTypescript}
            iconClassName="bg-blue-500 text-white text-4xl rounded-sm p-1"
            description="A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            expertiseLevel={75}
          />
          <TechnologyCard
            className="border-green-500"
            title="Python"
            Icon={FaPython}
            iconClassName="bg-green-500 text-white text-4xl rounded-sm p-1"
            description="A high-level programming language known for its readability and broad library support."
            expertiseLevel={95}
          />
          <TechnologyCard
            className="border-red-950"
            title="Java"
            Icon={FaJava}
            iconClassName="bg-red-950 text-white text-4xl rounded-sm p-1"
            description="A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible."
            expertiseLevel={65}
          />
          <TechnologyCard
            className="border-cyan-700"
            title="Arduino's C++"
            Icon={SiArduino}
            iconClassName="bg-cyan-700 text-white text-4xl rounded-sm p-1"
            description="A microcontroller programming language based on C++ used for building digital devices and interactive objects."
            expertiseLevel={95}
          />
        </div>
      </div>

      <div className="space-y-16">
        <Title3
          Icon={CursorIconPurple}
          text="Frameworks, Libraries and Others"
          bgCircleColor="bg-purple-700"
          borderColor="border-purple-700"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <TechnologyCard
            className="border-purple-700"
            title="Bootstrap5"
            Icon={FaBootstrap}
            iconClassName="bg-purple-700 text-white text-4xl rounded-sm p-1"
            description="A free and open-source CSS framework directed at responsive, mobile-first front-end web development."
            expertiseLevel={100}
          />
          <TechnologyCard
            className="border-cyan-400"
            title="TailwindCSS"
            Icon={SiTailwindcss}
            iconClassName="bg-cyan-400 text-white text-4xl rounded-sm p-1"
            description="A utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup."
            expertiseLevel={100}
          />
          <TechnologyCard
            className="border-cyan-400"
            title="ReactJS"
            Icon={FaReact}
            iconClassName="bg-cyan-400 text-white text-4xl rounded-sm p-1"
            description="A JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies."
            expertiseLevel={70}
          />
          <TechnologyCard
            className="border-zinc-500"
            title="Next.js"
            Icon={RiNextjsLine}
            iconClassName="bg-zinc-500 text-white text-4xl rounded-sm p-1"
            description="A React framework that enables functionality such as server-side rendering and generating static websites for React-based web applications."
            expertiseLevel={70}
          />
          <TechnologyCard
            className="border-red-900"
            title="Django"
            Icon={SiDjango}
            iconClassName="bg-red-900 text-white text-4xl rounded-sm p-1"
            description="A high-level Python web framework that encourages rapid development and clean, pragmatic design."
            expertiseLevel={95}
          />
          <TechnologyCard
            className="border-green-500"
            title="Spring"
            Icon={SiSpring}
            iconClassName="bg-green-500 text-white text-4xl rounded-sm p-1"
            description="A powerful, feature-rich framework for building Java applications, commonly used for creating enterprise-level web applications."
            expertiseLevel={50}
          />
          <TechnologyCard
            className="border-zinc-500"
            title="GitHub"
            Icon={FaGithub}
            iconClassName="bg-zinc-950 text-white text-4xl rounded-sm p-1"
            description="A web-based version-control and collaboration platform for software developers."
            expertiseLevel={95}
          />
        </div>
      </div>

      <div className="space-y-16">
        <Title3 Icon={CursorIconTurquoise} text="Database" bgCircleColor="bg-blue-300" borderColor="border-blue-300" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <TechnologyCard
            className="border-blue-300"
            title="PostgreSQL"
            Icon={SiPostgresql}
            iconClassName="bg-blue-300 text-white text-4xl rounded-sm p-1"
            description="A powerful, open source object-relational database system with over 30 years of active development."
            expertiseLevel={90}
          />
          <TechnologyCard
            className="border-red-500"
            title="MySQL"
            Icon={SiMysql}
            iconClassName="bg-red-950 text-white text-4xl rounded-sm p-1"
            description="An open-source relational database management system based on SQL – Structured Query Language."
            expertiseLevel={75}
          />
          <TechnologyCard
            className="border-yellow-500"
            title="SQLite"
            Icon={SiSqlite}
            iconClassName="bg-yellow-950 text-white text-4xl rounded-sm p-1"
            description="A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine."
            expertiseLevel={70}
          />
          <TechnologyCard
            className="border-zinc-500"
            title="DB Design"
            Icon={FaDatabase}
            iconClassName="bg-zinc-950 text-white text-4xl rounded-sm p-1"
            description="The process of producing a detailed data model of a database."
            expertiseLevel={78}
          />
        </div>
      </div>

      <div className="space-y-16">
        <Title3 Icon={CursorIconGreen} text="Languages" bgCircleColor="bg-green-600" borderColor="border-green-600" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
          <TechnologyCard
            className="border-green-600"
            title="Portuguese"
            Icon={FaLanguage}
            iconClassName="bg-green-600 text-white text-4xl rounded-sm p-1"
            description="The native language of Brazil and Portugal, and an official language in several other countries."
            expertiseLevel={100}
          />
          <TechnologyCard
            className="border-blue-500"
            title="English"
            Icon={FaLanguage}
            iconClassName="bg-blue-950 text-white text-4xl rounded-sm p-1"
            description="The global lingua franca and primary language of many fields including technology and business."
            expertiseLevel={75}
          />
        </div>
      </div>
    </section>
  );
};
