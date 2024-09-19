"use client"
import React, { Suspense, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Html } from "@react-three/drei"
import Model from "./components/Model"
import Overlay from "./components/Overlays"

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)


  return (
    <div id="service" className="h-screen">
      <Canvas shadows eventSource={document} eventPrefix="client">
        <ambientLight intensity={1} />
        <Suspense fallback={"loading..."}>
          <Model scroll={scroll} />
          <Environment preset="city" />
        </Suspense>
        <color attach="background" args={["#050505"]} />
      </Canvas>
       <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
  )
}