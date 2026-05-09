import { Flex } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
  return (
    <div style={{ width: "min(1120px, calc(100% - 32px))", margin: "0 auto 3rem auto" }}>
      <Flex
        className="glass-panel"
        style={{
          width: "100%",
          margin: "2rem auto",
          padding: "1rem",
          borderRadius: "24px",
          justifyContent: "center",
          overflowX: "auto",
        }}
      >
        <a href="https://github.com/ShakilPendhari" target="_blank" rel="noreferrer">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=ShakilPendhari"
            alt="GitHub streak stats for Shakil Pendhari"
            style={{ maxWidth: "100%", minWidth: "280px" }}
          />
        </a>
      </Flex>
    </div>
  );
};

export default Stats;
