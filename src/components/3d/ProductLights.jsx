// Technique classique du cinema : Key + Fill + Rim
export default function ProductLights() {
  return (
    <>
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[5, 8, 5]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.1}
        shadow-camera-far={30}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />

      <directionalLight
        position={[-4, 3, -2]}
        intensity={0.6}
        color="#E0F2FE"
      />

      <pointLight position={[0, -3, -5]} intensity={0.8} color="#F59E0B" />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <shadowMaterial transparent opacity={0.35} />
      </mesh>
    </>
  );
}
