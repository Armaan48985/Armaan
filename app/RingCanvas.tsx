"use client"; // Ensures this runs only on the client side

import { Canvas, useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"; // Correct import

// 🔹 Move rotation logic inside a new component
function RotatingTorus() {
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.01;
      torusRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Torus ref={torusRef} args={[1.5, 0.5, 64, 128]}>
      <meshStandardMaterial 
        color="#c0c0c0" // Silver color
        roughness={0}  // Low roughness for a smooth, shiny surface
        metalness={1}  // High metalness for a shiny, reflective surface
        envMapIntensity={2}  // Optional: Make it more reflective if you have an environment map
      />
    </Torus>
  );
}

export default function RingCanvas() {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      camera={{ position: [0, 0, 5] }}
      gl={{ alpha: true }} // Ensures canvas background is transparent
    >
      {/* Add more lighting to illuminate the scene */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={1} />

      {/* ✅ Use the fixed component */}
      <RotatingTorus />
    </Canvas>
  );
}
