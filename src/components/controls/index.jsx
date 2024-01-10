import { OrbitControls } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";

extend({ OrbitControls });

const Controls = (props) => {
  const ref = useRef();
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useFrame(() => ref.current && ref.current.update());
  return (
    <React.Fragment>
      <OrbitControls ref={ref} args={[camera, domElement]} {...props} />
    </React.Fragment>
  );
};
export default Controls;
