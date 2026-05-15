import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import style from "./Project.module.css";

let ProjectArray = [
  {
    information:
      "Live multi-tenant SaaS platform serving 5000+ users across cricket academies. Built subdomain-based tenant isolation (academy.cricvision.ai), per-tenant Firebase Auth middleware, 13+ table MySQL schema covering academies, users, batches, attendance, fees, and performance tracking. Full AWS infrastructure deployed with on-demand TLS via Caddy + Cloudflare.",
    title: "CricVision",
    techStacks: [
      "React.js",
      "Next.js",
      "Node.js",
      "TS.ED",
      "MySQL",
      "AWS (EC2/RDS/S3/CloudFront)",
      "Firebase Auth",
      "Caddy",
    ],
    // img: "https://cricvision.ai/favicon.ico", // Using favicon as placeholder
    // img: "https://app.cricvision.ai/logo/cricvision-logo.png", // Using favicon as placeholder
    img: "./cricvision.png", // Using favicon as placeholder
    github: "",
    deployLink: "https://app.cricvision.ai",
    show:true
  },
  {
    information:
      "Built full product end-to-end — frontend, backend, admin panel, and landing page. Integrated OpenAI and Gemini APIs for automated project documentation and workflow generation. Deployed on AWS EC2 with Caddy reverse proxy.",
    title: "Foundersmate",
    techStacks: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "OpenAI API",
      "Gemini API",
      "AWS",
      "Caddy",
    ],
    // img: "https://foundersmate.ai/favicon.ico", // Using favicon as placeholder
    // img: "https://app.foundersmate.ai/logo.svg", // Using favicon as placeholder
    img: "./foundersmate.png", // Using favicon as placeholder
    github: "",
    deployLink: "https://foundersmate.ai",
    show:true
  },
  {
    information:
      "Designed and built complete platform from scratch. Architecture supports 300+ concurrent users targeting 5,000+ total users. Integrated Spotify API for real-time music data and optimized API calls with TanStack Query to reduce redundant fetches.",
    title: "Corral",
    techStacks: [
      "React.js",
      "Supabase",
      "Spotify API",
      "Firebase",
      "TanStack Query",
      "Zustand",
    ],
    // img: "https://app.corral.social/assets/corral_dutch_white-B6IzgXL3.png",
    img: "./corral.png",
    github: "",
    deployLink: "https://corral.social",
    show:true
  },
  {
    information:
      "Built React frontend and NestJS backend with AWS Lambda authentication. Integrated Stripe payment gateway with secure checkout flow and managed PostgreSQL database on RDS.",
    title: "Tap4Change",
    techStacks: [
      "React.js",
      "NestJS",
      "AWS (Lambda, EC2, S3, RDS)",
      "PostgreSQL",
      "Stripe",
    ],
    // img: "https://tap4change.org/_next/static/media/Tap4ChangeLatestBlack.36eec654.svg",
    img: "./tap4change.png",
    github: "",
    deployLink: "https://tap4change.org",
    show:true
  },
  {
    information:
      "A real-time collaboration platform designed specifically for developers. It features room-based chat, instant messaging via Socket.io, and secure code snippet sharing with syntax highlighting. The application uses a modern glassmorphic UI and is built for scalability with a Dockerized backend deployed on Google Cloud Platform and a React frontend on Vercel.",
    title: "Chat App",
    techStacks: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Docker",
      "GCP",
      "PWA"
    ],
    img: "./chat_app.png",
    github: "https://github.com/ShakilPendhari/communicate-each-others",
    deployLink: "https://chat.shakilpendhari.com/",
    show:true
  },
  {
    information:
      "A high-performance task management application built with React 19 and Supabase. This PWA-enabled app offers offline support, real-time data synchronization, and an intuitive user interface for organizing daily tasks. It leverages modern web technologies to ensure a fast, reliable, and installable experience on any device.",
    title: "Task Tracker",
    techStacks: [
      "React 19",
      "Vite",
      "Vanilla CSS",
      "Supabase",
      "PostgreSQL",
      "PWA",
    ],
    img: "./task_tracker.png",
    github: "https://github.com/ShakilPendhari/Task-analysor",
    deployLink: "https://task-tracker.shakilpendhari.com/",
    show:true
  },
  {
    information:
      "Our team's impressive creation: a collaborative Pepperfry furniture website clone using the MERN stack. With a team of five, we showcased our full stack web development expertise. Our clone offers an extensive product catalog, seamless user experience, and secure payment integration, providing a user-friendly platform for online furniture shopping.",
    title: "Pepperfry.com",
    techStacks: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Next.js",
      "React",
      "Redux",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ChakraUI",
    ],
    img: "./Home.png",
    github: "https://github.com/capitalN/scrawny-meat-2282",
    deployLink: "https://home-interior-pro.vercel.app/",
    show:false
  },
  {
    information:
      "A replica of the well-known B2B e-commerce platform, Industrybuying.com. With the collaborative effort of five skilled developers and implementation of the MERN stack, our clone faithfully reproduces the platform's robust functionalities. It offers businesses an efficient and secure platform to fulfill their industrial procurement needs, with a wide product inventory and seamless order management.",
    title: "IndustryBuying.com",
    techStacks: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ChakraUI",
    ],
    img: "./IndustryBuying.png",
    github: "https://github.com/Prashant1562/IndustryBuying-Clone",
    deployLink: "https://soft-dogs-2567.netlify.app/",
    show:false
  },
  {
    information:
      "Presenting my ZEE5 project, a full stack web application that replicates the popular streaming platform. Built with React, Node.js, and the YouTube API, it offers users a seamless and immersive entertainment experience. This project demonstrates my proficiency in full stack web development and showcases my ability to create engaging and user-friendly applications.",
    title: "Zee5.com",
    techStacks: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "ChakraUI",
    ],
    img: "./zee5.png",
    github: "https://github.com/ShakilPendhari/zee5.com",
    deployLink: "https://zee5-clone-theta.vercel.app/",
    show:false
  },
  {
    information:
      "A clone of the renowned social media management platform, Buffer.com. Developed by five dedicated developers, this project utilized HTML, CSS, JavaScript, and localStorage. The clone successfully replicates Buffer's core functionalities, enabling efficient scheduling and management of social media posts, along with a seamless user experience and intuitive interface.",
    title: "buffer.com",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
    img: "./buffer.png",
    github: "https://github.com/Sunilrath101/Buffer-clone",
    deployLink: "https://bespoke-biscotti-7e0a1f.netlify.app/",
    show:false
  },
];

const Project = ({ theme }) => {
  return (
    <Box
      id="project"
      className={style.project}
    >
      <Heading
        as="h1"
        className="section-heading"
        fontSize={{ base: "1.1rem", md: "1.35rem" }}
      >
        My Projects
      </Heading>
      <Flex className="section-shell" direction="column" gap="1.25rem">
        {ProjectArray &&
          ProjectArray.map((data) => (
            <ProjectCard theme={theme} key={data.title} {...data} />
          ))}
      </Flex>
    </Box>
  );
};

export default Project;
