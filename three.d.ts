// Shim for environments where `three` typings are not present.
// The project only uses `three` for runtime WebGL rendering.
declare module 'three' {
  const THREE: any;
  export = THREE;
}

