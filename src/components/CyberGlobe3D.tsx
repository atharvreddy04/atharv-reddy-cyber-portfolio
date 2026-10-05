import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const InteractiveSecurityNode = () => {
  const outerWireRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    // Speed up rotation when mouse hovers over the 3D model
    const speedMultiplier = hovered ? 2.5 : 1;

    if (outerWireRef.current) {
      outerWireRef.current.rotation.x += delta * 0.18 * speedMultiplier;
      outerWireRef.current.rotation.y += delta * 0.28 * speedMultiplier;

      // Slight tracking tilt toward cursor position
      outerWireRef.current.rotation.z = THREE.MathUtils.lerp(
        outerWireRef.current.rotation.z,
        state.pointer.x * 0.4,
        0.05
      );
    }

    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.25 * speedMultiplier;
    }
  });

  return (
    <Float 
      speed={hovered ? 3.5 : 2} 
      rotationIntensity={hovered ? 1.8 : 1.2} 
      floatIntensity={hovered ? 2.0 : 1.4}
    >
      <group
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.15 : 1}
      >
        {/* Outer Wireframe Geodesic Shell - Highlights on Hover */}
        <mesh ref={outerWireRef}>
          <icosahedronGeometry args={[2.1, 2]} />
          <meshStandardMaterial
            wireframe
            color={hovered ? '#34d399' : '#10b981'}
            emissive={hovered ? '#10b981' : '#064e3b'}
            emissiveIntensity={hovered ? 0.8 : 0.3}
            roughness={0.1}
          />
        </mesh>

        {/* Orbiting Orbital Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.7, hovered ? 0.05 : 0.03, 16, 100]} />
          <meshBasicMaterial 
            color={hovered ? '#67e8f9' : '#06b6d4'} 
            transparent 
            opacity={hovered ? 0.95 : 0.6} 
          />
        </mesh>

        {/* Pulsing Core Sphere */}
        <Sphere args={[1.3, 32, 32]}>
          <MeshDistortMaterial
            color={hovered ? '#38bdf8' : '#06b6d4'}
            attach="material"
            distort={hovered ? 0.55 : 0.3}
            speed={hovered ? 4 : 2}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </group>
    </Float>
  );
};

export const CyberGlobe3D = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`w-full h-64 md:h-72 relative flex items-center justify-center transition-all duration-300 ${
        isHovered ? 'cursor-pointer drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 5.5], fov: 55 }}>
        <ambientLight intensity={isHovered ? 1.2 : 0.8} />
        <directionalLight position={[10, 10, 5]} intensity={isHovered ? 2.2 : 1.5} />
        <pointLight 
          position={[-10, -10, -5]} 
          color={isHovered ? '#34d399' : '#10b981'} 
          intensity={isHovered ? 3.5 : 2} 
        />
        <InteractiveSecurityNode />
      </Canvas>
    </div>
  );
};