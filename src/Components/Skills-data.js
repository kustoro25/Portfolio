import react_icon from "../assets/skills-icon/React-Dark.svg";
import javascript_icon from "../assets/skills-icon/JavaScript.svg";
import html_icon from "../assets/skills-icon/HTML.svg";
import css_icon from "../assets/skills-icon/CSS.svg";
import tailwind_icon from "../assets/skills-icon/TailwindCSS-Dark.svg";
import git_icon from "../assets/skills-icon/Git.svg";
import github_icon from "../assets/skills-icon/Github-Dark.svg";
import node_icon from "../assets/skills-icon/NodeJS-Dark.svg";
import express_icon from "../assets/skills-icon/ExpressJS-Dark.svg";
import mongodb_icon from "../assets/skills-icon/MongoDB.svg";
import nextjs_icon from "../assets/skills-icon/NextJS-Dark.svg";
import typescript_icon from "../assets/skills-icon/TypeScript.svg";
const skills = [
  {
    name: "React js",
    image: react_icon,
    description: "UI Library",
    rotate: true,
    isUsed1: true,
    isUsed2: true,
    isUsed3: true,
  },
  {
    name: "JavaScript",
    image: javascript_icon,
    description: "Scripting",
    isUsed1: true,
    // isUsed2: true,
    isUsed3: true,
  },
  {
    name: "Node.js",
    image: node_icon,
    description: "Backend Runtime",
    isUsed2: true,
  },
  {
    name: "Express.js",
    image: express_icon,
    description: "Backend Framework",
    rotate: false,
    // isUsed1: true,
    isUsed2: true,
  },
  {
    name: "MongoDB",
    image: mongodb_icon,
    description: "Database",
    rotate: true,
    // isUsed1: true,
    isUsed2: true,
  },
  {
    name: "Next.js",
    image: nextjs_icon,
    description: "React Framework",
    rotate: false,
    // isUsed1: true,
    isUsed2: false,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    image: typescript_icon,
    description: "Typed JavaScript",
    rotate: false,
    // isUsed1: true,
    // isUsed2: true,
    category: "Language",
  },

  {
    name: "HTML",
    image: html_icon,
    description: "Markup",
    isUsed1: true,
    isUsed3: true,
  },
  {
    name: "CSS",
    image: css_icon,
    description: "Styling",
    isUsed1: true,
    isUsed3: true,
  },
  {
    name: "Tailwind CSS",
    image: tailwind_icon,
    description: "Utility-First",
    isUsed2: true,
  },
  {
    name: "GIT",
    image: git_icon,
    description: "Version Control",
    // isUsed3: true,
  },
  {
    name: "Git Hub",
    image: github_icon,
    description: "Code Hosting",
    isUsed3: true,
  },
];
export default skills;
