import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import style1 from "./Skill.module.css";

const MotionFlex = motion(Flex);

const SkillComponent = ({ text, img, boxShowdo }) => {
  return (
    <MotionFlex
      className={style1.skillCard}
      style={{ "--skill-color": boxShowdo }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <Flex className={style1.iconWrap}>
        <Image objectPosition="center" src={img} alt={text} />
      </Flex>
      <Text className={style1.text} w="100%">
        {text}
      </Text>
    </MotionFlex>
  );
};

export default SkillComponent;
