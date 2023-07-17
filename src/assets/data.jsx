import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

import Work1 from "./HtmlCss.png";
import Work2 from "./mobile.png";
import Work3 from "./react.png";
import Work4 from "./angular.png";

import Theme1 from '../assets/purple.png';
import Theme2 from "../assets/red.png";
import Theme3 from "../assets/blueviolet.png";
import Theme4 from "../assets/blue.png";
import Theme5 from "../assets/goldenrod.png";
import Theme6 from "../assets/magenta.png";
import Theme7 from "../assets/yellowgreen.png";
import Theme8 from "../assets/orange.png";
import Theme9 from "../assets/green.png";
import Theme10 from "../assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Hassane",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hassane",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Syrian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Lebanon",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+961 71840962",
  },

  {
    id: 8,
    title: "Email : ",
    description: "hassanalhassanj401@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "Hassane.Hassane",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "Arabic, French, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "6+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "50+",
    title: "Exercices of <br /> Leetcode",
  },

  {
    id: 4,
    no: "3+",
    title: "Frameworks  of <br /> Front-end and Back-end",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "100",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "90",
  },

  {
    id: 3,
    title: "Css",
    percentage: "90",
  },

  {
    id: 4,
    title: "Php",
    percentage: "50",
  },

  {
    id: 5,
    title: "C",
    percentage: "80",
  },

  {
    id: 6,
    title: "Data structure",
    percentage: "65",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "70",
  },

  {
    id: 8,
    title: "React",
    percentage: "85",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2017 - 2021",
    title: "Teaching students and charging Alfa and MTC",
    desc: "I have experience in teaching students from the primary to secondary stages. Additionally, I have worked in managing charging services for Alfa and MTC lines, as well as providing internet services.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2022",
    title: "Full Stack with coach “Rony Rizk”",
    desc: "I gained experience in using Angular and Node.js/Express for front-end and back-end development respectively. Additionally, I have worked with MongoDB as the database for my projects.",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022",
    title: "Eurisko Mobility Company",
    desc: "I have undergone 4 months of training and have successfully created multiple projects in React.js and Node.js for web development,as well as React Native for mobile application development.",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023-PRESENT",
    title: "continue Master Degree <span> Lebanaise University, Beirut </span>",
    desc: "I am currently pursuing a Master's degree at Lebanese University, furthering my academic journey and expanding my knowledge in my chosen field of study.",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "Bachelor Degree <span> Lebanese University, Beirut </span>",
    desc: "I have successfully completed my Bachelor's degree at Lebanese University, located in Beirut, which has provided me with a solid foundation in my area of specialization.",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018",
    title: "General Science <span> Halba High School, Akkar </span>",
    desc: "I have obtained my General Science diploma from Halba High School, located in Akkar, where I gained a comprehensive understanding of various scientific disciplines and developed a strong academic background.",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "HtmlCss Project",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Dummy Website",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Html and Css",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Mobile Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Mobile App",
      },
      {
        icon: <FaCode />,
        title: "Framework : ",
        desc: "React Native",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "React Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Sale of meals",
      },
      {
        icon: <FaCode />,
        title: "Framework : ",
        desc: "React js",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Angular Website",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-Commerce",
      },
      {
        icon: <FaCode />,
        title: "Framework : ",
        desc: "Angular",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
