import React from 'react'
import { Flex, Heading } from "@chakra-ui/react"
import ProjectCard from './ProjectCard'
import style from "./Project.module.css"


let ProjectArray = [{
  information:"This is a clone of buffer.com website, using this user can handle their social media account. Login, signUp and pricing page working well.I used HTML, CSS and JavaScript for building this",
  title:"buffer.com",
  techStacks:"HTML | CSS | JavaScript",
  img:"./buffer.png",
  github:"https://github.com/Sunilrath101/Buffer-clone",
  deployLink:"https://bespoke-biscotti-7e0a1f.netlify.app/"
},
{
  information:"This is a clone of zee5.com website, it is a video streaming app, it has free videos and subscription based services. I used HTML, CSS,  ReactJs  to build it and for UI I used external css library  as Chakra-Ui  and  React-Routing ",
  title:"Zee5.com",
  techStacks:"HTML | CSS | ReactJS | Chakra-Ui",
  img:"./zee5.png",
  github:"https://github.com/ShakilPendhari/zee5.com",
  deployLink:"https://zee-5-masaischool.netlify.app/"
},
{
  information:"This is a clone of orbitz.com website, using this user can book hotels and vehicles. I used  HTML , CSS and  JavaScript",
  title:"Orbitz.com",
  techStacks:"HTML | CSS | JavaScript",
  img:"./orbitz.png",
  github:"https://github.com/ShakilPendhari/dazzling-wing-7781",
  deployLink:"https://dreamy-paprenjak-996346.netlify.app/"
}
]

const Project = () => {
  return (
    <div className={style.project} style={{backgroundColor:"#F56565", padding:"0.5rem 0rem 7rem"}}>
      <Heading as="h1" mb="5rem" mt="6rem">My Projects</Heading>
      <Flex direction="column" 
          id="project"
          gap="3rem">
      {
        ProjectArray && ProjectArray.map((data)=><ProjectCard key={data.title} {...data}/>)
      }
    </Flex>
    </div>
   
  )
}

export default Project