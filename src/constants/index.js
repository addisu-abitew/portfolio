import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  habtech,
  taptosign,
  upwork,
  aladia,
  starbucks,
  tesla,
  shopify,
  soapah,
  real_state,
  proshop,
  flutter,
  go,
  dart,
  firebase,
  nestjs,
  angular,
  csharp,
  python,
  tensorflow,
  dotnet,
  java,
  mysql,
  postgresql,
  rust,
  express,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
  // {
  //   name: "Dart",
  //   icon: dart,
  // },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "Tensorflow",
  //   icon: tensorflow,
  // },
  // {
  //   name: "C#",
  //   icon: csharp,
  // },
  // {
  //   name: ".NET",
  //   icon: dotnet,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "Typescript",
  //   icon: typescript,
  // },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Nest JS",
    icon: nestjs,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Go",
    icon: go,
  },
  // {
  //   name: "Rust",
  //   icon: rust,
  // },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern Software Developer",
    company_name: "HABTech Solutions",
    icon: habtech,
    iconBg: "#383E56",
    date: "February 2024 - August 2024",
    points: [
      "Collaborated with stakeholders to gather, analyze, and document requirements.",
      "Designed wireframes and prototypes to align UI/UX with business needs.",
      "Developed full-stack web applications using Angular and .NET, covering both front-end and back-end development.",
      "Built and integrated RESTful APIs, and managed Postgresql database.",
      "Focused on delivering clean, maintainable, and scalable code.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Tap to Sign",
    icon: taptosign,
    iconBg: "#383E56",
    date: "March 2024 - October 2024",
    points: [
      "Developed and enhanced web application features based on client requirements.",
      "Diagnosed and resolved bugs and technical issues across front-end and back-end systems.",
      "Collaborated with multiple developers in a team environment using version control and project management tools.",
      "Built and integrated RESTful APIs, and managed Postgresql database.",
      "Focused on delivering clean, maintainable, and scalable code.",
      "Delivered updates and fixes within tight deadlines while ensuring high reliability and stability."
    ],
  },
  {
    title: "Mobile Application Developer",
    company_name: "Aladia",
    icon: aladia,
    iconBg: "#383E56",
    date: "October 2024 - February 2025",
    points: [
      "Developed and maintained key features of a cross-platform e-learning mobile application using Flutter.",
      "Integrated mobile app functionality with backend services through RESTful APIs and real-time communication.",
      "Collaborated closely with backend developers, UI/UX designers, and project managers to ensure smooth end-to-end delivery.",
      "Ensured app performance optimization, handled bug fixes, and implemented enhancements based on feedback."
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "Delivered custom web and mobile applications for diverse clients across various industries.",
      "Communicated directly with clients to gather requirements, propose solutions, and deliver milestones.",
      "Handled end-to-end project execution, from initial concept through deployment and post-launch support.",
      "Managed multiple projects simultaneously, meeting tight deadlines and adapting to different client needs.",
      "Followed best practices for security, code quality, and app performance."
    ],
  },
  // {
  //   title: "React.js Developer",
  //   company_name: "HABTech",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Soap Making App",
    description:
      "A mobile application for hobbyists and professionals to create, manage, and track their soap making recipes and inventory.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: soapah,
    source_code_link: "https://github.com/addisu-abitew/soapah",
  },
  {
    name: "Proshop",
    description:
      "A full-featured shopping cart solution with integrated PayPal and credit/debit payment processing",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: proshop,
    source_code_link: "https://github.com/abitewaddisu/proshop",
  },
  {
    name: "Real State Website",
    description:
      "A Responsive Real State Website with animations, dark and light mode, mobile first pleasant user interface",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: real_state,
    source_code_link: "https://github.com/abitewaddisu/responsive_real_state_website",
  },
];

export { services, technologies, experiences, testimonials, projects };
