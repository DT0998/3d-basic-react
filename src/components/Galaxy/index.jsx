import { useEffect, useMemo } from "react";
import { SphereGeometry, Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";

// configure galaxy layers

function Galaxy() {
  const { scene } = useThree();
  console.log("Galaxy scene: ", scene);
  const parameters = {
    count: 100000,
    size: 0.01,
    radius: 5,
    branches: 3,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: "#ed124f",
    outsideColor: "#025fdd",
  };

  return (
    <mesh>
      <sphereGeometry />
    </mesh>
  );
}

export default Galaxy;
