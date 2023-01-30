
import { Heading, Box } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import  Tooltip  from 'react-tooltip'
import "./Calender.css"

const calender = () => {
  return (
    <div style={{width:"80%",margin:"auto",}}>
    <Heading as="h1" 
             borderBottom={{base:"3px solid rgb(255,0,0)"}} 
             lineHeight="3rem" 
            //  width={{base:"20%",sm:"38%",md:"23%"}} 
             m="5rem auto"
             width={{base:"100%",sm:"62%",md:"20%"}}  
                fontSize={{base:"2rem",sm:"2rem",md:"2rem"}}
             textShadow="2px 2px 10px rgb(250 200 100)">Github Calender</Heading>
    <Box w="90%" ml={{sm:"2rem",md:"12rem"}} >
    <GitHubCalendar 
        // blockSize={20}
        // fontSize={20}
        username="shakilpendhari" 
   ><Tooltip delayShow={20}/></GitHubCalendar>
    </Box>
    </div>
  )
}

export default calender