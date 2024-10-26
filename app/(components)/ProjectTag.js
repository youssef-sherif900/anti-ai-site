import React from 'react'
import { motion, } from "framer-motion"


function ProjectTag() {


  return (
    <motion.h1 initial={{opacity:0}} whileInView={{opacity:1 , transition:{duration:.5 , delay:.5}}}   className= "text-3xl   duration-200" >Projects</motion.h1>
  )
}

export default ProjectTag