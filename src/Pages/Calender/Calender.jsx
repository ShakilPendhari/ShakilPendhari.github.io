import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import Tooltip from "react-tooltip";
import "./Calender.css";
import { motion } from "framer-motion";

const Calender = ({ theme }) => {
  return (
    <Box
      className="calender"
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      <Heading
        as="h1"
        className="section-heading"
        fontSize={{ base: "1.1rem", md: "1.35rem" }}
      >
        GitHub Calendar
      </Heading>
      <Box
        as={motion.div}
        className="calendar-panel section-shell glass-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <GitHubCalendar
          className="github"
          blockSize={14}
          fontSize={13}
          username="shakilpendhari"
          colorScheme={theme ? "dark" : "light"}
        >
          <Tooltip delayShow={20} />
        </GitHubCalendar>
      </Box>
    </Box>
  );
};

export default Calender;
