import React from "react";
import { motion } from "framer-motion";
import { Scroll } from "@react-three/drei";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ExpandText from "./ExpandText";
import { CheckCircle, FileSearch, Radar } from "lucide-react";

function Content() {
  return (
    <Scroll html>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[65vw] flex flex-col items-start justify-center absolute right-0"
      >
        <h1 className="text-5xl"> About </h1>
        <ExpandText
          className="w-[400px] leading-8 mt-4"
          text="Anti AI is an AI research and development company. Our mission
        is to ensure that the threat from artificial general
        intelligence are mitigated even before they arise. We believe
        that humanity should benefit from AI, and we're developing our
        own first-in-class Anti AI software to ensure safe usage. We
        are building safe and smart solutions against AGI, but will
        also consider our mission fulfilled if our work aids others to
        achieve this outcome. We're a small team of passionate people
        working together to make a dream come true, a dream of making
        AI safe and accessible for everyone."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[10vw] w-[40vw] flex flex-col items-start justify-center absolute top-[100vh] right-0"
      >
        <h1 className="text-5xl mb-4">Our Mission and Vision </h1>
        <ExpandText
          className="leading-8"
          text="          At ANTI.Ai, our mission is clear: to mitigate the risks associated
          with AGI and to ensure that AI technologies are developed and used
          safely. We believe that AI should serve as a tool for progress, not a
          threat to our future. Our team is dedicated to creating first-in-class
          anti-AI software designed to detect and neutralize potential threats
          before they become significant issues."
        />

        <ExpandText
          className="leading-8 mt-3"
          text="We are building advanced AI solutions, including AI detectors and AI
          checkers, to address the safety and reliability of AI technologies.
          Our AI content detector and AI detection tools are engineered to
          identify and manage AI-related risks effectively. Through these
          efforts, we aim to not only safeguard our technology but also support
          global initiatives to ensure that AI benefits everyone."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[55vw] w-[40vw] flex flex-col items-start justify-center absolute top-[200vh] right-0"
      >
        <h1 className="text-5xl mb-4">Our Commitment to India and the World</h1>
        <ExpandText
          className="leading-8"
          text="We are deeply grateful to India, our home and the source of our
          inspiration. This nation's spirit of innovation, unity, and resilience
          fuels our drive to excel in AI research and development. India's rich
          history of scientific achievement and its growing technological
          landscape provide the perfect backdrop for our mission."
        />

        <ExpandText
          className="leading-8 mt-3"
          text="Our gratitude extends to the entire nation as we work together to
          address the challenges of AI. Our vision is global, but our roots are
          firmly planted in Indian soil. We strive to embody the values of unity
          and collaboration that are central to India's culture and apply these
          principles in our work to create safe and beneficial AI solutions."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[10vw] w-[40vw] flex flex-col items-start justify-center absolute top-[300vh] right-0"
      >
        <h1 className="text-5xl mb-4">The Role of AI Detection and Safety</h1>
        <p className="leading-8">
          In our quest to build a safer AI environment, ANTI.Ai focuses on
          several critical aspects:
        </p>
        <div className="flex flex-row gap-4 mt-3">
          <div className="flex-1 bg-black border border-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <Radar size={48} className="text-white mb-2" />
            <h3 className="text-xl font-semibold text-white text-center">AI Detectors</h3>
          </div>
          <div className="flex-1 bg-black border border-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <CheckCircle size={48} className="text-white mb-2" />
            <h3 className="text-lg font-semibold text-white text-center">AI Checkers</h3>
          </div>
          <div className="flex-1 bg-black border border-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <FileSearch size={48} className="text-white mb-2" />
            <h3 className="text-xl font-semibold text-white text-center">
              AI Content Detectors
            </h3>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[55vw] w-[40vw] flex flex-col items-start justify-center absolute top-[400vh] right-0"
      >
        <h1 className="text-5xl mb-4">
          Building a Team with Passion and Purpose
        </h1>
        <ExpandText
          className="leading-8 text-balance"
          text="At ANTI.Ai, we believe that our strength lies in our team. We are
          always on the lookout for talented, dedicated, and passionate
          individuals who share our vision of creating a safer AI future. If you
          are someone with a strong interest in AI and a commitment to our
          mission, we invite you to explore career opportunities with us."
        />

        <p className="leading-8 mt-3">
          Visit our careers page to learn more about how you can become part of
          our journey.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[10vw] w-[40vw] flex flex-col items-start justify-center absolute top-[500vh] right-0"
      >
        <h1 className="text-5xl mb-4">
          The Path Forward: Unity and Innovation
        </h1>
        <ExpandText
          className="leading-8"
          text="Our work at ANTI.Ai is a testament to the power of unity and
          innovation. We are a small but passionate team, working together to
          achieve a dream that we believe in wholeheartedly. Our efforts are
          aimed at making AI safe and accessible, not just for today but for
          future generations."
        />
        <ExpandText
          className="leading-8 mt-3"
          text="We are optimistic about the future and confident in our ability to
          make a meaningful impact. By developing state-of-the-art anti-AI
          solutions and fostering a collaborative and innovative environment, we
          aim to lead the way in safe AI development."
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-[100vh] left-[55vw] flex flex-col items-start justify-center absolute top-[600vh] right-0"
      >
        <h1 center className="text-5xl mb-6">
          Location
        </h1>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.355374046712!2d75.847298!3d26.828647000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc94f19a88eff%3A0xc380c0998cdeea1c!2sWORKD-%20A%20Co-Working%20Zone!5e0!3m2!1sen!2sin!4v1727938846580!5m2!1sen!2sin"
          width="400"
          height="300"
          border-radius="5px"
          loading="lazy"
        ></iframe>
      </motion.div>
    </Scroll>
  );
}

export default Content;
