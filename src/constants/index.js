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
  wethinkcode,
  cert,
  unisa,
  threejs,
  alarm,
  flappybird,
  react,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cyber Security",
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering",
    company_name: "WeThinkCode_",
    icon: wethinkcode,
    iconBg: "#383E56",
    date: "2022 - 2024",
    points: [
      "Engineering: How to structure code files and package them to be run, to write a program and test that the core program is functioning asintended.",
      "Collaborating: Working in small teams to build a program that, ordinarily,is too much for one person to complete on their own in the prescribedtime. Students must collaborate in groups of 4 to build a program thatworks end-to-end",
      "DevOps: Create build pipelines for continuous integration and continuousdelivery, including automated testing and deployment with Docker.Effective Version Control: Use trunk-based development techniques tomaintain a stable main branch of the codebase",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Bcom Business Management",
    company_name: "University Of South Afric",
    icon: unisa,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "The primary purpose of the qualification is to provide qualifiers with graduate-level knowledge, specific skills, applied competence and the necessary attitudes in the fields associated with commerce and industry that prepare them to be lifelong learners, employable workers/entrepreneurs and contributors to society and the business community. The second purpose of the qualification is to provide South Africa (and other countries) with functional managers at the middle management level in all sectors of the economy. A further purpose of the qualification is to provide graduates with a self-sustaining understanding of the process whereby productive resources responsibly are mobilized, utilized, and managed with a view to being gainfully employed in serving the material needs of society in a globalised world",
    ],
  },
  {
    title: "Higher Cert In Marketing",
    company_name: "Shopify",
    icon: unisa,
    iconBg: "#383E56",
    date: "Jan 2020 - Jan 2021",
    points: [
      "this qualification is closely tied to the rationale for the qualification and serves to provide learners with a basic knowledge of the field of marketing as well as practical application of these principles based on a case study approach. This qualification provides qualifying learners with basic knowledge of the principles, theories, methods and techniques of the art and science of marketing",
    ],
  },
  {
    title: "Certificates ",
    company_name: "Jp Morgan , Sololearn , Nyda",
    icon: cert,
    iconBg: "#E6DEDD",
    date: "Jan 2023 ",
    points: [
      "Introduction to Programming Using Python",
      "JPMorgan Chase & Co. - Software Engineering Lite Job Simulation",
      "Introduction to C++",
      "National Youth Development Agency Certificate in Entrepreneurship",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "One of the best team mates i have had during my period at wethinkcode.",
    name: "Govender",
    designation: "Lead RPA Developer",
    company: "ABSA",
  },
  {
    testimonial:
      "What truly set Karabo apart was their proactive approach to problem-solving. Rather than merely addressing the immediate concerns, Karabo took the time to identify potential future issues and provided proactive solutions to mitigate them.",
    name: "Shafique",
    designation: "Perfomance Team",
    company: "Wethinkcode_",
  
  },
  {
    testimonial:
      "Always dependable for a bug on the codebase when we did a hackerthon",
    name: "Dineo Moeti",
    designation: "Software Developer",
    company: "ABSA",

  },
];

const projects = [
  {
    name: "Flappy Bird",
    description:
      "An implementation of the classic Flappy Bird game using Python and the Pygame library. Flappy Bird is a side-scrolling game where the player controls a bird, attempting to navigate it through a series of pipes without colliding. The game features a simple yet challenging mechanic where the player must tap or press a key to make the bird flap and stay afloat.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "Sys",
        color: "pink-text-gradient",
      },
    ],
    image: flappybird,
    source_code_link: "https://github.com/karabocodes/flappy-bird-game",
  },
  {
    name: "KaraboCode Dev Profile",
    description:
      "This React project the same site you are on ,showcases the professional profile of a software developer with a modern and dynamic touch. It leverages React for its frontend development and incorporates cutting-edge 3D animations to enhance the visual appeal. The project aims to provide an interactive and engaging experience for visitors, allowing them to explore my skills, projects, and achievements in a unique and immersive way..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "3D Animations",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: react,
    source_code_link: "https://github.com/karabocodes/profile",
  },
  {
    name: "Alarm",
    description:
      "This project is a simple alarm clock application with a graphical user interface (GUI) built using Tkinter, a standard GUI toolkit for Python. Users can set an alarm time and an accompanying message. The application then counts down until the specified time, playing an alarm sound and displaying the message when the time is reached.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "winsound",
        color: "pink-text-gradient",
      },
    ],
    image: alarm,
    source_code_link: "https://github.com/karabocodes/alarm",
  },
];

export { services, technologies, experiences, testimonials, projects };
