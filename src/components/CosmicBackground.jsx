
"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CosmicBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, camera and renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );

    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // 2. Main 3D group
    const universe = new THREE.Group();
    const getUniverseOffset = (width) =>
      width < 640 ? 0.3 : width < 1024 ? 1.8 : 3.1;
    universe.position.set(getUniverseOffset(container.clientWidth), -0.5, 0);
    scene.add(universe);

    // 3. Create glowing orbit rings
    const ringMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xff850e,
        emissive: 0x7a2600,
        emissiveIntensity: 0.18,
        metalness: 0.82,
        roughness: 0.24,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x00f5d4,
        emissive: 0x00483f,
        emissiveIntensity: 0.18,
        metalness: 0.78,
        roughness: 0.22,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xff382b,
        emissive: 0x65100a,
        emissiveIntensity: 0.18,
        metalness: 0.8,
        roughness: 0.23,
      }),
    ];

    const rings = [];

    const ringSettings = [
      {
        radius: 2.3,
        tube: 0.06,
        scale: [1.65, 0.56, 1],
        rotation: [0.3, 0.15, -0.12],
      },
      {
        radius: 2,
        tube: 0.045,
        scale: [0.7, 1.65, 1],
        rotation: [0.4, -0.6, 0.45],
      },
      {
        radius: 1.55,
        tube: 0.055,
        scale: [0.35, 1.45, 1],
        rotation: [0.2, 0.3, 0.3],
      },
    ];

    ringSettings.forEach((settings, index) => {
      const geometry = new THREE.TorusGeometry(
        settings.radius,
        settings.tube,
        24,
        220
      );

      const ring = new THREE.Mesh(
        geometry,
        ringMaterials[index]
      );

      ring.scale.set(...settings.scale);
      ring.rotation.set(...settings.rotation);

      universe.add(ring);
      rings.push(ring);
    });

    // 4. Golden wireframe sphere
    const wireGeometry = new THREE.IcosahedronGeometry(1.05, 2);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffad32,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });

    const wireSphere = new THREE.Mesh(
      wireGeometry,
      wireMaterial
    );

    universe.add(wireSphere);

    // 5. Solid geometric core
    const coreGeometry = new THREE.IcosahedronGeometry(0.72, 1);

    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x65452f,
      roughness: 0.65,
      metalness: 0.45,
      flatShading: true,
    });

    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    universe.add(core);

    scene.add(new THREE.AmbientLight(0xffffff, 1.8));

    const goldLight = new THREE.PointLight(0xffa52e, 30);
    goldLight.position.set(2, 2, 4);
    universe.add(goldLight);

    const cyanLight = new THREE.PointLight(0x00ffe1, 20);
    cyanLight.position.set(-2, 1, 2);
    universe.add(cyanLight);

    // 6. Tiny glowing stars
    const starCount = 550;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSpeeds = new Float32Array(starCount);
    const starSizes = [];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 17;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      starPositions[i * 3 + 2] = -Math.random() * 7;
      starSpeeds[i] = 0.12 + Math.random() * 0.3;

      const warm = Math.random() > 0.18;

      starColors[i * 3] = warm ? 1 : 0.3;
      starColors[i * 3 + 1] = warm ? 0.48 + Math.random() * 0.3 : 0.9;
      starColors[i * 3 + 2] = warm ? 0.2 : 1;

      starSizes.push(Math.random());
    }

    const starGeometry = new THREE.BufferGeometry();

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    starGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(starColors, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 7. Larger floating particles
    const orbColors = [0x42e9db, 0xff6259, 0xfff1d9];
    const orbs = [];

    orbColors.forEach((color, index) => {
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(index === 2 ? 0.11 : 0.07, 24, 24),
        new THREE.MeshBasicMaterial({ color })
      );

      orb.position.set(
        [2.7, -1.4, 3.1][index],
        [1.15, -1.6, -1.8][index],
        [0.2, 0.8, -0.5][index]
      );

      scene.add(orb);
      orbs.push(orb);
    });

    // 8. Mouse movement
    let mouseX = 0;
    let mouseY = 0;
    let animationId;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.35;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.25;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 9. Responsive canvas
    const resizeObserver = new ResizeObserver(() => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      if (!width || !height) return;

      universe.position.x = getUniverseOffset(width);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    });

    resizeObserver.observe(container);

    // 10. Continuous animation
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.elapsedTime;

      wireSphere.rotation.x = time * 0.12;
      wireSphere.rotation.y = time * 0.18;

      core.rotation.x = time * 0.22;
      core.rotation.y = time * 0.3;
      core.rotation.z = time * 0.12;

      rings.forEach((ring, index) => {
        ring.rotation.z += [0.0009, -0.0012, -0.001][index];
        ring.rotation.x += 0.0003 * (index % 2 ? -1 : 1);
      });

      stars.rotation.y = Math.sin(time * 0.05) * 0.025;
      stars.rotation.x = Math.cos(time * 0.04) * 0.015;

      for (let i = 0; i < starCount; i++) {
        const yIndex = i * 3 + 1;
        starPositions[yIndex] += starSpeeds[i] * delta;

        if (starPositions[yIndex] > 5) {
          starPositions[i * 3] = (Math.random() - 0.5) * 17;
          starPositions[yIndex] = -5;
          starPositions[i * 3 + 2] = -Math.random() * 7;
        }
      }

      starGeometry.attributes.position.needsUpdate = true;

      orbs.forEach((orb, index) => {
        orb.position.y += Math.sin(time * 0.8 + index) * 0.0008;
        orb.rotation.y = time * 0.2;
      });

      // Smooth mouse parallax
      universe.rotation.y +=
        (mouseX - universe.rotation.y) * 0.015;

      universe.rotation.x +=
        (-mouseY - universe.rotation.x) * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // 11. Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
      });

      ringMaterials.forEach((material) => material.dispose());
      wireMaterial.dispose();
      coreMaterial.dispose();
      starMaterial.dispose();

      scene.traverse((object) => {
        if (object.material && !Array.isArray(object.material)) {
          object.material.dispose();
        }
      });

      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="animated-universe" />;
}
