import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { hashlinks } from './RawMaterial'


const Hamberger = ({ChangeHamNav}) => {


  return (
    <Flex direction="column" 
          // gap="2rem" 
          mt="0rem" 
          p="5rem"
          backgroundColor="whiteAlpha.900"
          h="100vh"
          justifyContent="center" 
          alignItems="center"
          // zIndex="1000"
          >
      {
                    hashlinks?.map((link)=>(
                        <Heading key={link.text}       
                                 flex="1" 
                                 as="h3"  
                                 size="md"
                                 onClick={ChangeHamNav}>

                            <HashLink to={link.to}> 
                               {link.text}
                            </HashLink>

                        </Heading>
                    ))
                 }
    </Flex>
  )
}

export default Hamberger