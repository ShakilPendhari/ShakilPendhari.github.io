import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import style from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

let ProjectArray = [
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
  },
  {
    information:
      "A clone of the renowned social media management platform, Buffer.com. Developed by five dedicated developers, this project utilized HTML, CSS, JavaScript, and localStorage. The clone successfully replicates Buffer's core functionalities, enabling efficient scheduling and management of social media posts, along with a seamless user experience and intuitive interface.",
    title: "buffer.com",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
    img: "./buffer.png",
    github: "https://github.com/Sunilrath101/Buffer-clone",
    deployLink: "https://bespoke-biscotti-7e0a1f.netlify.app/",
  },
];
// ,
//   {
//     information:
//       "A clone of the renowned travel booking platform, Orbitz.com. Developed by five dedicated developers, this project utilized HTML, CSS, and JavaScript. The clone faithfully replicates Orbitz's key features, including flight and hotel search, booking management, and secure payment integration, offering users a seamless and intuitive platform for their travel arrangements.",
//     title: "Orbitz.com",
//     techStacks: ["HTML5", "CSS3", "JavaScript"],
//     img: "./orbitz.png",
//     github: "https://github.com/ShakilPendhari/dazzling-wing-7781",
//     deployLink: "https://dreamy-paprenjak-996346.netlify.app/",
//   }

const Project = ({ theme }) => {
  const ref = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  // useEffect(() => {

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const handleScroll = (e) => {
  //   let options = {
  //     root: null,
  //     rootMargins: "0px", // top margin and bottom margin
  //     threshold: 0, //when top of element see then it allow to do lazy loading
  //   };
  //   const observer = new IntersectionObserver(handleIntersect, options);
  //   observer.observe(ref.current);

  //   function handleIntersect (entries){
  //       if(entries[0].isIntersecting)
  //       {
  //         let project = document.getElementById("Project");
  //             project.className = "navbutAnimationAdd"
  //       }
  //       else{
  //         let project = document.getElementById("Project");
  //         project.className = "navbutAnimationRemove"
  //         project.classList.remove("navbutAnimationAdd")
  //       }
  //   }
  // };

  return (
    <Box
      id="project"
      ref={ref}
      pb="6rem"
      className={!theme ? style.project : style.projectDark}
    >
      <Heading
        as="h1"
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="700"
        // data-aos-offset="200"
        data-aos-easing="ease-in-out"
        lineHeight="3rem"
        // borderBottom="3px solid green"
        //  width={{base:"10%",sm:"22%",md:"13%"}}
        // width={{ base: "80%", sm: "38%", md: "12%" }}
        fontSize={{ base: "1.3rem", sm: "1.6rem", md: "2rem" }}
        m="4rem auto"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
        <span
          style={{
            boxShadow: "0px 0px 3px grey",
            padding: "0.2rem 0.8rem",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottom: `3px solid ${!theme ? "#3182CE" : "#8B54F8"}`,
            color:`${!theme ? "black" : "white"}`,
            background:`${!theme?"rgb(206, 241, 247)":"black"}`
          }}
        >
          {" "}
          My Projects
        </span>
      </Heading>
      <Flex direction="column" gap="3rem">
        {ProjectArray &&
          ProjectArray.map((data) => (
            <ProjectCard theme={theme} key={data.title} {...data} />
          ))}
      </Flex>
    </Box>
  );
};

export default Project;
