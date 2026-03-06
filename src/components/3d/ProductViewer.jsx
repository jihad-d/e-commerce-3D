import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ProductModel from './ProductModel';
import ProductLights from './ProductLights';
import ProductControls from './ProductControls';

function Loader() {
    return (
        <mesh>
            <torusGeometry args={[0.6, 0.2, 16, 40]} />
            <meshBasicMaterial color='#F59E0B' wireframe />
        </mesh>
    )
}

export default function ProductViewer({ modelPath, color }) {
    return (
        <Canvas 
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 4], fov: 45}}
        >
        <ProductLights />
        <ProductControls />

        <Suspense fallback={<Loader/>}>
            <ProductModel path={modelPath} color={color} />
        </Suspense>
        </Canvas>
    )
}
