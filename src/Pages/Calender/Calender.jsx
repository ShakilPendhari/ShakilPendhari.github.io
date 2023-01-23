
import { Heading, Box } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import  Tooltip  from 'react-tooltip'

const calender = () => {
  return (
    <div style={{width:"80%",margin:"auto",}}>
    <Heading as="h1" mb="5rem" mt="6rem">Github Calender</Heading>
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