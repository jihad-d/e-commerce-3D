import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function useProductRotation(speed = 0.3) {
    const ref = useRef();
    const [paused, setPaused] = useState(false);

    useFrame((_, delta) => {
        if (!paused && ref.current) {
            ref.current.rotation.y += delta * speed;
        }
    });

    return {
        ref, 
        onPointerDown: () => setPaused(true),
        onPointerUp: () => setPaused(false),
    };
}