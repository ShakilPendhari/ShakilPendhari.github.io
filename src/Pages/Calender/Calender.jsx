
import { Heading, Box } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import  Tooltip  from 'react-tooltip'
import "./Calender.css"

const calender = () => {
  return (
    <Box width={{base:"95%",sm:"80%",md:"90%"}} m="auto">
    <Heading as="h1" 
             borderBottom={{base:"3px solid rgb(255,0,0)"}} 
             lineHeight="3rem" 
            //  width={{base:"20%",sm:"38%",md:"23%"}} 
             m="5rem auto"

             width={{base:"50%",sm:"62%",md:"20%"}}  
                fontSize={{base:"1.1rem",sm:"1.5rem",md:"2rem"}}
                margin="auto"
                mb="2rem"
             textShadow="2px 2px 10px rgb(250 200 100)">Github Calender</Heading>
    <Box w="80%" m="auto" ml={{sm:"2rem",md:"12rem"}} >
    <GitHubCalendar 
       className="github"
        blockSize={20}
        fontSize={18}
        username="shakilpendhari" 
   ><Tooltip delayShow={20}/></GitHubCalendar>
    </Box>
    </Box>
  )
}

export default calender