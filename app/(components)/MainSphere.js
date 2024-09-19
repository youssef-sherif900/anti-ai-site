import * as THREE from "three";
import { Html, Icosahedron, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

function MainSphere({ material }) {
  const scroll = useScroll();

  const main = useRef();

  useFrame(() => {
    let scrollY = scroll.offset * 100;
    if (scrollY <= 20) main.current.position.x = Math.min(scrollY * 0.2, 2.6);
    if (scrollY > 20 && scrollY < 40)  main.current.position.x = Math.max(2.6 - (scrollY - 20) * 0.15, 0);
    if (scrollY > 40 && scrollY < 60)  main.current.position.x =  Math.max(0 - (scrollY - 40) * 1.6, -8)
    if(scrollY > 60) main.current.position.x =  Math.min(-8 + (scrollY - 60) * 0.2, -2.6)
  });

  // main sphere rotates following the mouse position
  useFrame(({ clock, mouse }) => {
    main.current.rotation.z = clock.getElapsedTime();
    main.current.rotation.y = THREE.MathUtils.lerp(
      main.current.rotation.y,
      mouse.x * Math.PI,
      0.1
    );
    main.current.rotation.x = THREE.MathUtils.lerp(
      main.current.rotation.x,
      mouse.y * Math.PI,
      0.1
    );
  });
  return (
    <Icosahedron
      args={[1, 4]}
      ref={main}
      material={material}
      position={[0, 0, 0]}
    />

  );
}

export default MainSphere;
