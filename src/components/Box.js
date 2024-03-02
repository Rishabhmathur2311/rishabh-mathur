import React from "react";
import {MeshDiscardMaterial, Sphere } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

const AnimatedSphere=()=>{
    return(
        <Sphere visible args={[1, 100, 200]}>
           <MeshDistortMaterial />
        </Sphere>
    );
}

export default AnimatedSphere;