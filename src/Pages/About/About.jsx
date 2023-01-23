import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Flex id="about" 
          marginTop="12rem"
          marginBottom="5rem"
          direction="column"
          backgroundColor="red.400"
          padding="6rem 0rem"
          _hover={{ boxshadow:`0 0 11px rgba(33,33,33,.2)`, color:"white"}}
          gap="1rem">
       <Heading fontSize="2rem" as="h1">About Me</Heading>
       <Text 
                 fontSize={{base:"20px", 
                            sm:"25px",
                            md:"1.5rem"}}
             fontWeight="900"
             color="green">I'm Shakil Balam Pendhari</Text>
       <Text width="60%"
             m="auto"
             fontSize={{base:"20px", 
                            sm:"25px",
                            md:"1.2rem"}}
             fontWeight="700">Aspiring full Stack MERN Developer. I love to make projects which are helpful for masses and serve as a great helpful entity.</Text>
       <Flex justifyContent="center"
             gap="0.4rem"
             alignItems="center">
       <svg
                      focusable="false" 
                      aria-hidden="true" 
                      viewBox="0 0 24 24" 
                      width="25px"
                      data-testid="MailIcon">
                      <path 
                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z">
                      </path>
                  </svg>
        <Text color="blue">shakilpp123456@gmail.com</Text>
       </Flex>
    </Flex>
  )
}

export default About