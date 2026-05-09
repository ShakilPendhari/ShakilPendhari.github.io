import React from "react";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import resume from "../../Componets/Shakil-Pendhari-Resume.pdf";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import style from "./Home.module.css";
import { RESUME } from "../../constants";

const MotionFlex = motion(Flex);
const MotionBox = motion(Box);

const metrics = [
  ["2.7+", "Years"],
  ["7+", "Products shipped"],
  ["5000+", "SaaS users"],
];

const Home = ({ theme }) => {
  const isLight = !theme;

  return (
    <MotionFlex
      id="home"
      className={`${style.hero} section-shell glass-panel`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="space-between"
      gap={{ base: "2rem", md: "3.5rem" }}
    >
      <MotionBox
        className={style.copy}
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        <Text className={style.eyebrow}>Full Stack Developer - SDE-1</Text>
        <Heading as="h1" className={style.title}>
          Shakil Pendhari
        </Heading>
        <Text className={style.subtitle}>
          I build production SaaS platforms end-to-end, from clean interfaces
          and backend architecture to database design, AWS deployment, and
          CI/CD. Currently building CricVision, a multi-tenant cricket academy
          platform serving 5000+ users.
        </Text>

        <Flex className={style.actions}>
          <Link
            className={style.primaryAction}
            href={resume}
            download
            target="_blank"
            onClick={() => window.open(RESUME, "_blank", "noreferrer")}
          >
            View Resume
          </Link>
          <Link className={style.secondaryAction} href="#project">
            See Work
          </Link>
        </Flex>

        <Flex className={style.socials}>
          <a target="_blank" rel="noreferrer" href="https://github.com/ShakilPendhari" aria-label="GitHub">
            <FaGithub />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shakil-pendhari-b00351245/" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:shakilpp123456@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </Flex>
      </MotionBox>

      <MotionBox
        className={style.visual}
        initial={{ opacity: 0, scale: 0.94, x: 24 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
      >
        <Box className={style.portraitWrap}>
          <LazyLoadImage
            className={style.portrait}
            alt="Shakil Pendhari"
            effect="blur"
            src="/MyImg.jpeg"
          />
        </Box>
        <Box className={style.statusCard}>
          <span />
          Open to all location full stack roles
        </Box>
      </MotionBox>

      <Flex className={style.metrics}>
        {metrics.map(([value, label]) => (
          <Box key={label} className={isLight ? style.metricLight : style.metric}>
            <strong>{value}</strong>
            <span>{label}</span>
          </Box>
        ))}
      </Flex>
    </MotionFlex>
  );
};

export default Home;
