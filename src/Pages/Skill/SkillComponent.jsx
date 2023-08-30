import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import style1 from "./Skill.module.css";

let style = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  // border: "2px solid green",
  gap: "1.5rem",
  padding: "1rem",
  borderRadius: "1rem",
  // boxShadow: "1px 8px 8px 1px rgb(150, 150, 87)",
  height: "100%",
  background: "white",
  //  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
};

let styleImg = {
  width: "100%",
  height: "100%",
};

// let imgStyle={
//   // transform:"scale(1.05)",
//               // color:"red",
//               bgColor:"purple.200"}

let styletext = { fontWeight: 800 };

const SkillComponent = ({ text, img,border,boxShowdo }) => {
  return (
    <Flex
      data-aos="fade-left"
      data-aos-delay="20"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      className={style1.rotate}
      width={{ base: "60%", sm: "100%", md: "70%" }}
      height={{base:"60%",sm:"100%",md:"70%"}}
      minW={{base:"7.2rem",md:"11rem"}}
      style={style}
      // border={`2px solid ${border}`}
      boxShadow= {`0px 2px 8px 3px ${boxShowdo}`}
    >
       <Image objectPosition="center"  mixBlendMode="" w="100%" style={styleImg} src={img} alt={text}  minHeight={{ base: "10rem", sm: "12rem", md: "15rem" }} />
      <Text className={style1.text} w="100%" style={styletext}>
        {text}
      </Text>
    </Flex>
  );
};

export default SkillComponent;
