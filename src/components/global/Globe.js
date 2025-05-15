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

        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const arcsData = [
            { startLat: 25.0897, startLng: 55.1551, endLat: 51.5072, endLng: -0.1276 }, // UAE → UK
            { startLat: 25.0897, startLng: 55.1551, endLat: -27.4956, endLng: 153.0494 }, // UAE → Australia (Brisbane)
            { startLat: -33.8995, startLng: 151.1835, endLat: -27.4956, endLng: 153.0494 }, // Australia(Sydney) → Australia(Brisbane)
            { startLat: 25.0897, startLng: 55.1551, endLat: -7.1056, endLng: -34.8321 }, // UAE → Brasil
            { startLat: -7.1056, startLng: -34.8321, endLat: 50.1122, endLng: 8.6839 }, // Brasil → Germany (Frankfurt)
            { startLat: 25.0897, startLng: 55.1551, endLat: 30.3753, endLng: 69.3451 }, // UAE → Pakistan
            { startLat: 50.1122, startLng: 8.6839, endLat: -30.5595, endLng: 22.9375 }, // Germany (Frankfurt) → South Africa
            { startLat: 50.1122, startLng: 8.6839, endLat: 37.0902, endLng: -95.7129 }, // Germany (Frankfurt) → United States
            { startLat: 51.5072, startLng: -0.1276, endLat: 9.082, endLng: 8.6753 },     // UK → Nigeria
            { startLat: 25.0897, startLng: 55.1551, endLat: 56.1304, endLng: -106.3468 },// UAE → Canada
            { startLat: 50.1122, startLng: 8.6839, endLat: 56.2639, endLng: 9.5018 },  // Germany (Frankfurt) → Denmark
            { startLat: 25.0897, startLng: 55.1551, endLat: 23.8859, endLng: 45.0792 },  // UAE → Saudi Arabia
            { startLat: 50.1122, startLng: 8.6839, endLat: 40.0691, endLng: 45.0382 },  // Germany (Frankfurt) → Armenia
            { startLat: 51.5072, startLng: -0.1276, endLat: 20.5937, endLng: 78.9629 },  // UK → India
            { startLat: 25.0897, startLng: 55.1551, endLat: 39.3999, endLng: -8.2245 },  // UAE → Portugal
            { startLat: 51.5072, startLng: -0.1276, endLat: -1.2921, endLng: 36.8219 }, // UK → Kenya
        ];

        const pointsData = [
            { lat: 25.0897, lng: 55.1551 },  // UAE (Dubai)
            { lat: 51.5072, lng: -0.1276 },  // UK
            { lat: -27.4956, lng: 153.0494 },  // Australia (Brisbane)
            { lat: -33.8995, lng: 151.1835 },  // Australia (Sydney)
            { lat: -7.1056, lng: -34.8321 },  // Brasil
            { lat: 30.3753, lng: 69.3451 },  // Pakistan
            { lat: -30.5595, lng: 22.9375 }, // South Africa
            { lat: 37.0902, lng: -95.7129 }, // United States of America
            { lat: 9.082, lng: 8.6753 },     // Nigeria
            { lat: 56.1304, lng: -106.3468 },// Canada
            { lat: 56.2639, lng: 9.5018 },   // Denmark
            { lat: 23.8859, lng: 45.0792 },  // Saudi Arabia
            { lat: 40.0691, lng: 45.0382 },  // Armenia
            { lat: 20.5937, lng: 78.9629 },  // India
            { lat: 39.3999, lng: -8.2245 },  // Portugal
            { lat: -1.2921, lng: 36.8219 }, // Kenya
            { lat: 55.3781, lng: -3.4360 }, // United Kingdom
        ];

        const globe = new ThreeGlobe()
            .globeImageUrl('https://raw.githubusercontent.com/Milky0213/jdot-portfolio/refs/heads/main/public/images/global/earth-water-2')
            .arcsData([]) // Start with no arcs
            .arcColor(() => '#635AFF')
            .arcStroke(0.6)
            .arcAltitude(0.2)
            .arcDashLength(2)
            .arcDashGap(2)
            .arcDashAnimateTime(1000)
            .showAtmosphere(false)
            .showGraticules(true)
            .pointsData(pointsData)
            .pointColor(() => '#635AFF')
            .pointAltitude(0.01)
            .pointRadius(0.6);

        scene.add(globe);

        const addArcsSequentially = async () => {
            for (let i = 0; i < arcsData.length; i++) {
                const currentArcs = globe.arcsData();
                globe.arcsData([...currentArcs, arcsData[i]]);
                await new Promise(resolve => setTimeout(resolve, 1700));
            }
        };

        addArcsSequentially();

        camera.position.z = 275;

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
        <div ref={globeRef} style={{ width: '100%', height: '140vh' }} />
    );
};

export default Globe;
