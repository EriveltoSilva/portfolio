import { Certificate } from "@/types/Certificates";

enum TypeCertificate {
  Event = "event",
  Course = "Course",
}

export const certificates: Certificate[] = [
  {
    id: 9,
    title: "NLW Pocket: JavaScript - Full-stack Intermediário",
    type: TypeCertificate.Event,
    date: "Aug 14, 2024",
    hours: 5,
    image: "/certificates/Erivelto Silva - Event Certificate - NLW Pocket - RocketSeat.png",
    description: "",
  },
  {
    id: 8,
    title: "Django and React: Build a Multi-vendor E-commerce Website",
    type: TypeCertificate.Course,
    date: "Aug 11, 2024",
    hours: 36,
    image:
      "/certificates/Erivelto Silva Course Certificate - Django and React: Build a Multi-vendor E-commerce Website.jpg",
    description: "",
  },
  {
    id: 7,
    title: "Event - NLW Journey React from RockerSeat",
    type: TypeCertificate.Event,
    date: "July 14, 2024",
    hours: 4,
    image: "/certificates/Erivelto Silva - Event Certificate - NLW Journey - RocketSeat.png",
    description: "",
  },
  {
    id: 6,
    title: "Course - React do Zero a Maestria (c/hooks, router API, Projetos)",
    type: TypeCertificate.Course,
    image: "/certificates/Erivelto Silva Course Certificate - React do Zero a Maestria.jpg",
    date: "July 9, 2024",
    hours: 30.5,
    description: "",
  },
  {
    id: 5,
    title: "Event - NLW Expert trilha de Python from RockerSeat",
    type: TypeCertificate.Event,
    date: "Fev 9, 2024",
    hours: 5,
    image: "/certificates/Erivelto Silva - Event Certificate - NLW Expert - RocketSeat.png",
    description: "",
  },
  {
    id: 4,
    title: "LangChain MasterClass-OpenAI LLAMA2 GPT LLM APPs|| Python",
    type: TypeCertificate.Course,
    image:
      "/certificates/Erivelto SIlva Course Certificate - Langchain MasterClass - OpenAILLAMA2 GPT LLM Apps & Python.jpg",
    date: "Feb 8, 2024",
    hours: 10,
    description: "",
  },
  {
    id: 3,
    title: "Course - Curso de Django Web Framework e Django Rest Framework (DRF)",
    type: TypeCertificate.Course,
    image: "/certificates/Erivelto Silva Course Certificate - Django Web Framework and Django Rest Framework.jpg",
    date: "Jan 28, 2024",
    hours: 79,
    description: "",
  },
  {
    id: 2,
    title: "Python From Machine Learning: The Complete Beginner's Course",
    type: TypeCertificate.Course,
    image: "/certificates/Erivelto Silva Course Certificate - Python From Machine Learning.jpg",
    date: "Dec 10, 2023",
    hours: 2.5,
    description: "",
  },
  {
    id: 1,
    title: "Event - AI for Devs",
    type: TypeCertificate.Event,
    image: "/certificates/Erivelto Silva - Event Certificate - AI for Devs - RocketSeat.png",
    date: "Ago 22, 2023",
    hours: 10,
    description: "",
  },
];
