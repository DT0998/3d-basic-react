import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper } from "three";

const Lights = () => {
  const pLight1 = useRef();
  const pLight2 = useRef();
  useHelper(pLight1, PointLightHelper,1);
  useHelper(pLight2, PointLightHelper,1);

  // fake sphere
  const FakeSphere = () => (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[0.7, 30, 30]} />
      <meshStandardMaterial attach="material" color={0xfff1ef} />
    </mesh>
  );
  return (
    <group>
      <FakeSphere />
      <ambientLight position={[0, 4, 0]} intensity={0.3} ref={pLight2} />

      <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />

      <pointLight
        ref={pLight1}
        intensity={1}
        position={[-6, 3, -6]}
        color={0xffcc77}
        args={[pLight1]}
      >
      </pointLight>

      <pointLight
        ref={pLight2}
        intensity={1}
        position={[6, 3, 6]}
        color={0xffcc77}
        args={[pLight2]}
      >
      </pointLight>
    </group>
  );
};

export default Lights;
