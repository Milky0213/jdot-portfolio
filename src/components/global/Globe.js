'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

const Globe = () => {
    const globeRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, globeRef.current.offsetWidth / globeRef.current.offsetHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(globeRef.current.offsetWidth, globeRef.current.offsetHeight);
        globeRef.current.appendChild(renderer.domElement);

        // ✅ Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // ✅ Better globe texture with visible outlines
        const globe = new ThreeGlobe()
            .globeImageUrl('https://raw.githubusercontent.com/Milky0213/jdot-portfolio/refs/heads/main/public/images/global/earth-water-2.png')
            .arcsData([
                { startLat: 25.2048, startLng: 55.2708, endLat: 51.5072, endLng: -0.1276 }, // UAE → UK
                { startLat: 25.2048, startLng: 55.2708, endLat: -33.8688, endLng: 151.2093 }, // UAE → Australia
                { startLat: 25.2048, startLng: 55.2708, endLat: -15.7942, endLng: -47.8822 }, // UAE → Brazil
                { startLat: 25.2048, startLng: 55.2708, endLat: 30.3753, endLng: 69.3451 }, // UAE → Pakistan
            ])
            .arcColor(() => '#635AFF')  // Set the color of the arcs (points shooting out) to #635AFF
            .arcStroke(0.5)            // Set stroke width of arcs
            .arcAltitude(0.5)          // Increase the altitude of the arcs for longer points
            .arcDashLength(0.6)        // Adjust the length of the dash
            .arcDashGap(2)             // Adjust the gap between dashes
            .arcDashAnimateTime(1000) // Animation time for the arc dashes
            .showAtmosphere(false);

        scene.add(globe);
        camera.position.z = 300;

        const animate = () => {
            requestAnimationFrame(animate);
            globe.rotation.y += 0.001;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            renderer.dispose();
        };
    }, []);


    return (
        <div ref={globeRef} style={{ width: '100%', height: '100vh' }} />
    );
};

export default Globe;
