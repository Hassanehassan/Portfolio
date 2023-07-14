import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

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
