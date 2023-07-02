import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";
// import "../App.css";
const Stats = () => {
  return (
    // streak 
    <div style={{width:"80%",margin:"auto auto 3rem auto"}} >
      <Flex data-aos="fade-up"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out" style={{ width: "40%", margin: "3rem auto" }}>
        <a href="https://github.com/ShakilPendhari">
          <img
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=ShakilPendhari"
            alt="i_mg1"
          />
        </a>
      </Flex>
 
      <Flex
     
        style={{
          width: "60%",
        //   height: "500px",
          margin: "auto",
        }}
        direction={{base:"column",sm:"column",md:"row"}}
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Box  data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
        <a href="https://github.com/ShakilPendhari">  
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ShakilPendhari"  //launguages
            alt="i_mg2"
          />
        </a>
        </Box>
        <Box  data-aos="fade-left"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out">
        <a style={{height:"100%"}} href="https://github.com/ShakilPendhari">
          <img
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=ShakilPendhari&count_private=true&show_icons=true" //stats
            alt="i_mg3"
          />
        </a>
        </Box>
       
      </Flex>
    </div>
  );
};

export default Stats;