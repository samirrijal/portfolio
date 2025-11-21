import { ModelProps } from '@/types/hobbies/models';
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { GLTF } from 'three-stdlib';

export default function Chess({
    visible
}: ModelProps) {
    const groupRef = useRef<THREE.Mesh & Group>(null);
    const gltf = useGLTF('/static/models/chess/chess.glb') as unknown as GLTF;
    const { scene } = gltf;
    const initialRotation = useRef(0);

    useFrame(() => {
        const group = groupRef.current;

        if (visible && group) {
            const scaleX = group.scale.x;

            if (scaleX < 1) {
                const currScale = scaleX + (1 - scaleX) * 0.09;
                group.scale.set(currScale, currScale, currScale);
                
                // Rotate while scaling up
                group.rotation.y = initialRotation.current + (Math.PI * 2 * (scaleX / 1));
                // Rotate while scaling up
                group.rotation.x = initialRotation.current - (Math.PI * 2 * (scaleX / 1));
            }
        } else if (group) {
            // Reset rotation when not visible
            initialRotation.current = group.rotation.y;
        }
    });

    return (
        <>
            {/* Use scale to control the size of the 3D model */}
            <group
                ref={groupRef}
                dispose={null}
                scale={0.5}
                position={[0, -0.08, 0]}
                rotation={[0, Math.PI * 1.79, 0]}
                visible={visible}
                renderOrder={visible ? 1 : 0}
            >
                {/* Additional lighting for better visibility */}
                {visible && (
                    <>
                        <ambientLight intensity={3} />
                        <hemisphereLight
                            color="#ffffff"
                            groundColor="#cccccc"
                            intensity={2}
                        />
                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={2}
                        />
                        <directionalLight
                            position={[-5, 3, -3]}
                            intensity={1.5}
                        />
                        <pointLight
                            position={[2, 2, 2]}
                            intensity={1.5}
                        />
                    </>
                )}
                {/* Transparent box to avoid empty spaces in the group. PresentationControls don't grab empty spaces */}
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial opacity={0} transparent />
                </mesh>
                <primitive object={scene} scale={0.09} />
            </group>
        </>
    );
};