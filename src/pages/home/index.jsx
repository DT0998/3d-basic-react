import { Canvas } from "@react-three/fiber";
import React, { Fragment } from "react";
import Box from "../../components/Box";
import classes from "./home.module.css";

function Home() {
  return (
    <Fragment>
      <div className={classes.container}>
        <Canvas>
          <Box position={[2, 0, 1]} />
        </Canvas>
      </div>
    </Fragment>
  );
}

export default Home;
