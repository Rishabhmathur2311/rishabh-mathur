import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useTransition } from "react";
import { useLoader } from "@react-three/fiber";
import Box from "./Box";
import AnimatedSphere from "./Box";

const Earth=()=>{

    const comp=useGLTF('./earth/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={0.75} groundColor="black" />
            <pointLight intensity={3} />
            <spotLight 
            position={[20, 50, 10]}
            />
            <primitive object={comp.scene}
                scale={1.05}
                position={[0, -2, 0]}
                // rotation={[-.01, -.2, -.1]}
            />
        </mesh>
    );
}

const EarthCanvas=()=>{
    return (
        <Canvas
        frameLoop="demand"
        shadows
        gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} 
                autoRotate
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                />
                <Earth />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default EarthCanvas;