/* Three.js animated background — floating particle "neural network" field.
   Global (non-module) build so it works from file:// with no CORS issues. */
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x06070d, 0.055);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 18;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // ---- Particle field (nodes) ----
  const COUNT = window.innerWidth < 768 ? 90 : 220;
  const RADIUS = 22;
  const positions = new Float32Array(COUNT * 3);
  const speeds = [];

  for (let i = 0; i < COUNT; i++) {
    const x = (Math.random() - 0.5) * RADIUS * 2;
    const y = (Math.random() - 0.5) * RADIUS * 1.2;
    const z = (Math.random() - 0.5) * RADIUS;
    positions.set([x, y, z], i * 3);
    speeds.push({
      dx: (Math.random() - 0.5) * 0.004,
      dy: (Math.random() - 0.5) * 0.004,
      dz: (Math.random() - 0.5) * 0.004,
      phase: Math.random() * Math.PI * 2
    });
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const sprite = makeGlowTexture();
  const material = new THREE.PointsMaterial({
    size: 0.16,
    map: sprite,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    color: 0x7df9ff,
    opacity: 0.85
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // ---- Connecting lines between nearby nodes ----
  const lineGeometry = new THREE.BufferGeometry();
  const maxLines = COUNT * 4;
  const linePositions = new Float32Array(maxLines * 2 * 3);
  lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x7df9ff,
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending
  });
  const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);

  // ---- A few large slow-rotating wireframe icosahedra for depth ----
  const shapes = [];
  const shapeGeo = new THREE.IcosahedronGeometry(3.2, 0);
  const shapeMatA = new THREE.MeshBasicMaterial({ color: 0x7df9ff, wireframe: true, transparent: true, opacity: 0.06 });
  const shapeMatB = new THREE.MeshBasicMaterial({ color: 0xa78bfa, wireframe: true, transparent: true, opacity: 0.06 });

  const s1 = new THREE.Mesh(shapeGeo, shapeMatA);
  s1.position.set(-9, 3, -8);
  scene.add(s1); shapes.push({ mesh: s1, speed: 0.0009 });

  const s2 = new THREE.Mesh(new THREE.IcosahedronGeometry(2.1, 0), shapeMatB);
  s2.position.set(10, -4, -6);
  scene.add(s2); shapes.push({ mesh: s2, speed: -0.0013 });

  const s3 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.05, 8, 60), shapeMatA);
  s3.position.set(6, 6, -10);
  scene.add(s3); shapes.push({ mesh: s3, speed: 0.0011 });

  function makeGlowTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(125,249,255,0.6)');
    g.addColorStop(1, 'rgba(125,249,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }

  // ---- Mouse parallax ----
  const mouse = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  function updateLines() {
    let idx = 0;
    const pos = geometry.attributes.position.array;
    const threshold = 4.2;
    const thresholdSq = threshold * threshold;

    for (let i = 0; i < COUNT && idx < maxLines; i++) {
      const ix = i * 3;
      for (let j = i + 1; j < COUNT && idx < maxLines; j++) {
        const jx = j * 3;
        const dx = pos[ix] - pos[jx];
        const dy = pos[ix + 1] - pos[jx + 1];
        const dz = pos[ix + 2] - pos[jx + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < thresholdSq) {
          const li = idx * 6;
          linePositions[li] = pos[ix]; linePositions[li + 1] = pos[ix + 1]; linePositions[li + 2] = pos[ix + 2];
          linePositions[li + 3] = pos[jx]; linePositions[li + 4] = pos[jx + 1]; linePositions[li + 5] = pos[jx + 2];
          idx++;
        }
      }
    }
    lineGeometry.setDrawRange(0, idx * 2);
    lineGeometry.attributes.position.needsUpdate = true;
  }

  let frame = 0;
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    frame++;

    const pos = geometry.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      const s = speeds[i];
      pos[ix] += s.dx + Math.sin(t * 0.3 + s.phase) * 0.0015;
      pos[ix + 1] += s.dy + Math.cos(t * 0.25 + s.phase) * 0.0015;
      pos[ix + 2] += s.dz;

      if (Math.abs(pos[ix]) > RADIUS) pos[ix] *= -0.98;
      if (Math.abs(pos[ix + 1]) > RADIUS * 0.7) pos[ix + 1] *= -0.98;
      if (Math.abs(pos[ix + 2]) > RADIUS) pos[ix + 2] *= -0.98;
    }
    geometry.attributes.position.needsUpdate = true;

    if (frame % 3 === 0) updateLines();

    shapes.forEach(({ mesh, speed }) => {
      mesh.rotation.x += speed;
      mesh.rotation.y += speed * 1.4;
    });

    // camera parallax with mouse + gentle drift with scroll
    camera.position.x += (mouse.x * 2.2 - camera.position.x) * 0.03;
    camera.position.y += (mouse.y * 1.4 - camera.position.y) * 0.03;
    camera.position.z = 18 - Math.min(scrollY * 0.0025, 4);
    camera.lookAt(scene.position);

    points.rotation.y = t * 0.02;
    lines.rotation.y = t * 0.02;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
