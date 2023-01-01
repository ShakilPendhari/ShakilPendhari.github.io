import React from 'react'
import {  Flex, Heading, Image } from '@chakra-ui/react'

const About = () => {
  return (
       <Flex id="about" 
            style={{width:"17rem", 
                    height:"25rem", 
                    border:"0px solid blue"}}>
       <Image style={{width:"50%", 
                    borderRadius:"50%", 
                    height:"50%"}} 
                    src="/myImg.jpg" 
                    alt="Shakil Pendhari"/>
       <Heading as="h1" 
                fontSize="2rem">Hello 👋</Heading>
    </Flex>
  )
}

export default About