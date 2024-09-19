"use client";
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import React, { Suspense } from "react";
import Scene from "./(components)/Scene";

function page() {
  return (
    <div className=" h-screen relative">
      <Canvas
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <color attach="background" args={["#050505"]} />
        <fog color="#161616" attach="fog" near={8} far={30} />

        <Suspense fallback={<Html center>Loading.</Html>}>
          <ScrollControls damping={0.1} pages={2}>
            <Scene />
            <Scroll html>
              <p className=" w-[400px] leading-8 absolute left-[55vw] top-[20vh]">
                Anti AI is an AI research and development company. Our mission
                is to ensure that the threat from artificial general
                intelligence are mitigated even before they arise. We believe
                that humanity should benefit from AI, and we're developing our
                own first-in-class Anti AI software to ensure safe usage. We are
                building safe and smart solutions against AGI, but will also
                consider our mission fulfilled if our work aids others to
                achieve this outcome. We're a small team of passionate people
                working together to make a dream come true, a dream of making AI
                safe and accessible for everyone. Our motto is
              </p>
              <iframe className="absolute left-[55vw] top-[130vh]" title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046.7146240066236!2d75.76371110656719!3d26.86437353759361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db56004ec6873%3A0xa3eb53f21a5c227d!2sCo-work%20Town%20-%20Coworking%20space%20in%20Jaipur!5e0!3m2!1sen!2sin!4v1717999928338!5m2!1sen!2sin" width="400" height="300" border-radius="5px" loading="lazy"></iframe>
            </Scroll>
          </ScrollControls>
        </Suspense>
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            opacity={3}
          />
          <Noise opacity={0.025} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default page;
