import React from "react";
import { Scroll } from "@react-three/drei";

import { motion } from "framer-motion";
import ProjectTag from "./ProjectTag";
import ProjectDescription from "./ProjectDescription";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ScrollDown from "./ScrollDown";
import BinaryDownloadButton from "./BinaryButton";

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
      <div className="w-screen"></div>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={name}
        className="absolute  top-[12vh] lg:hidden  text-nowrap  w-screen text-center text-6xl  font-geist-mono"
      >
        ANTI Ai
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={name}
        className="absolute hidden lg:block top-[40vh] left-[15vw]  text-8xl font-geist-mono"
      >
        Anti
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={name}
        className="absolute hidden lg:block  top-[40vh]  right-[25vw]  text-8xl font-geist-mono"
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
        className="absolute top-[110vh] left-[10vw] lg:w-1/2 w-4/5"
      >
        <h1 className="text-3xl text-balance">
          We're An Innovative Software Company. Protecting Humanity from the
          uncontrolled rise of Artificial Intelligence, Safeguarding people
          across the globe through our Innovative Software solutions.
        </h1>
        {/* <BinaryDownloadButton /> */}
      </motion.div>
      <div className="absolute top-[200vh] lg:top-[220vh] flex flex-col items-center justify-center space-y-20 md:space-y-20 mx-5 lg:mx-20">
      <ProjectTag />
      <ProjectDescription
        image="/static/radio.jpg"
        title="ANTI.Q- Music Player"
        description="ANTI.0 is our pioneering Anti AI Software, specifically crafted to
              combat the influence of Artificial Intelligence. This innovative
              solution is under active development by our expert team of developers.
              Designed to safeguard user autonomy, ANTI.0 offers robust protection
              against AI-driven intrusions. Stay ahead with ANTI.0, your defense
              against the growing power of AI."
        tags={["Serverless", "Retro", "Nostalgia"]}
      />
      <ProjectDescription
        image="/static/vercel.jpg"
        title="ANTI.0"
        className="flex flex-row-reverse"
        description="ANTI.0 is our pioneering Anti AI Software, specifically crafted to combat the influence of Artificial Intelligence. This innovative solution is under active development by our expert team of developers. Designed to safeguard user autonomy, ANTI.0 offers robust protection against AI-driven intrusions. Stay ahead with ANTI.0, your defense against the growing power of AI."
        tags={["ANTI.0", "Security", "Future Proof"]}
      />
      <ProjectDescription
        image="/static/comingSoon.jpeg"
        title="ANTI.1"
        description="ANTI.1 represents our groundbreaking Concept Artificial Intelligence Project, aimed at disrupting the AI industry with a novel approach. Currently in the developmental phase, ANTI.1 is being meticulously crafted by our dedicated team of researchers and developers. It seeks to redefine AI capabilities by offering innovative features and functionalities not seen before."
        tags={["ANTI.1", "innovation", "Ethical AI"]}
      />
      </div>
      <form className="p-4 flex flex-col absolute lg:top-[450vh] top-[420vh] right-[10vw] justify-center items-center  lg:w-[500px] w-[300px] border-2 border-[#8d8d8d] rounded-md bg-black">
        <h1 className="w-full text-2xl py-3">contact</h1>
        <div className="flex items-center justify-between my-3 w-full">
          <Input className="mr-4" type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </div>
        <Input className="my-3" type="email" placeholder="Email" />
        <Input className="my-3" type="text" placeholder="Phone Number" />
        <Textarea className="my-3" placeholder="Type your message here." />
        <Button variant="secondary" className="w-full mt-4">
          Submit
        </Button>
      </form>
    </Scroll>
  );
}

export default HomeContent;
