"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei"
import * as THREE from "three"

function FloatingShape({ position, shape }: { position: [number, number, number]; shape: string }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        {shape === "sphere" && (
          <Sphere ref={meshRef} args={[1, 32, 32]}>
            <MeshDistortMaterial
              color="#4F46E5"
              attach="material"
              distort={0.3}
              speed={1.5}
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
        )}
        {shape === "box" && (
          <Box ref={meshRef} args={[1.5, 1.5, 1.5]}>
            <MeshDistortMaterial
              color="#06B6D4"
              attach="material"
              distort={0.4}
              speed={2}
              roughness={0.1}
              metalness={0.9}
            />
          </Box>
        )}
        {shape === "torus" && (
          <Torus ref={meshRef} args={[1, 0.4, 16, 32]}>
            <MeshDistortMaterial
              color="#8B5CF6"
              attach="material"
              distort={0.2}
              speed={1}
              roughness={0.3}
              metalness={0.7}
            />
          </Torus>
        )}
      </group>
    </Float>
  )
}

function Scene() {
  const shapes = useMemo(
    () => [
      { position: [-8, 2, -5], shape: "sphere" },
      { position: [8, -2, -8], shape: "box" },
      { position: [-6, -4, -6], shape: "torus" },
      { position: [6, 4, -7], shape: "sphere" },
      { position: [0, -3, -10], shape: "box" },
      { position: [-4, 5, -9], shape: "torus" },
    ],
    []
  )

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4F46E5" />
      {shapes.map((shape, i) => (
        <FloatingShape key={i} position={shape.position as [number, number, number]} shape={shape.shape} />
      ))}
    </>
  )
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Scene />
      </Canvas>
    </div>
  )
}
