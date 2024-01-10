import { Canvas } from "@react-three/fiber";
import React, { Fragment, Suspense, useEffect } from "react";
import Loading from "../../components/loading";
import Landscape from "../../components/landscape";
import Controls from "../../components/controls";

function SceneGalaxy() {
  const channel = new BroadcastChannel("drag_drop");
  const handleDrag = (e) => {};
  useEffect(() => {
    channel.onmessage = (e) => {};
    return () => {
      channel.close();
    };
  }, [channel]);
  return (
    <Fragment>
      <Canvas camera={{ zoom: 40, position: [0, 0, 500] }}>
        <Suspense fallback={<Loading />}>
          <Controls />
          <Landscape />
        </Suspense>
      </Canvas>
    </Fragment>
  );
}

export default SceneGalaxy;
