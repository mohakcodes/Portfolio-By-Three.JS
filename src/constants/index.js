import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    cpp,
    html,
    css,
    reactjs,
    git,
    leetcode,
    ebazaar,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "works",
        title: "Works",
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
        title: "C++ Programmer",
        icon: mobile,
    },
    {
        title: "React Developer",
        icon: backend,
    },
    {
        title: "DSA Geek",
        icon: creator,
    },
];

const technologies = [
    {
        name: "git",
        icon: git,
    },
    {
        name: "cpp",
        icon: cpp,
    },
    {
        name: "leetcode",
        icon: leetcode,
    },
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
        name: "React JS",
        icon: reactjs,
    },
];

const experiences = [
    {
        title: "GPT-3 Theme Landing Page",
        company_name: "React.JS",
        icon: reactjs,
        iconBg: "#1f00a8",
        date: "Jan 2023",
        points: [
            "Futuristic Chat-GPT theme AI landing page built using React.JS",
            "Created using react components",
            "Having responsive design and modern website experience",
        ],
        link:"https://github.com/mohakcodes/GPT3_Landing_Page"
    },
    {
        title: "Snake Game by LinkedList",
        company_name: "JavaScript + Data Structure",
        icon: javascript,
        iconBg: "#383E56",
        date: "Feb 2023",
        points: [
            "Developed snake game using Javascript and LinkedList",
            "Snake grows when eats red food & reverse and grows on eating the purple one",
            "Used reversing property of LinkedList in the game",
        ],
        link:"https://github.com/mohakcodes/Snake_Game_By_LinkedList"
    },
    {
        title: "E-Bazaar",
        company_name: "React.JS + Node.JS + MySQL",
        icon: ebazaar,
        iconBg: "#000000",
        date: "March 2023",
        points: [
            "Developed E-Bazaar (An E-commerce website for farmers)",
            "A group project, collaborating with my college-mates, I contributed in Frontend Development using React.JS",
            "Backend is based on Node.JS and MySQL database",
        ],
        link:"https://github.com/Gunanidhi-Trivedi/demo"
    },
    {
        title: "700+ DSA PROBLEMS",
        company_name: "LeetCode + GeeksForGeeks",
        icon: leetcode,
        iconBg: "#7515bf",
        date: "Jan 2022 - Present",
        points: [
            "Solved more than 700 DSA problems over LeetCode and GeeksForGeeks",
            "Practicing DSA from more than 1 year",
            "Gave 24 contests over LeetCode, Highest Rank being #4233 till now and Maximum 3 problems solved in a Contest",
        ],
        link:"https://leetcode.com/mohakcodes/"
    },
];

export { services, technologies, experiences};