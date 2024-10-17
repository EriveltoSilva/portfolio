import { ProjectEntity } from "@/types/project";
import { PROJECT_CATEGORIES } from "@/types/project-categories";

export const projects: ProjectEntity[] = [
  // {
  //   id: XXX,
  //   title: "in-orbit-node-api",
  //   category: [PROJECT_CATEGORIES.BACKEND_API],
  //   description:
  //     "Goal Management API with Node for managing daily/weekly goals. Users can create, complete, view pending goals, and generate weekly summaries of achievements.",
  //   image: "/projects/in-orbit-frontend.gif",
  //   githubRepositoryURL: "https://github.com/EriveltoSilva/in-orbit-goal-control-system-api",
  // },
  {
    id: 10,
    title: "drf-todo-list-api 💻",
    category: [PROJECT_CATEGORIES.BACKEND_API],
    description:
      "Todo List API built with Django Rest Framework to practice RESTful API development. Features include CRUD operations, user authentication, task categorization, and priority setting.",
    image: "/projects/drf-todo-api.png",
    githubRepositoryURL: "https://github.com/EriveltoSilva/drf-todo-list-api",
  },
  {
    id: 9,
    title: "frontend challenge - Capputeeno 💻",
    category: [PROJECT_CATEGORIES.FRONTEND, PROJECT_CATEGORIES.WEB_APPLICATION, PROJECT_CATEGORIES.WEBSITE],
    description:
      "E-commerce platform project using Next.js, TailwindCSS, and TypeScript to enhance frontend skills. Features include product catalog with pagination, category filters, search, cart management, and checkout. Focus on server components and GraphQL API consumption.",
    image: "/projects/ecommerce-frontend-challenge.png",
    githubRepositoryURL: "https://github.com/EriveltoSilva/frontend-challenge-giecommerce",
  },
  {
    id: 8,
    title: "in-orbit-drf-api",
    category: [PROJECT_CATEGORIES.BACKEND_API],
    description:
      "Goal Management API with Django Rest Framework for managing daily/weekly goals. Users can create, complete, view pending goals, and generate weekly summaries of achievements.",
    image: "/projects/in-orbit-drf-api.png",
    githubRepositoryURL: "https://github.com/EriveltoSilva/in-orbit-django-rest-api",
  },
  {
    id: 7,
    title: "flask-api-for-barcode-generator",
    category: [PROJECT_CATEGORIES.BACKEND_API],
    description:
      "Flask-based API for automated barcode generation, designed for scalability and seamless integration with physical stores and e-commerce. Flexible, extensible, and scalable architecture.",
    image: "/projects/barcode-generator.png",
    githubRepositoryURL: "https://github.com/EriveltoSilva/flask-api-for-barcode-generator",
  },
  {
    id: 6,
    title: "Agro Energy",
    category: [PROJECT_CATEGORIES.FRONTEND, PROJECT_CATEGORIES.WEB_APPLICATION],
    description: "A web application to control energy parameters and soil health state.",
    image: "/projects/agro-energy.png",
    linkURL: "https://ka-solutions-agro-energy.vercel.app/",
  },
  {
    id: 5,
    title: "Travel plann.er",
    category: [PROJECT_CATEGORIES.FRONTEND, PROJECT_CATEGORIES.WEB_APPLICATION],
    description:
      "An intuitive and visually appealing travel planner. Built with React, TypeScript, and Tailwind CSS, Plann.er offers a suite of features to help you organize your upcoming adventures.",
    image: "/projects/travel-planner.png",
    linkURL: "https://travel-planner-frontend-seven.vercel.app/",
    githubRepositoryURL: "https://github.com/EriveltoSilva/travel-planner-frontend",
  },
  {
    id: 4,
    title: "Suspension Bridge",
    category: [PROJECT_CATEGORIES.ELECTRONIC_AUTOMATION, PROJECT_CATEGORIES.ROBOTIC],
    description:
      "Robotics project using Arduino to control a suspension bridge. Ultrasonic sensors detect boats, trigger traffic lights, and automatically open and close the bridge for safe passage",
    image: "/projects/suspension-bridge.png",
    linkedinVideoURL:
      "https://www.linkedin.com/posts/erivelto-da-costa-e-silva_robaejtica-ia-automaaexaeto-activity-7201252697021304833-2n_h?utm_source=share&utm_medium=member_desktop",
    githubRepositoryURL: "https://github.com/EriveltoSilva/suspension-bridge-control",
  },
  {
    id: 3,
    title: "AI-powered HR Assistant",
    category: [PROJECT_CATEGORIES.LLM, PROJECT_CATEGORIES.CHATBOT],
    description:
      "AI-powered HR Assistant prototype using LLMs for automated resume screening. It ranks relevant resumes, saves time, boosts accuracy, and simplifies recruitment with an intuitive interface.",
    image: "/projects/RH-ai-powered-assistant.png",
    linkedinVideoURL:
      "https://www.linkedin.com/posts/erivelto-da-costa-e-silva_recursoshumanos-triagemdecurraedculos-automaaexaeto-activity-7199593163492114432-PmJF?utm_source=share&utm_medium=member_desktop",
    githubRepositoryURL: "https://github.com/EriveltoSilva/human-resources-assistant-ai",
  },
  {
    id: 2,
    title: "Everything - Chatbot",
    category: [PROJECT_CATEGORIES.LLM, PROJECT_CATEGORIES.CHATBOT],
    description:
      "Q&A app built with Python, Streamlit, Langchain, and OpenAI API. Delivers fast, accurate responses, with potential applications in tourism, healthcare, culinary, and more. My promising start for AI projects!",
    image: "/projects/everythingAI.png",
    linkedinVideoURL:
      "https://www.linkedin.com/posts/erivelto-da-costa-e-silva_ia-inteligenciaartificial-llm-activity-7156117755702738944-DkhN?utm_source=share&utm_medium=member_desktop",
    githubRepositoryURL: "https://github.com/EriveltoSilva/question-answer-chatbot-app",
  },
  {
    id: 1,
    title: "InovAI Soluções Website",
    category: [PROJECT_CATEGORIES.WEBSITE, PROJECT_CATEGORIES.FRONTEND],
    description:
      "A InovAI é uma Startup de automação completa, com foco em soluções desenvolvimento de software personalizados, soluções de IA (inteligência artificial) generativa, Robótica e Chatbot integrados, para atender as necessidades dos nossos clientes.",
    image: "/projects/inovai-website.png",
    githubRepositoryURL: "https://github.com/EriveltoSilva/inovAI-website-django",
    linkedinVideoURL:
      "https://www.linkedin.com/posts/erivelto-da-costa-e-silva_desenvolvimentoweb-django-python-activity-7155173022419607552-0xMx?utm_source=share&utm_medium=member_desktop",
  },
];
