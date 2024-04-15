import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import ThreeD from "../components/ThreeD";
//import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader";

export default function Random() {
  return (
    <div style={{ height: "100vw" }}>
      <Canvas>
        <ThreeD />
      </Canvas>
    </div>
  );
}
