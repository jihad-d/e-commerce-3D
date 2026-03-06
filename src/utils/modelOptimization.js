import { useGLTF } from "@react-three/drei";

export function preloadModels(paths) {
    paths.forEach(p => useGLTF.preload(p));
}

export function logRenderInfo(gl) {
    console.log('Draw calls:', gl.info.render.calls);
    console.log('Triangles:', gl.info.render.triangles);
}