function Box(props) {
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={props.color} />
    </mesh>
  );
}
export default Box;
