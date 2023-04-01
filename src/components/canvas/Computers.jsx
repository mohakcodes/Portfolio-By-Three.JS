import React, { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload , useGLTF } from '@react-three/drei'
import Canvasloader from '../Loader'

const ComputersCanvas = () => {

  const [isMobile , setIsMobile] = useState(false);

  useEffect(()=>{
    const mQuery = window.matchMedia('(max-width:450px)');
    setIsMobile(mQuery.matches);
    console.log(mQuery.matches);

    const handleMQuerychange = (event) => {
      setIsMobile(event.matches);
    }

    mQuery.addEventListener("change" , handleMQuerychange);

    return() => {
      mQuery.removeEventListener("change" , handleMQuerychange);
    }

  } , []);

  const Computers = ({isMobile}) => {
    const computer = useGLTF("./desktop_pc/scene.gltf")
      return (
      <mesh>
        <hemisphereLight intensity={0.15} groundColor="black"/>
        <pointLight intensity={1}/>
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.55 : 0.7}
          position={isMobile ? [1 , -2.3 , -1.3] : [2 , -3.35 , -2]}
          rotation={isMobile ? [0 , -0.06 , -0.1] : [0 , 0 , -0.03]}
        />
      </mesh>
    )
  }

  return (
    <Canvas frameloop='demand'
            shadows
            camera={{position:[20,3,5] , fov:25}}
            gl={{preserveDrawingBuffer:true}}
            className={isMobile ? "pt-14" : "pt-10"}
    >

      <Suspense fallback={<Canvasloader/>}>
        <OrbitControls
          enableZoom = {false}
          maxPolarAngle = {Math.PI / 2}
          minPolarAngle = {Math.PI / 2}
        />
        <Computers isMobile = {isMobile}/>
      </Suspense>

      <Preload all />
      
    </Canvas>
  );
};

export default ComputersCanvas; 