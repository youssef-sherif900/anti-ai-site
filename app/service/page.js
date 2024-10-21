"use client"
import React, { useRef } from "react"
import Overlay from "./components/Overlays"
import dynamic from 'next/dynamic'

const DynamicCanvas = dynamic(() => import('./components/DynamicCanvas'), { ssr: false })

export default function App() {
  const overlay = useRef()
  const caption = useRef()
  const scroll = useRef(0)


  return (
    <div id="service" className="h-screen">
      <DynamicCanvas scroll={scroll} />
       <Overlay ref={overlay} caption={caption} scroll={scroll} />
    </div>
  )
}