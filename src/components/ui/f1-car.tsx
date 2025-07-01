"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import type { Group } from 'three';

const CarModel = () => {
  const groupRef = useRef<Group>(null!);
  const [isRacing, setIsRacing] = useState(false);

  useEffect(() => {
    const race = () => {
      setIsRacing(true);
      if (groupRef.current) {
        groupRef.current.position.x = -15; // Start from the left
      }
    };
    
    // Initial race on mount after a short delay
    const timeout = setTimeout(race, 500);
    
    // Trigger the race every 3 seconds
    const interval = setInterval(race, 3000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
        if (isRacing) {
          // Animate the car moving across the screen
          groupRef.current.position.x += 40 * delta; // Speed of the car
          // Stop the animation when it goes off-screen
          if (groupRef.current.position.x > 15) {
            setIsRacing(false);
          }
        } else {
            // Hide the car off-screen when not racing
            groupRef.current.position.x = -20;
        }
    }
  });

  // This is a very simple representation of an F1 car using primitive shapes.
  // You can replace this with a component that loads a proper 3D model (e.g., a .glb file).
  return (
    <group ref={groupRef} rotation={[0, Math.PI / 1.8, 0.1]} scale={0.4}>
      {/* Body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[4, 0.4, 1.5]} />
        <meshStandardMaterial color="hsl(var(--primary))" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Cockpit */}
      <mesh position={[0.3, 0.6, 0]}>
        <boxGeometry args={[1, 0.4, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Front Wing */}
       <mesh position={[2.2, 0.1, 0]}>
        <boxGeometry args={[0.5, 0.1, 2.5]} />
        <meshStandardMaterial color="black" />
      </mesh>
       {/* Rear Wing */}
       <mesh position={[-2.2, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.2, 2]} />
        <meshStandardMaterial color="black" />
      </mesh>
       {/* Wheels (as cylinders) */}
      <mesh position={[1.5, 0, 1.1]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[1.5, 0, -1.1]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-1.5, 0, 1.1]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[-1.5, 0, -1.1]} rotation={[0,0,Math.PI/2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
        <meshStandardMaterial color="#222" />
      </mesh>
    </group>
  );
};


export const F1CarCanvas = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 2, 12], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <CarModel />
      </Canvas>
    </div>
  );
};
