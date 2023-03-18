import { Canvas } from "@react-three/fiber";
import React, { Fragment } from "react";
import Galaxy from "../../components/Galaxy";
import classes from "./scenegalaxy.module.css";
import { OrbitControls, Stars } from "@react-three/drei";

function SceneGalaxy() {
  return (
    <Fragment>
      <div className={classes.container}>
        <Canvas className={classes.container_3d}>
          <OrbitControls />
          <Stars
            depth={200}
            radius={200}
            saturation={2000}
            count={8000}
            factor={20}
            fade={true}
          />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <pointLight position={[-10, 10, -10]} />
          <Galaxy />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>
    </Fragment>
  );
}

export default SceneGalaxy;
