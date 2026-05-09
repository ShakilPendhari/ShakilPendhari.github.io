import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaServer, FaCodeBranch, FaCloud } from "react-icons/fa";
import style from "./About.module.css";

const MotionBox = motion(Box);

const highlights = [
  { icon: FaServer, label: "SaaS architecture", text: "Multi-tenant products, auth, databases, and APIs." },
  { icon: FaCloud, label: "Production delivery", text: "AWS deployments, Caddy, CI/CD, and cloud storage." },
  { icon: FaCodeBranch, label: "Full ownership", text: "Frontend, backend, data model, launch, and iteration." },
];

const About = ({ theme }) => {
  return (
    <Box id="about" className={style.section}>
      <Heading as="h1" className="section-heading" fontSize={{ base: "1.1rem", md: "1.35rem" }}>
        About Me
      </Heading>

      <MotionBox
        className={`${style.panel} section-shell glass-panel`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <Box className={style.story}>
          <Text className={style.kicker}>I build real products that hold up in production.</Text>
          <Text>
            I'm a Full Stack Developer with 2.7+ years of experience building
            SaaS platforms across frontend, backend, database design, and cloud
            deployment. At BOSC Tech Labs, I have shipped 7+ products across
            SaaS, fintech, and consumer domains.
          </Text>
          <Text>
            My strongest work is CricVision, a multi-tenant cricket academy
            platform serving 5000+ users. I co-built it end to end, including
            subdomain tenant isolation, Firebase Auth middleware, MySQL schema
            design, and AWS infrastructure.
          </Text>
          <Text>
            I use AI to move faster, but I still own the engineering judgment:
            architecture, code review, production deployments, and what actually
            ships.
          </Text>

          <Flex className={style.emailRow}>
            <FaEnvelope />
            <a href="mailto:shakilpp123456@gmail.com">shakilpp123456@gmail.com</a>
          </Flex>
        </Box>

        <Flex className={style.highlights}>
          {highlights.map(({ icon: Icon, label, text }) => (
            <Box key={label} className={style.highlightCard}>
              <Icon />
              <strong>{label}</strong>
              <span>{text}</span>
            </Box>
          ))}
        </Flex>
      </MotionBox>
    </Box>
  );
};

export default About;
