import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export function useProductModel(path) {
    const { scene, animations } = useGLTF(path);

    useEffect(() => {
        scene.traverse(child => {
            if (child.isMesh) {
                child.castShadow = child.receiveShadow = true;
            }
        });
    }, [scene]);

    return { scene, animations };
}