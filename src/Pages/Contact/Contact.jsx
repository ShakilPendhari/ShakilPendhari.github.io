import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css";

const MotionBox = motion(Box);

const Contact = () => {
  return (
    <Box id="contact" className={style.section}>
      <Heading as="h1" className="section-heading" fontSize={{ base: "1.1rem", md: "1.35rem" }}>
        Get In Touch
      </Heading>

      <MotionBox
        className={`${style.panel} section-shell glass-panel`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box>
          <Text className={style.kicker}>Available for all location full stack roles.</Text>
          <Text className={style.copy}>
            Have a product, team, or opportunity where ownership matters? I am
            happy to talk about React, Next.js, Node.js, SaaS architecture, and
            shipping reliable software.
          </Text>
        </Box>

        <Box className={style.contactGrid}>
          <a href="mailto:shakilpp123456@gmail.com">
            <FaEnvelope />
            <span>shakilpp123456@gmail.com</span>
          </a>
          <a href="tel:+919921317929">
            <FaPhoneAlt />
            <span>+91 99213 17929</span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ShakilPendhari">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/shakil-pendhari-b00351245/">
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Contact;
