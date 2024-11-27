import * as m from "../paraglide/messages.js";
import AngularIcon from "../components/icons/AngularIcon.astro";
import AzureIcon from "../components/icons/AzureIcon.astro";
import CssIcon from "../components/icons/CssIcon.astro";
import DockerIcon from "../components/icons/DockerIcon.astro";
import FigmaIcon from "../components/icons/FigmaIcon.astro";
import FirebaseIcon from "../components/icons/FirebaseIcon.astro";
import GithubIcon from "../components/icons/GithubIcon.astro";
import GitIcon from "../components/icons/GitIcon.astro";
import HtmlIcon from "../components/icons/HtmlIcon.astro";
import JavaIcon from "../components/icons/JavaIcon.astro";
import JavascriptIcon from "../components/icons/JavascriptIcon.astro";
import JestIcon from "../components/icons/JestIcon.astro";
import LinuxIcon from "../components/icons/LinuxIcon.astro";
import MariaDBIcon from "../components/icons/MariaDBIcon.astro";
import MongodbIcon from "../components/icons/MongodbIcon.astro";
import NodeIcon from "../components/icons/NodeIcon.astro";
import PostgreSqlIcon from "../components/icons/PostgreSqlIcon.astro";
import ReactIcon from "../components/icons/ReactIcon.astro";
import SpringIcon from "../components/icons/SpringIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import TypescriptIcon from "../components/icons/TypescriptIcon.astro";



export const skills = {
    Frontend: [
        {
            name: "HTML",
            icon: HtmlIcon,
        },
        {
            name: "CSS",
            icon: CssIcon,
        },
        {
            name: "JavaScript",
            icon: JavascriptIcon,
        },
        {
            name: "TypeScript",
            icon: TypescriptIcon,
        },
        {
            name: "React",
            icon: ReactIcon,
        },
        {
            name: "Angular",
            icon: AngularIcon,
        },
        {
            name: "Tailwind CSS",
            icon: TailwindIcon,
        },
        {
            name: "Figma",
            icon: FigmaIcon,
        },
    ],
    Backend: [
        {
            name: "Node.js",
            icon: NodeIcon,
        },
        {
            name: "Java",
            icon: JavaIcon,
        },
        {
            name: "Spring",
            icon: SpringIcon,
        },
        {
            name: "PostgreSQL",
            icon: PostgreSqlIcon,
        },
        {
            name: "MariaDB",
            icon: MariaDBIcon,
        },
        {
            name: "MongoDB",
            icon: MongodbIcon,
        },
        {
            name: "ElasitcSearch",
            icon: FirebaseIcon,
        },
    ],
    [m.othersText()]: [
        {
            name: "Docker",
            icon: DockerIcon,
        },
        {
            name: "Jest",
            icon: JestIcon,
        },
        {
            name: "Azure",
            icon: AzureIcon,
        },
        {
            name: "GitHub",
            icon: GithubIcon,
        },
        {
            name: "Git",
            icon: GitIcon,
        },
        {
            name: "Firebase",
            icon: FirebaseIcon,
        },
        {
            name: "Linux",
            icon: LinuxIcon,
        },
    ],
};