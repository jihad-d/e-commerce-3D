import { OrbitControls } from '@react-three/drei';

export default function ProductControls() {
    return (
        <OrbitControls
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 1.8}

            minDistance={2}
            maxDistance={8}

            enableDamping
            dampingFactor={0.06}

            enablePan={false}
        />
    )
}
