import { Canvas } from "@react-three/fiber";
import React, { Fragment } from "react";
import Box from "../../components/Box";
import Button from "../../components/Button";
import classes from "./home.module.css";
import { OrbitControls, Stars } from "@react-three/drei";
import Plane from "../../components/Plane";

function Home() {
  return (
    <Fragment>
      <group className={classes.container}>
        <Canvas className={classes.container_3d}>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <pointLight position={[-10, 10, -10]} />
          <Box position={[0, 2, 0]} color="violet"/>
          <Plane position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} color="yellow" />
        </Canvas>
        <div className={classes.overlay}>
          <Button></Button>
          <Button></Button>
        </div>
      </group>
    </Fragment>
  );
}

export default Home;
