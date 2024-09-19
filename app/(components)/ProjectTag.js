import React, { useEffect, useState } from 'react'
import {delay, motion, useTransform} from "framer-motion"
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { duration } from '@mui/material';

function ProjectTag() {


  return (
    <motion.h1 initial={{opacity:0}} whileInView={{opacity:1 , transition:{duration:.5 , delay:.5}}}   className= "absolute text-3xl top-[190vh] left-[45vw]  duration-200" >Projects</motion.h1>
  )
}

export default ProjectTag