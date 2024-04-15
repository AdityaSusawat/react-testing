import { OrbitControls } from "@react-three/drei";

export default function ThreeD() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}
