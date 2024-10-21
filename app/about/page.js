"use client";
import { Html, ScrollControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import React, { Suspense } from "react";
import Scene from "./(components)/Scene";
import Content from "./(components)/Content";

function page() {
  const { scene } = useGLTF("/nora.glb");

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
        <ambientLight intensity={0.2} />
        <color attach="background" args={["#050505"]} />
        <fog color="#161616" attach="fog" near={8} far={30} />

        <Suspense fallback={<Html center>Loading.</Html>}>
          <ScrollControls damping={0.1} pages={7}>
            <EffectComposer disableNormalPass>
              <Bloom luminanceThreshold={2} />
              <ToneMapping />
            </EffectComposer>
            <Scene />
           <Content />
          </ScrollControls>
        </Suspense>
        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Noise opacity={0.025} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default page;