import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import style1 from "./Skill.module.css";

let style = {
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  border: "2px solid green",
  gap: "1.5rem",
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: "1px 8px 8px 1px rgb(150, 150, 87)",
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

const SkillComponent = ({ text, img }) => {
  return (
    <Flex
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="10000"
      data-aos-easing="ease-in-out"
      className={style1.rotate}
      width={{ base: "60%", sm: "100%", md: "80%" }}
      style={style}
    >
      <Image mixBlendMode="" w="100%" style={styleImg} src={img} alt={text} />
      <Text className={style1.text} w="100%" style={styletext}>
        {text}
      </Text>
    </Flex>
  );
};

export default SkillComponent;
