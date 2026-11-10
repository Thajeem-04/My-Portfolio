
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';

export default function Planet() {
  const planetRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.25;
      planetRef.current.rotation.x += delta * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.12;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <group>
        {/* Main planet */}
        <mesh ref={planetRef}>
          <sphereGeometry args={[1.35, 64, 64]} />

          <MeshDistortMaterial
            color="#245bca"
            emissive="#142d83"
            emissiveIntensity={0.7}
            roughness={0.25}
            metalness={0.6}
            distort={0.22}
            speed={1.5}
          />
        </mesh>

        {/* Planet atmosphere */}
        <mesh scale={1.17}>
          <sphereGeometry args={[1.35, 48, 48]} />
          <meshBasicMaterial
            color="#398bff"
            transparent
            opacity={0.09}
            side={2}
            depthWrite={false}
          />
        </mesh>

        {/* Orbital ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[2, 0.012, 16, 120]} />
          <meshStandardMaterial
            color="#8b5cff"
            emissive="#6138ff"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Lighting glow */}
        <pointLight
          color="#398bff"
          intensity={18}
          distance={8}
        />
      </group>
    </Float>
  );
}
