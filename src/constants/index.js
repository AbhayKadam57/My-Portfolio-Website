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
  // fulcroIcon,
  // mirajIcon,
  // techademyIcon,
  // flinkitImage,
  // scripvaultImage,
  // vasttuankImage,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import fulcroIcon from "../assets/company/fulcroIcon.jpeg";
import mirajIcon from "../assets/company/mirajIcon.png";
import techademyIcon from "../assets/company/techademyIcon.jpg";

import flinkitImage from "../assets/flinkitImage.jpg";
import scripvaultImage from "../assets/scripvaultImage.jpg";
import vasttuankImage from "../assets/vasttuankImage.jpg";
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

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

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

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

const experiences = [
  {
    title: "UI Developer",
    company_name: "Fulcro Consulting Private Limited",
    icon: fulcroIcon, // Replace with the actual icon variable
    iconBg: "#383E56",
    date: "February 2024 - Present",
    points: [
      "Developed the frontend for Polycab, a leading electrical company, using HTML, CSS, and JavaScript.",
      "Optimized website performance for Tata Tele Business, increasing speed from 20% to 70% with Hugo, HTML, CSS, and JavaScript.",
      "Built a campaign page for Tata Motors EV using React.js, Styled Components, and Swiper.js.",
      "Led the IBS Fulcro website revamp with Strapi, Next.js, GraphQL, Tailwind CSS, and React context.",
      "Currently migrating Tata Tele Business from Oracle Content Management (OCM) to Strapi using Node.js and LoopBack.",
    ],
  },
  {
    title: "Junior Frontend Engineer",
    company_name: "Techademy Solutions Private Limited (IIHT)",
    icon: techademyIcon, // Replace with the actual icon variable
    iconBg: "#E6DEDD",
    date: "September 2023 - February 2024",
    points: [
      "Partnered with the development team to create user-friendly interfaces using React.",
      "Translated mockups and wireframes into functional, responsive web applications in close collaboration with designers.",
      "Collaborated with cross-functional teams, including backend developers, designers, and product managers, to deliver high-quality features and products.",
      "Integrated APIs to meet various component requirements.",
      "Proficient in technologies and tools including Redux, Redux Saga, and Material UI.",
    ],
  },
  {
    title: "Project Executive",
    company_name: "Miraj Entertainment Limited",
    icon: mirajIcon, // Replace with the actual icon variable
    iconBg: "#383E56",
    date: "July 2018 - May 2021",
    points: [
      "Monitored and reported progress of 17+ projects with 95% accuracy.",
      "Collaborated with 3+ cross-functional teams to identify and resolve project-related issues, resulting in successful completion of project milestones with high accuracy.",
    ],
  },
];

const projects = [
  {
    name: "Flinkit - Online Grocery Store",
    description:
      "An online grocery shopping platform, similar to Blinkit, built with the MERN stack. The platform includes features like user registration, login, browsing, and searching for grocery items, with Razorpay payment integration for secure transactions.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "Redux Toolkit", color: "green-text-gradient" },
      { name: "Razorpay", color: "pink-text-gradient" },
    ],
    image: flinkitImage, // Replace with the actual image variable
    source_code_link:
      "https://github.com/AbhayKadam57/Blinkit-web-app-Clone.git",
  },
  {
    name: "Scripvault - Real Time Stock Market Web App",
    description:
      "A MERN stack web app designed for real-time stock trading. Features include user registration, authentication, stock handling, wishlist, and portfolio tracking, with real-time updates powered by FastAPI and socket.io.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "Socket.io", color: "pink-text-gradient" },
    ],
    image: scripvaultImage, // Replace with the actual image variable
    source_code_link: "https://github.com/AbhayKadam57/ScripValut.git",
  },
  {
    name: "Vasttuank - Numerology and Vastu Consultant",
    description:
      "A consultation website for Numerology and Vastu services, developed using React with a dynamic and responsive interface, focusing on user engagement and accessibility.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Responsive Design", color: "green-text-gradient" },
    ],
    image: vasttuankImage, // Replace with the actual image variable
    source_code_link: "https://github.com/AbhayKadam57/Website-tempalte.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
