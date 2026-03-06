import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Precharger AVANT Le composant = pas de re-fetch
useGLTF.preload('/models/shoe.glb');

export default function ProductModel({ path, color }) {
    const { scene } = useGLTF(path);
    const ref = useRef();

    // Appliquer couleur sur tous les meshes du modele
    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) {
                    // IMPORTANT: cloner avant de modifier !
                    // Sinon tous les meshes partagent le meme
                    child.material = child.material.clone();
                    child.material.color.set(color);
                }
            }
        });
    }, [scene, color]); // re-run quand color change


    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={0.1}
            position={[0, 0, 2]}
        />
    );
}
