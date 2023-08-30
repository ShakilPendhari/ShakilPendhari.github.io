import { Heading, Grid, Flex, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import SkillComponent from "./SkillComponent";
import AOS from "aos";
import "aos/dist/aos.css";

// let SkillArrayObject = [
//   {
//     text: "HTML 5",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
//     id: "1",
//   },
//   {
//     text: "CSS 3",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",
//     id: "2",
//   },
//   {
//     text: "JavaScript",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
//     id: "3",
//   },
//   {
//     text: "React.Js",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
//     id: "4",
//   },
//   {
//     text: "Redux",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
//     id: "5",
//   },
//   {
//     text: "Node.Js",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
//     id: "6",
//   },
//   {
//     text: "Express.Js",
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU",
//     id: "7",
//   },
//   {
//     text: "MongoDB",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
//     id: "8",
//   },
//   {
//     text: "Git",
//     img: "https://chiranjeev-thapliyal.vercel.app/svg/git.svg",
//     id: "9",
//   },
//   {
//     text: "Chakra-UI",
//     img: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png",
//     id: "10",
//   },
//   {
//     text: "Netlify",
//     img: "https://jeancochrane.com/static/images/blog/netlify-identity-dealbreakers/netlify-logo.png",
//     id: "11",
//   },
//   {
//     text: "Vercel",
//     img: "https://mms.businesswire.com/media/20210216006039/en/859393/23/vercel.jpg",
//     id: "12",
//   },
//   {
//     text: "TypeScript",
//     img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
//     id: "13",
//   },
//   {
//     text: "Next.js",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
//     id: "14",
//   },
//   {
//     text: "VS Code",
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
//     id: "15",
//   },
// ];

let SkillArrayObject = [
  {
    text: "HTML 5",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg",
    border: "orange",
    boxShowdo: "#eb8752",
    id: "1",
  },
  {
    text: "CSS 3",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/css3.svg",
    border: "#427bc2",
    boxShowdo: "#6ea2e6",
    id: "2",
  },
  {
    text: "JavaScript",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
    border: "#f2e22c",
    boxShowdo: "#fcf27c",
    id: "3",
  },
  {
    text: "React.Js",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    border: "#0ac9f0",
    boxShowdo: "#82e2f5",
    id: "4",
  },
  {
    text: "Redux",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
    border: "#785cf2",
    boxShowdo: "#ad9df2",
    id: "5",
  },
  {
    text: "Node.Js",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
    border: "#08a32c",
    boxShowdo: "#81f09b",
    id: "6",
  },
  {
    text: "Express.Js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU",
    border: "#000a03",
    boxShowdo: "rgb(20,20,20)",
    id: "7",
  },
  {
    text: "MongoDB",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
    border: "#178a32",
    boxShowdo: "#67eb86",
    id: "8",
  },
  {
    text: "Chakra-UI",
    img: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png",
    border: "#06bfad",
    boxShowdo: "#7ef7eb",
    id: "9",
  },
  {
    text: "TypeScript",
    img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    border: "#0463cf",
    boxShowdo: "#6eabf0",
    id: "10",
  },
  {
    text: "Next.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
    border: "#000a03",
    boxShowdo: "rgb(20,20,20)",
    id: "11",
  },
];

let ToolsArrayObject = [
  {
    text: "Git",
    img: "data:image/png;base64,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",
    boxShowdo: "#d44b28",
    id: "1",
  },
  {
    text: "Netlify",
    img: "https://jeancochrane.com/static/images/blog/netlify-identity-dealbreakers/netlify-logo.png",
    boxShowdo: "#03a8a8",
    id: "2",
  },
  {
    text: "VS Code",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/768px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    boxShowdo: "#35a2f0",
    id: "3",
  },
  {
    text: "Github",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHv_jIswdZGXPRC_L76ITDc4nxvOO8tF22AYPXvpnO50JSvbKcPf59QRmP6GxNglhGyI&usqp=CAU",
    boxShowdo: "rgb(20,20,20)",
    id: "4",
  },
  {
    text: "Cyclic",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVFGaBlGxrd60GS7aE5MjD3_JlcuL-tD12sf920ffhTyUxSql601gKuNIAoxeRzexSpg&usqp=CAU",
    boxShowdo: "#4a70ed",
    id: "5",
  },
  {
    text: "Postman",
    img: "data:image/png;base64,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",
    boxShowdo: "#cc6104",
    id: "6",
  },
  {
    text: "Vercel",
    img: "https://mms.businesswire.com/media/20210216006039/en/859393/23/vercel.jpg",
    boxShowdo: "rgb(20,20,20)",
    id: "7",
  },
];

const Skill = ({ theme }) => {
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
  //         let skill = document.getElementById("Skill");
  //             skill.className = "navbutAnimationAdd"
  //       }
  //       else{
  //         let skill = document.getElementById("Skill");
  //         skill.className = "navbutAnimationRemove"
  //         skill.classList.remove("navbutAnimationAdd")
  //       }
  //   }
  // }

  return (
    <div
      ref={ref}
      id="skill"
      style={{
        marginBottom: "5rem",
        width: "100%",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      <Heading
        as="h1"
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        borderBottom={`3px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
        lineHeight="3rem"
        // width={{ base: "65%", sm: "22%", md: "10%" }}
        width="max-content"
        m="auto"
        fontSize={{ base: "1.3rem", sm: "1.6rem", md: "2rem" }}
        boxShadow="0px 0px 3px grey"
        p="0.2rem 0.8rem"
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        margin="auto"
        mb="2rem"
        textShadow="2px 2px 10px rgb(250 200 100)"
        color={!theme ? "black" : "white"}
      >
        My Skills
      </Heading>

      <Flex flexDir="column">
        <Box
          position="sticky"
          top="0rem"
          left="0rem"
          textAlign="left"
          width="81%"
          m="auto"
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <Text
            boxShadow="0px 0px 6px grey"
            p="0.2rem 0.4rem"
            fontWeight="500"
            borderTopLeftRadius="2px"
            borderTopRightRadius="2px"
            fontSize={{ base: "1.1rem", sm: "1.4rem", md: "1.8rem" }}
            borderBottom={`2px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
            width="max-content"
            color={!theme ? "white" : "#d6d5a9"}
            margin="2rem auto 1rem"
          >
            Skills
          </Text>
        </Box>
        <Grid
          justifyContent="space-evenly"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: "10px", sm: "20px", md: "0rem" }}
          rowGap={{ base: "10px", sm: "20px", md: "5rem" }}
          //  rowGap={10}
          width="82%"
          m="auto"
          padding={{ base: "1rem", sm: "2rem", md: "2rem" }}
          alignItems="center"
          borderBottom={`3px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
          borderTopLeftRadius="5px"
          borderTopRightRadius="5px"
          boxShadow={`0px 2px 6px ${!theme ? "#3182CE" : "#8B54F8"}`}
          overflow="hidden"
        >
          {SkillArrayObject?.map((data) => (
            <SkillComponent key={data.id} {...data} />
          ))}
        </Grid>
      </Flex>
      <Flex flexDir="column">
        <Box
          position="sticky"
          top="0rem"
          left="0rem"
          textAlign="left"
          width="81%"
          m="2rem auto 0rem"
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <Text
            boxShadow="0px 0px 6px grey"
            fontWeight="500"
            p="0.2rem 0.4rem"
            borderTopLeftRadius="2px"
            borderTopRightRadius="2px"
            fontSize={{ base: "1.1rem", sm: "1.4rem", md: "1.8rem" }}
            borderBottom={`2px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
            width="max-content"
            color={!theme ? "white" : "#d6d5a9"}
            margin="2rem auto 1rem"
          >
            Tools
          </Text>
        </Box>
        <Grid
          justifyContent="space-evenly"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={{ base: "10px", sm: "20px", md: "0rem" }}
          rowGap={{ base: "10px", sm: "20px", md: "5rem" }}
          //  rowGap={10}
          width="82%"
          m="auto"
          padding={{ base: "1rem", sm: "2rem", md: "2rem" }}
          alignItems="center"
          borderBottom={`3px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
          borderTopLeftRadius="5px"
          borderTopRightRadius="5px"
          boxShadow={`0px 2px 6px ${!theme ? "#3182CE" : "#8B54F8"}`}
          overflow="hidden"
          // justifyContent="space-evenly"
          // templateColumns={{
          //   base: "repeat(1, 1fr)",
          //   sm: "repeat(3, 1fr)",
          //   md: "repeat(3, 1fr)",
          // }}
          // gap={{ base: "10px", sm: "20px", md: "30px" }}
          // //  rowGap={10}
          // padding={{ base: "1rem", sm: "4rem", md: "6rem" }}
          // alignItems="center"
        >
          {ToolsArrayObject?.map((data) => (
            <SkillComponent key={data.id} {...data} />
          ))}
        </Grid>
      </Flex>
    </div>
  );
};

export default Skill;
