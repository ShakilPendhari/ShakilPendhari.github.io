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
    text: "React.js",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg",
    border: "#0ac9f0",
    boxShowdo: "#82e2f5",
    id: "1",
  },
  {
    text: "Next.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
    border: "#000a03",
    boxShowdo: "rgb(20,20,20)",
    id: "2",
  },
  {
    text: "TypeScript",
    img: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    border: "#0463cf",
    boxShowdo: "#6eabf0",
    id: "3",
  },
  {
    text: "JavaScript",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg",
    border: "#f2e22c",
    boxShowdo: "#fcf27c",
    id: "4",
  },
  {
    text: "Tailwind CSS",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    border: "#38bdf8",
    boxShowdo: "#7dd3fc",
    id: "5",
  },
  {
    text: "Material UI",
    img: "https://www.vectorlogo.zone/logos/mui/mui-icon.svg",
    border: "#007fff",
    boxShowdo: "#3399ff",
    id: "6",
  },
  {
    text: "Chakra UI",
    img: "https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-768x431.png",
    border: "#06bfad",
    boxShowdo: "#7ef7eb",
    id: "7",
  },
  {
    text: "Redux Toolkit",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/redux.svg",
    border: "#785cf2",
    boxShowdo: "#ad9df2",
    id: "8",
  },
  {
    text: "PWA",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/pwa-icon.png",
    border: "#5a0fc8",
    boxShowdo: "#a673ef",
    id: "9",
  },
  {
    text: "Node.js",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg",
    border: "#08a32c",
    boxShowdo: "#81f09b",
    id: "10",
  },
  {
    text: "Express.js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU",
    border: "#000a03",
    boxShowdo: "rgb(20,20,20)",
    id: "11",
  },
  {
    text: "NestJS",
    img: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
    border: "#e0234e",
    boxShowdo: "#f06292",
    id: "12",
  },
  {
    text: "TS.ED",
    img: "https://tsed.dev/tsed.svg",
    border: "#246097",
    boxShowdo: "#4e96d9",
    id: "13",
  },
  {
    text: "REST APIs",
    // img: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/api-icon.png",
    img: "/restApi.png",
    border: "#00a3e0",
    boxShowdo: "#54c8f5",
    id: "14",
  },
  {
    text: "Firebase Auth",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    border: "#ffca28",
    boxShowdo: "#ffe082",
    id: "15",
  },
  {
    text: "Supabase",
    img: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    border: "#3ecf8e",
    boxShowdo: "#6ee7b7",
    id: "16",
  },
  {
    text: "MySQL",
    img: "https://www.vectorlogo.zone/logos/mysql/mysql-official.svg",
    border: "#00758f",
    boxShowdo: "#4db8d1",
    id: "17",
  },
  {
    text: "PostgreSQL",
    img: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
    border: "#336791",
    boxShowdo: "#6596c0",
    id: "18",
  },
  {
    text: "MongoDB",
    img: "https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg",
    border: "#178a32",
    boxShowdo: "#67eb86",
    id: "19",
  },
  {
    text: "TypeORM",
    img: "https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png",
    border: "#fe0805",
    boxShowdo: "#ff6b6b",
    id: "20",
  },
  {
    text: "Firestore",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    border: "#ffca28",
    boxShowdo: "#ffe082",
    id: "21",
  },
  {
    text: "AWS",
    img: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    border: "#ff9900",
    boxShowdo: "#ffcc80",
    id: "22",
  },
  {
    text: "Google Cloud Platform",
    img: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    border: "#4285f4",
    boxShowdo: "#90caf9",
    id: "27",
  },
  {
    text: "Docker",
    img: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    border: "#2496ed",
    boxShowdo: "#73bcf1",
    id: "23",
  },
  {
    text: "Caddy",
    img: "https://caddyserver.com/resources/images/nostalgia/caddy.png",
    border: "#00adef",
    boxShowdo: "#66d1f7",
    id: "24",
  },
  {
    text: "CI/CD (GitHub Actions)",
    img: "https://www.vectorlogo.zone/logos/github/github-tile.svg",
    border: "#2088ff",
    boxShowdo: "#6cb4ff",
    id: "25",
  },
  {
    text: "Redis",
    img: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    border: "#d82c20",
    boxShowdo: "#ff6b61",
    id: "26",
  },
];

let ToolsArrayObject = [
  {
    text: "Git",
    img: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    boxShowdo: "#f05032",
    id: "1",
  },
  {
    text: "GitHub",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHv_jIswdZGXPRC_L76ITDc4nxvOO8tF22AYPXvpnO50JSvbKcPf59QRmP6GxNglhGyI&usqp=CAU",
    boxShowdo: "rgb(20,20,20)",
    id: "2",
  },
  {
    text: "TanStack Query",
    img: "tanStackQuery.svg",
    boxShowdo: "#ff4154",
    id: "3",
  },
  {
    text: "Zustand",
    img: "https://blog.logrocket.com/wp-content/uploads/2021/03/managing-react-state-zustand.png",
    boxShowdo: "#433e38",
    id: "4",
  },
  {
    text: "Razorpay",
    img: "https://razorpay.com/newsroom-content/uploads/2020/12/output-onlinepngtools-1-1.png",
    boxShowdo: "#0099ff",
    id: "5",
  },
  {
    text: "Stripe",
    img: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
    boxShowdo: "#635bff",
    id: "6",
  },
  {
    text: "OpenAI API",
    img: "https://www.logicgate.com/wp-content/smush-webp/plt-openai-01-hero-01.png.webp",
    boxShowdo: "#412991",
    id: "7",
  },
  {
    text: "Gemini API",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*AsXti9JBcuEGIODbisEAYw.jpeg",
    boxShowdo: "#4e8cff",
    id: "8",
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
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        margin="auto"
        mb="2rem"
        textShadow="2px 2px 10px rgb(250 200 100)"
        color={!theme ? "black" : "white"}
        background={!theme ? "rgb(206, 241, 247)" : "black"}
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
          {/* <Text
            boxShadow="0px 0px 6px grey"
            p="0.2rem 0.4rem"
            fontWeight="500"
            borderTopLeftRadius="2px"
            borderTopRightRadius="2px"
            fontSize={{ base: "1.1rem", sm: "1.4rem", md: "1.8rem" }}
            borderBottom={`2px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
            width="max-content"
            margin="2rem auto 1rem"
            color={!theme ? "black" : "white"}
            background={!theme ? "rgb(206, 241, 247)" : "black"}
          >
            Skills
          </Text> */}
        </Box>
        <Grid
          justifyContent="space-evenly"
          background={!theme ? "rgb(206, 241, 247)" : "black"}
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
            borderTopLeftRadius="7px"
            borderTopRightRadius="7px"
            fontSize={{ base: "1.1rem", sm: "1.4rem", md: "1.8rem" }}
            borderBottom={`2px solid ${!theme ? "#3182CE" : "#8B54F8"}`}
            width="max-content"
            margin="2rem auto 1rem"
            color={!theme ? "black" : "white"}
            background={!theme ? "rgb(206, 241, 247)" : "black"}
          >
            Tools
          </Text>
        </Box>
        <Grid
          background={!theme ? "rgb(206, 241, 247)" : "black"}
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

