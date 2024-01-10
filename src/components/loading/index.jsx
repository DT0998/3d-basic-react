import React from "react";
import classes from "./loading.module.css";

const Loading = () => (
  <React.Fragment>
    <div class={classes.loading_spinner_dual_ball}>
      <div class={classes.loading}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </React.Fragment>
);

export default Loading;
