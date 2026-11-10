
import { Canvas, useFrame } from '@react-three/fiber';

import {
  Stars,
  Sparkles,
  Float
} from '@react-three/drei';

import { Suspense, useRef } from 'react';

import Planet from './Planet';

function CameraMovement() {
  useFrame((state) => {
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.3;

    state.camera.position.x +=
      (targetX - state.camera.position.x) * 0.025;

    state.camera.position.y +=
      (targetY - state.camera.position.y) * 0.025;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function FloatingParticles() {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      <Sparkles
        count={120}
        scale={12}
        size={3}
        speed={0.4}
        opacity={0.7}
        color="#6f9fff"
      />

      <Sparkles
        count={65}
        scale={10}
        size={2}
        speed={0.3}
        opacity={0.6}
        color="#6f9fff"
      />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas
        camera={{
          position: [0, 0, 7],
          fov: 50
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />

          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
          />

          <CameraMovement />

          <Stars
            radius={80}
            depth={50}
            count={1000}
            factor={3}
            saturation={0}
            fade
            speed={0.3}
          />

          <FloatingParticles />

          <Float
            speed={1}
            rotationIntensity={0.15}
            floatIntensity={0.2}
          >
            <Planet />
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
