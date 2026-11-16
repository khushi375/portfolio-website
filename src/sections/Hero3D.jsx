import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, MeshTransmissionMaterial, Sparkles } from '@react-three/drei'
import { useMemo, useRef } from 'react'

function HeroModel() {
  const group = useRef()
  const orbitRing = useRef()

  const orbitSpheres = useMemo(
    () => [
      [-1.7, 0.7, -0.5],
      [1.8, -0.9, 0.8],
      [0.8, 1.8, -1],
    ],
    [],
  )

  useFrame((state, delta) => {
    if (!group.current || !orbitRing.current) return

    group.current.rotation.y += delta * 0.35
    group.current.rotation.x = state.pointer.y * 0.5 + 0.4
    group.current.position.x = state.pointer.x * 0.7
    group.current.position.y = state.pointer.y * 0.5

    orbitRing.current.rotation.z += delta * 0.45
    orbitRing.current.rotation.x += delta * 0.28
  })

  return (
    <group ref={group} position={[0, 0.2, 0]}>
      <Float speed={2.6} rotationIntensity={1.1} floatIntensity={1.7}>
        <mesh castShadow receiveShadow>
          <icosahedronGeometry args={[1.15, 1]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={1.2}
            roughness={0.05}
            transmission={1}
            ior={1.18}
            chromaticAberration={0.18}
            distortionScale={0.35}
            temporalDistortion={0.08}
            color="#dfe8ff"
          />
        </mesh>
      </Float>

      <group ref={orbitRing}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.85, 0.06, 32, 180]} />
          <meshStandardMaterial
            color="#9a6af8"
            emissive="#8b5cf6"
            emissiveIntensity={0.9}
            metalness={1}
            roughness={0.2}
          />
        </mesh>

        <mesh rotation={[0.9, 0.5, 0.4]}>
          <torusGeometry args={[2.25, 0.045, 24, 180]} />
          <meshStandardMaterial
            color="#7de7ff"
            emissive="#22d3ee"
            emissiveIntensity={0.7}
            metalness={1}
            roughness={0.18}
          />
        </mesh>
      </group>

      {orbitSpheres.map((position, index) => (
        <mesh key={index} position={position} rotation={[0.5, 0.7, 0.2]}>
          <icosahedronGeometry args={[0.22 + index * 0.04, 0]} />
          <meshPhysicalMaterial
            color={index % 2 === 0 ? '#f8fafc' : '#7dd3fc'}
            metalness={0.8}
            roughness={0.18}
            emissive={index % 2 === 0 ? '#a78bfa' : '#22d3ee'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}

      <Sparkles count={70} scale={[6, 6, 6]} color="#d7b5ff" size={3.2} speed={0.7} opacity={0.75} />
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="relative h-[420px] w-full max-w-[560px] overflow-hidden rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.24),transparent_36%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.12),transparent_34%),linear-gradient(180deg,#0d1220_0%,#0b1120_38%,#090d15_100%)] shadow-[0_32px_90px_rgba(2,6,23,0.85)] md:h-[580px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.12),transparent_24%)]" />
      <Canvas camera={{ position: [0, 0, 5.8], fov: 40 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[2.5, 3.5, 3]} intensity={2} color="#e2e8f0" />
        <pointLight position={[-2.7, -0.8, 3]} intensity={15} color="#8b5cf6" />
        <pointLight position={[2.8, 1.8, 2.8]} intensity={16} color="#22d3ee" />
        <HeroModel />
        <ContactShadows position={[0, -2.2, 0]} scale={10} blur={2.6} opacity={0.5} far={7} />
      </Canvas>
    </div>
  )
}
