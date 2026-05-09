import { Box, Button, Flex, Image, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import style from "./Project.module.css";

const MotionFlex = motion(Flex);

const ProjectCard = ({
  information,
  title,
  techStacks,
  img,
  github,
  deployLink,
}) => {
  return (
    <MotionFlex
      className={`${style.card} glass-panel`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box className={style.media}>
        <Image src={img} alt={title} />
      </Box>

      <Flex className={style.cardBody}>
        <Box>
          <Text className={style.cardEyebrow}>Featured project</Text>
          <Text as="h3" className={style.cardTitle}>
            {title}
          </Text>
          <Text className={style.cardText}>{information}</Text>
        </Box>

        <Flex className={style.techList}>
          {techStacks?.map((el) => (
            <Text key={el} as="span">
              {el}
            </Text>
          ))}
        </Flex>

        <Flex className={style.cardActions}>
          {github && (
            <Tooltip label="See code base" hasArrow>
              <a href={github} target="_blank" rel="noreferrer">
                <Button className={style.iconButton} aria-label={`${title} GitHub`}>
                  <FaGithub />
                </Button>
              </a>
            </Tooltip>
          )}
          <Tooltip label="See deployed app" hasArrow>
            <a href={deployLink} target="_blank" rel="noreferrer">
              <Button className={style.liveButton} rightIcon={<FaExternalLinkAlt />}>
                Live
              </Button>
            </a>
          </Tooltip>
        </Flex>
      </Flex>
    </MotionFlex>
  );
};

export default ProjectCard;
