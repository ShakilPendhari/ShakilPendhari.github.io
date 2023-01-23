import { Heading, Flex, Image, Text, Grid } from '@chakra-ui/react'
import React from 'react'

let style={
             flexDirection:"column" ,
             justifyContent:"center",
             alignItems:"center",
             margin:"auto",
             border:"2px solid green",
             gap:"1.5rem",
             padding:"1rem",
             borderRadius:"1rem",
             boxShadow: "8px 4px green",
            //  boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"

     }

let styleImg={
    width:"100%",
    height:"70%"
}

let imgStyle={transform:"scale(1.05)",
              color:"red", 
              bgColor:"purple.200"}

let styletext={fontWeight:800}

const Skill = () => {
  return (
    <div id="skill" style={{marginBottom:"5rem"}}>
       <Heading as="h1">My Skills</Heading>
      
       <Grid justifyContent="space-evenly" 
               
             templateColumns={{base:'repeat(1, 1fr)',
                               sm:'repeat(3, 1fr)',
                               md:'repeat(4, 1fr)'}} 
             gap={6}
             rowGap={10}
             padding="6rem"
             alignItems="center">
       <Flex 
             _hover={imgStyle} 
             style={style}
             w={{base:"100%",sm:"100%",md:"60%"}}
             >
              <Image style={styleImg} src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"/>
              <Text style={styletext}>HTML 5</Text>
          </Flex>
          <Flex _hover={imgStyle} 
                style={style}
                w={{base:"100%",sm:"100%",md:"60%"}}>
              <Image style={styleImg} src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"/>
              <Text style={styletext}>CSS 3</Text>
          </Flex>
          <Flex _hover={imgStyle}
                style={style}
                w={{base:"100%",sm:"100%",md:"60%"}}>
              <Image style={styleImg} src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"/>
              <Text style={styletext}>JavaScript</Text>
          </Flex>
          <Flex _hover={imgStyle}
                style={style}
                w={{base:"100%",sm:"100%",md:"60%"}}>
              <Image style={styleImg} src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"/>
              <Text style={styletext}>React.Js</Text>
          </Flex>
          <Flex _hover={imgStyle}
                style={style}
                w={{base:"100%",sm:"100%",md:"60%"}}>
              <Image style={styleImg} src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"/>
              <Text style={styletext}>Redux</Text>
          </Flex>
          <Flex _hover={imgStyle}
                style={style}
                w={{base:"100%",sm:"100%",md:"60%"}}>
              <Image style={styleImg} src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"/>
              <Text style={styletext}>Node.Js</Text>
          </Flex>
       </Grid>
    </div>
  )
}

export default Skill