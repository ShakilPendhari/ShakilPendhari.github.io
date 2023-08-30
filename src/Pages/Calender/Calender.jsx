import { Heading, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import Tooltip from "react-tooltip";
import "./Calender.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Calender = ({theme}) => {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <Box color={!theme?"black":"white"} width={{ base: "95%", sm: "80%", md: "90%" }} m="auto" className="calender" style={{userSelect:"none",WebkitUserSelect:"none"}}>
      <Heading
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        as="h1"
        // borderBottom={{ base: "3px solid rgb(255,0,0)" }}
        lineHeight="3rem"
        //  width={{base:"20%",sm:"38%",md:"23%"}}
        // width={{ base: "50%", sm: "62%", md: "20%" }}
        fontSize={{ base: "1.3rem", sm: "1.6rem", md: "2rem" }}
        margin="auto"
        m="4rem auto"
        textShadow="2px 2px 10px rgb(250 200 100)"
        
      >
        <span style={{boxShadow:"0px 0px 3px grey",
        padding:"0.2rem 0.8rem",
        borderTopLeftRadius:"5px",
        borderTopRightRadius:"5px",
        borderBottom:`3px solid ${!theme?"#3182CE":"#8B54F8"}`}}>Github Calender</span>
      </Heading>
      <Box
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="70"
        data-aos-duration="1000"
        w="80%"
        m="auto"
        ml={{ sm: "2rem", md: "12rem" }}
      >
        <GitHubCalendar
          className="github"
          blockSize={20}
          fontSize={18}
          username="shakilpendhari"
        >
          <Tooltip delayShow={20} />
        </GitHubCalendar>
      </Box>
    </Box>
  );
};

export default Calender;
