import React, { useEffect } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import style from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

let ProjectArray = [
  {
    information:
      "This is a clone of buffer.com website, using this user can handle their social media account. Login, signUp and pricing page working well.I used HTML, CSS and JavaScript for building this",
    title: "buffer.com",
    techStacks: "HTML | CSS | JavaScript",
    img: "./buffer.png",
    github: "https://github.com/Sunilrath101/Buffer-clone",
    deployLink: "https://bespoke-biscotti-7e0a1f.netlify.app/",
  },
  {
    information:
      "This is a clone of zee5.com website, it is a video streaming app, it has free videos and subscription based services. I used HTML, CSS,  ReactJs  to build it and for UI I used external css library  as Chakra-Ui  and  React-Routing ",
    title: "Zee5.com",
    techStacks: "HTML | CSS | ReactJS | Chakra-Ui",
    img: "./zee5.png",
    github: "https://github.com/ShakilPendhari/zee5.com",
    deployLink: "https://zee-5-clone-masaischool.netlify.app/",
  },
  {
    information:
      "This is a clone of orbitz.com website, using this user can book hotels and vehicles. I used  HTML , CSS and  JavaScript",
    title: "Orbitz.com",
    techStacks: "HTML | CSS | JavaScript",
    img: "./orbitz.png",
    github: "https://github.com/ShakilPendhari/dazzling-wing-7781",
    deployLink: "https://dreamy-paprenjak-996346.netlify.app/",
  },
  {
    information:
      "This is a clone of pepperfry.com website and it is a online furniture store, using this user can buy their desirable furniture . Login, signUp, checkout and payment page working well . I used HTML, CSS, Next.js, and Redux for building this",
    title: "Pepperfry.com",
    techStacks: "HTML | CSS | Next.js| Redux",
    img: "./Home.png",
    github: "https://github.com/capitalN/scrawny-meat-2282",
    deployLink: "https://home-interior-pro.vercel.app/",
  },
  {
    information:
      "Industrybuying.com is a leading Business e-commerce platform, selling a wide range of business and industrial products to SMEs as well as large businesses. It has over 5,000 registered sellers and more than 85,000 registered businesses - SMEs and large corporates, procuring online from Industrybuying",
    title: "IndustryBuying.com",
    techStacks: "HTML | CSS | ReactJS | Redux | MongoDB | NodeJS | ExpressJS",
    img: "./IndustryBuying.png",
    github: "https://github.com/Prashant1562/IndustryBuying-Clone",
    deployLink: "https://soft-dogs-2567.netlify.app/",
  },
];

const Project = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className={style.project}>
      <Heading
        as="h1"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1500"
        data-aos-offset="50"
        data-aos-easing="ease-in-out"
        lineHeight="3rem"
        borderBottom="3px solid green"
        //  width={{base:"10%",sm:"22%",md:"13%"}}
        width={{ base: "80%", sm: "38%", md: "12%" }}
        fontSize={{ base: "1.1rem", sm: "1.5rem", md: "2rem" }}
        m="4rem auto"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
        My Projects
      </Heading>
      <Flex direction="column" id="project" gap="3rem">
        {ProjectArray &&
          ProjectArray.map((data) => (
            <ProjectCard key={data.title} {...data} />
          ))}
      </Flex>
    </div>
  );
};

export default Project;
