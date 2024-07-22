import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  mindhome,
  hd,
  j3,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  java,
  c,
  sql,
  vue,
  django,
  spring,
  flutter,
  bootstrap,
  kubernetes,
  aws,
  azure,
  gcp,
  prisma,
  redis,
  postgresql,
  pytorch,
  tf,
  graphql,
  fastapi,
  flask,
  nginx, ad, fmmall, emm, kf, persona_chatbot, eeg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI/ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "python",
    icon: python,
  },
    // put all other techs here
  {
    name: "java",
    icon: java,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "spring",
    icon: spring,
  },

  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "tf",
    icon: tf,
  },

];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Jiusan Food Co., Ltd",
    icon: j3,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2021",
    points: [
      "Constructed and performed an Office Automation System using HTML, JavaScript, Spring MVC, and SQL Server, creating an interactive financial visualization interface, provided managers with real-time financial information, increasing decision-making speed by 30%.",
      "Constructed robust interfaces with Java, applying WebSocket for real-time interaction and Vue.js for seamless user experiences, reducing communication latency by 40%. Showcased teamwork abilities by working closely with other teams to integrate dynamic features.",
      "Optimized server performance by configuring Nginx as a reverse proxy, improving load balancing, reducing server response time by 10%.",
      "Combined external APIs, including Verification API and Encryption API, achieved information synchronization and security enhancements.",
      "Automated audit processes and revamped communication flows, leveraging initiative and leadership to identify areas for automation and drive process improvements, cutting down manual workload."
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "MindHome Inc.",
    icon: mindhome,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Designed and devised full-stack web projects using HTML, CSS, React.js, and TypeScript, creating dynamic interfaces and boosting user interaction by 35%. Applied RESTful APIs and SWR for efficient data handling and state management, kept data consistency .",
      "Implemented real-time data analysis via Google Analytics and MixPanel, tracking user behavior and overhauling sales by 20% and user retention by 25% through targeted optimizations.",
      "Synthesized AWS services like Lambda, MongoDB, decreasing latency by 40%. Ensured reliable deployments, overcame scaling issues.",
      "Led code reviews and pair programming. Demonstrated strong communication and teamwork skills by collaborating with cross-functional teams to deliver high-quality features.",
    ],
  },
  {
    title: "Coding Instructor",
    company_name: "HD EDU",
    icon: hd,
    iconBg: "#E6DEDD",
    date: "March 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AD's Odyssey: The Phantom Island",
    description:
      "An immersive RPG game built with JavaScript, featuring dynamic gameplay, interactive graphics, and AI-powered NPCs, offering players an engaging and adventurous experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: ad,
    source_code_link: "https://github.com/JunKang13/Love_story/",
  },
  {
    name: "FM-Mall",
    description:
      "A comprehensive e-commerce platform built with Java Spring Boot, featuring a RESTful API, intuitive UI with Vue.js, and robust production database management, enhancing user experience and operational efficiency.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "rabbitmq",
        color: "blue-text-gradient",
      },
      {
        name: "spring cloud",
        color: "green-text-gradient",
      },
    ],
    image: fmmall,
    source_code_link: "https://github.com/junkang13/fmsc",
  },
  {
    name: "Emissary",
    description:
      "A productivity application that utilizes AI-powered NLP for self-authoring, GraphQL for efficient data querying, and Redis for caching, enhancing user productivity and data retrieval speeds.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "pink-text-gradient",
      },
      {
        name: "graphql",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
    ],
    image: emm,
    source_code_link: "https://github.com/",
  },
  {
    name: "KosmicFlix",
    description:
      "A streaming platform that offers a seamless and responsive user experience, utilizing Prisma and MongoDB Atlas for efficient data management, and NextAuth for secure user authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: kf,
    source_code_link: "https://github.com/JunKang13/KosmicFlix",
  },
  {
    name: "Persona Chat-bot",
    description:
      "A conversational AI bot designed for engaging user interactions, utilizing advanced NLP techniques and OpenAI APIs to achieve high consistency and fluency.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "gcp",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: persona_chatbot,
    source_code_link: "https://github.com/PersonaChat",
  },
  {
    name: "EEG-Motor Classification",
    description:
      "A sophisticated neural network designed to classify EEG-based data, utilizing advanced CNN, RNN, and RCNN architectures for improved accuracy and performance in neural signal processing",
    tags: [
      {
        name: "deep learning",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: eeg,
    source_code_link: "https://https://github.com/JunKang13/ece247/tree/master/final_project",
  },

];

export { services, technologies, experiences, testimonials, projects };
