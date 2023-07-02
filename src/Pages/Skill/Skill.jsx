import { Heading, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SkillComponent from "./SkillComponent";
import AOS from "aos";
import "aos/dist/aos.css";

let SkillArrayObject = [
  {
    text: "HTML 5",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
    id: "1",
  },
  {
    text: "CSS 3",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",
    id: "2",
  },
  {
    text: "JavaScript",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
    id: "3",
  },
  {
    text: "React.Js",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    id: "4",
  },
  {
    text: "Redux",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
    id: "5",
  },
  {
    text: "Node.Js",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
    id: "6",
  },
  {
    text: "Express.Js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU",
    id: "7",
  },
  {
    text: "MongoDB",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
    id: "8",
  },
  {
    text: "Git",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/git.svg",
    id: "9",
  },
  {
    text: "Chakra-UI",
    img: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png",
    id: "10",
  },
  {
    text: "Netlify",
    img: "https://jeancochrane.com/static/images/blog/netlify-identity-dealbreakers/netlify-logo.png",
    id: "11",
  },
  {
    text: "Vercel",
    img: "https://mms.businesswire.com/media/20210216006039/en/859393/23/vercel.jpg",
    id: "12",
  },
  {
    text: "TypeScript",
    img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    id: "13",
  },
  {
    text: "Next.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
    id: "14",
  },
  {
    text: "VS Code",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    id: "15",
  },
];

const Skill = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id="skill" style={{ marginBottom: "5rem", width: "100%" }}>
      <Heading
        as="h1"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="1500"
        data-aos-offset="50"
        data-aos-easing="ease-in-out"
        borderBottom={{ base: "3px solid rgb(255,0,0)" }}
        lineHeight="3rem"
        width={{ base: "65%", sm: "22%", md: "10%" }}
        m="auto"
        fontSize={{ base: "1.1rem", sm: "1.5rem", md: "2rem" }}
        margin="auto"
        mb="2rem"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
        My Skills
      </Heading>

      <Grid
        justifyContent="space-evenly"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
        }}
        gap={{ base: "10px", sm: "20px", md: "30px" }}
        //  rowGap={10}
        padding={{ base: "1rem", sm: "4rem", md: "6rem" }}
        alignItems="center"
      >
        {SkillArrayObject?.map((data) => (
          <SkillComponent key={data.id} {...data} />
        ))}
      </Grid>
    </div>
  );
};

export default Skill;
