import { ProjectEntity } from "@/types/project";
import { PROJECT_CATEGORIES } from "@/types/project-categories";

export const projects: ProjectEntity[] = [
  {
    id: 4,
    title: "Electronic Suspension Bridge",
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
    title: "Everything- Chatbot",
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
