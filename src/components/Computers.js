import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useTransition } from "react";
import { useLoader } from "@react-three/fiber";
import Box from "./Box";
import AnimatedSphere from "./Box";

const Computers=()=>{

    const comp=useGLTF('./intro/scene.gltf');
//     // const [startTransition, isPending] = useTransition();
//     // const { scene } = useLoader(GLTFLoader, './scene.gltf', startTransition);

//     const gltfLoader = new GLTFLoader();
//     gltfLoader.load('./desktop/scene.gltf', (gltf)=>{
//         scene.add(gltf.scene);
//     });

    return (
        <mesh>
            <hemisphereLight intensity={0.25} groundColor="black" />
            <pointLight intensity={7} />
            <spotLight 
            position={[-20, 50, 10]}
            />
            <primitive object={comp.scene}
                scale={4}
                position={[1, 0, -1]}
                rotation={[-.01, -.2, -.1]}
            />
        </mesh>
        // <div></div>
    );
}

const ComputerCanvas=()=>{
    return (
        <Canvas
        frameLoop="demand"
        shadows
        camera={{position: [10, 12, 2], fov: 25}}
        gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={null}>
                <OrbitControls enableZoom={false} 
                autoRotate
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
                />
                <Computers />
            </Suspense>
            <Preload all />
        </Canvas>
    );
}

export default ComputerCanvas;