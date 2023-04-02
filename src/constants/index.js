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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };