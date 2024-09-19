"use client"
import { Button } from "@/components/ui/button"
import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      caption.current.innerText = scroll.current.toFixed(2)
    }}
    className="scroll">
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>Ai Support</h1>
        <p> AI services including AI chat bots, AI voice assistant, AI sales bot,
        ⁠leverage AI to automate your business and increase efficiency with hasslefree conduction of sales services.
        </p>
        <Button className="mt-4">Read More</Button>
      </div>
    </div>
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>App Development</h1>
        <p> Transforming ideas into powerful mobile solutions. Custom app development tailored to your business needs. Expert team delivering seamless iOS and Android experiences
        </p>
        <Button className="mt-4">Read More</Button>
      </div>
    </div>
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>Cloud Services</h1>
        <p>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a rotary mechanical device that extracts energy
        By leveraging cloud services, organizations can enhance their operations,drive growth, and foster innovation.These technologies are doing revolutions in businesses and improving quality of life worldwide.
        </p>
        <Button className="mt-4">Read More</Button>
      </div>
    </div>
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>Web Services</h1>
        <p> Our Web Development services provide end-to-end solutions for building robust, scalable,and user-friendly websites and applications, customized to your business needs.</p>
        <Button className="mt-4">Read More</Button>
      </div>
    </div>
    <span className="caption" ref={caption}>
      0.00
    </span>
  </div>
))

export default Overlay
