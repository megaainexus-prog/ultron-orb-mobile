import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import * as GLView from 'expo-gl';
import * as THREE from 'three';

const { width, height } = Dimensions.get('window');

export default function App() {
  const glRef = useRef<GLView.GLView | null>(null);

  const onContextCreate = async (gl: GLView.ExpoWebGLRenderingContext) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: gl.getCanvas() as any });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);
    
    const geometry = new THREE.IcosahedronGeometry(2, 4);
    const material = new THREE.MeshPhongMaterial({ color: 0xffb81c, wireframe: true });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);
    
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    camera.position.z = 5;
    
    const animate = () => {
      orb.rotation.x += 0.005;
      orb.rotation.y += 0.007;
      renderer.render(scene, camera);
      gl.endFrameEXP();
      requestAnimationFrame(animate);
    };
    
    animate();
  };

  return (
    <View style={styles.container}>
      <GLView.GLView ref={glRef} onContextCreate={onContextCreate} style={styles.gl} />
      <Text style={styles.title}>ULTRON</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  gl: { flex: 1 },
  title: { position: 'absolute', top: 40, left: 0, right: 0, textAlign: 'center', color: '#ffb81c', fontSize: 24, fontWeight: 'bold' }
});
