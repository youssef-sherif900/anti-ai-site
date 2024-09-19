import {  MeshDistortMaterial, useCubeTexture, useTexture } from '@react-three/drei';
import React, { useState } from 'react'
import Instances from './Instances';

function Scene() {
    const bumpMap = useTexture("/bump.jpg");
    const envMap = useCubeTexture(
      ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
      { path: "/cube/" }
    );
    // We use `useResource` to be able to delay rendering the spheres until the material is ready
    const [material, set] = useState();
  
    return (
      <>
        <MeshDistortMaterial
          ref={set}
          envMap={envMap}
          bumpMap={bumpMap}
          color={"#010101"}
          roughness={0.1}
          metalness={1}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          distort={0.4}
        />
        {material && <Instances material={material} />}
      </>
    );
}

export default Scene