import { Flex, Heading, Link, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { hashlinks } from './RawMaterial'
import  resume  from "../Componets/Shakil-Pendhari-Resume.pdf"


const Hamberger = ({ChangeHamNav}) => {
  const color = useColorModeValue('white', 'gray.800');


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
                 <Link href={resume} 
                       download 
                       style={{textDecoration:"none"}}  
                       onClick={()=>window.open('https://drive.google.com/file/d/17gxAc8lmovBKGQ7oEPSos8TkS9KqAjz2/view?usp=share_link', '_blank', 'noreferrer')} ><Heading 
                                flex="1" 
                                as="h3" 
                                size="md"> Resume </Heading> </Link>     
    </Flex>
  )
}

export default Hamberger