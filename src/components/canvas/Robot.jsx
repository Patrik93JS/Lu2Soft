import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robot = ({ isMobile }) => {
  const robot = useGLTF("./robot/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={3.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={1.12}
        penumbra={10}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={robot.scene}
        scale={isMobile ? 0.7 : 1.3}
        position={isMobile ? [0, -3, -2.2] : [-10, -100.25, -10]}
        rotation={[0, -0.2, 0]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaQueryChange
      );
    };
  });

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [500, 500, 500], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robot isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
