import React from 'react'
import {  Scroll } from "@react-three/drei";

import { motion } from "framer-motion";
import ProjectTag from './ProjectTag';
import ProjectDescription from './ProjectDescription';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ScrollDown from './ScrollDown';
import NavBar from './NavBar';

function HomeContent() {


    const name = {
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 2,
          },
        },
      };
    


  return (
    <Scroll html>
    <ScrollDown />
     <NavBar />
     <motion.h1
       initial="hidden"
       animate="visible"
       variants={name}
       className="absolute top-[40vh] left-[20vw] text-8xl"
     >
       Anti
     </motion.h1>
     <motion.h1
       initial="hidden"
       animate="visible"
       variants={name}
       className="absolute top-[40vh] right-[25vw] text-8xl"
     >
       Ai
     </motion.h1>
     <motion.h2
       initial={{ opacity: 0 }}
       animate={{
         opacity: [1, 0],
         transition: { duration: 1, delay: 0 },
       }}
       className="absolute top-[45vh] right-[44vw] text-4xl"
     >
       Welcome
     </motion.h2>
     <motion.h2
       initial={{ opacity: 0 }}
       animate={{
         opacity: [0, 1, 0],
         transition: { delay: 1, duration: 1 },
       }}
       className="absolute top-[45vh] right-[48vw] text-4xl"
     >
       to
     </motion.h2>
     <motion.div
       initial={{ opacity: 0, x: -20 }}
       whileInView={{
         opacity: 1,
         x: 0,
         transition: { duration: 1, delay: 0.5 },
       }}
       className="absolute top-[110vh] left-[10vw] w-1/2"
     >
       <h1 className="text-3xl">
         We're An Innovative Software Company. Protecting Humanity from
         the uncontrolled rise of Artificial Intelligence, Safeguarding
         people across the globe through our Innovative Software
         solutions.
       </h1>
     </motion.div>
     <ProjectTag />
     <ProjectDescription
       title="ANTI.Q- Music Player"
       description="ANTI.0 is our pioneering Anti AI Software, specifically crafted to
              combat the influence of Artificial Intelligence. This innovative
              solution is under active development by our expert team of developers.
              Designed to safeguard user autonomy, ANTI.0 offers robust protection
              against AI-driven intrusions. Stay ahead with ANTI.0, your defense
              against the growing power of AI."
       tags={["ANTI.0", "Security", "Future Proof"]}
     />
              <ProjectDescription
              styles={{left:'10vw'}}
       title="ANTI.Q- Music Player"
       description="ANTI.0 is our pioneering Anti AI Software, specifically crafted to
              combat the influence of Artificial Intelligence. This innovative
              solution is under active development by our expert team of developers.
              Designed to safeguard user autonomy, ANTI.0 offers robust protection
              against AI-driven intrusions. Stay ahead with ANTI.0, your defense
              against the growing power of AI."
       tags={["ANTI.0", "Security", "Future Proof"]}
     />
                            <ProjectDescription
              styles={{ top:'285vh', left:'30vw'}}
       title="ANTI.Q- Music Player"
       description="ANTI.0 is our pioneering Anti AI Software, specifically crafted to
              combat the influence of Artificial Intelligence. This innovative
              solution is under active development by our expert team of developers.
              Designed to safeguard user autonomy, ANTI.0 offers robust protection
              against AI-driven intrusions. Stay ahead with ANTI.0, your defense
              against the growing power of AI."
       tags={["ANTI.0", "Security", "Future Proof"]}
     />
     <form className="p-4 flex flex-col absolute top-[400vh] right-[10vw] justify-center items-center w-[500px] border-2 border-[#8d8d8d] rounded-md bg-black">
     <h1 className="w-full text-2xl py-3">contact</h1>
      <div className="flex items-center justify-between my-3 w-full">
      <Input className="mr-4" type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      </div>
      <Input className="my-3" type="email" placeholder="Email" />
      <Input className="my-3" type="text" placeholder="Phone Number" />
      <Textarea className="my-3" placeholder="Type your message here." />
      <Button variant="secondary" className="w-full mt-4">Submit</Button>
     </form>
   </Scroll>
  )
}

export default HomeContent