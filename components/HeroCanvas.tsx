'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const W = mount.clientWidth, H = mount.clientHeight

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000)
    camera.position.z = 5

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)
    const dirLight = new THREE.DirectionalLight(0xc9a84c, 1.2)
    dirLight.position.set(5, 5, 5)
    scene.add(dirLight)
    const pointLight = new THREE.PointLight(0xc9a84c, 2, 20)
    pointLight.position.set(-3, 2, 3)
    scene.add(pointLight)

    // Gold material
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xc9a84c, metalness: 0.9, roughness: 0.2,
    })
    const silverMat = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa, metalness: 0.95, roughness: 0.15,
    })
    const darkMat = new THREE.MeshStandardMaterial({
      color: 0x333333, metalness: 0.5, roughness: 0.5,
    })

    // ── TOOL MESHES ──
    const tools: { mesh: THREE.Object3D, vy: number, vx: number, vr: THREE.Vector3, t: number }[] = []

    function makeTool() {
      const group = new THREE.Group()
      const type = Math.floor(Math.random() * 4)

      if (type === 0) {
        // Scissors — two elongated boxes forming blades
        const blade = new THREE.BoxGeometry(0.05, 0.5, 0.02)
        const b1 = new THREE.Mesh(blade, silverMat)
        b1.position.set(0.05, 0.1, 0)
        b1.rotation.z = 0.3
        const b2 = new THREE.Mesh(blade, silverMat)
        b2.position.set(-0.05, 0.1, 0)
        b2.rotation.z = -0.3
        const handle = new THREE.TorusGeometry(0.12, 0.025, 8, 20)
        const h1 = new THREE.Mesh(handle, goldMat)
        h1.position.set(0.12, -0.25, 0)
        const h2 = new THREE.Mesh(handle, goldMat)
        h2.position.set(-0.12, -0.25, 0)
        group.add(b1, b2, h1, h2)

      } else if (type === 1) {
        // Comb — flat box with teeth
        const body = new THREE.BoxGeometry(0.8, 0.1, 0.03)
        group.add(new THREE.Mesh(body, goldMat))
        for (let i = 0; i < 10; i++) {
          const tooth = new THREE.BoxGeometry(0.04, 0.15, 0.03)
          const m = new THREE.Mesh(tooth, goldMat)
          m.position.set(-0.36 + i * 0.08, -0.12, 0)
          group.add(m)
        }

      } else if (type === 2) {
        // Trimmer — box body with blade
        const body = new THREE.BoxGeometry(0.18, 0.5, 0.1)
        const bodyM = new THREE.Mesh(body, darkMat)
        const blade = new THREE.BoxGeometry(0.16, 0.06, 0.04)
        const bladeM = new THREE.Mesh(blade, silverMat)
        bladeM.position.set(0, 0.28, 0)
        const accent = new THREE.BoxGeometry(0.16, 0.04, 0.12)
        const accentM = new THREE.Mesh(accent, goldMat)
        accentM.position.set(0, 0.1, 0)
        group.add(bodyM, bladeM, accentM)

      } else {
        // Razor — thin elongated blade
        const handle = new THREE.CylinderGeometry(0.025, 0.025, 0.5, 12)
        const handleM = new THREE.Mesh(handle, darkMat)
        const blade = new THREE.BoxGeometry(0.25, 0.06, 0.01)
        const bladeM = new THREE.Mesh(blade, silverMat)
        bladeM.position.set(0.3, 0, 0)
        const pivot = new THREE.SphereGeometry(0.03, 8, 8)
        const pivotM = new THREE.Mesh(pivot, goldMat)
        pivotM.position.set(0.15, 0, 0)
        group.add(handleM, bladeM, pivotM)
      }

      // Random position spread across screen
      group.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3 - 1
      )
      group.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )
      const scale = 0.5 + Math.random() * 0.8
      group.scale.setScalar(scale)

      scene.add(group)
      tools.push({
        mesh: group,
        vx: (Math.random() - 0.5) * 0.008,
        vy: (Math.random() - 0.5) * 0.005,
        vr: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ),
        t: Math.random() * Math.PI * 2,
      })
    }

    // Spawn tools
    for (let i = 0; i < 14; i++) makeTool()

    // ── GOLD PARTICLES ──
    const particleCount = 300
    const positions = new Float32Array(particleCount * 3)
    const pSpeeds = new Float32Array(particleCount)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2
      pSpeeds[i] = 0.003 + Math.random() * 0.008
    }
    const pgeo = new THREE.BufferGeometry()
    pgeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const pmat = new THREE.PointsMaterial({ color: 0xc9a84c, size: 0.04, transparent: true, opacity: 0.7 })
    const particles = new THREE.Points(pgeo, pmat)
    scene.add(particles)

    // ── BARBER POLE ──
    // Two cylinder poles on the sides
    const poleMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.7 })
    const stripMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, metalness: 0.2, roughness: 0.5 })
    const poleGeo = new THREE.CylinderGeometry(0.08, 0.08, 3, 16)
    const pole1 = new THREE.Mesh(poleGeo, poleMat)
    pole1.position.set(-5.5, 0, -1)
    const pole2 = new THREE.Mesh(poleGeo, poleMat)
    pole2.position.set(5.5, 0, -1)
    scene.add(pole1, pole2)
    // Stripe rings
    for (let i = 0; i < 6; i++) {
      const ringGeo = new THREE.TorusGeometry(0.09, 0.025, 8, 20)
      const r1 = new THREE.Mesh(ringGeo, stripMat)
      r1.position.set(-5.5, -1.2 + i * 0.5, -1)
      r1.rotation.x = Math.PI / 2
      const r2 = new THREE.Mesh(ringGeo, stripMat)
      r2.position.set(5.5, -1.2 + i * 0.5, -1)
      r2.rotation.x = Math.PI / 2
      scene.add(r1, r2)
    }

    // ── RESIZE ──
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // ── MOUSE PARALLAX ──
    const mouse = { x: 0, y: 0 }
    const onMouse = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // ── ANIMATE ──
    let frameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      // Camera parallax
      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.05
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      // Animate tools
      tools.forEach(({ mesh, vx, vy, vr, t }, i) => {
        mesh.position.x += vx + Math.sin(elapsed * 0.5 + t) * 0.002
        mesh.position.y += vy + Math.cos(elapsed * 0.4 + t) * 0.002
        mesh.rotation.x += vr.x
        mesh.rotation.y += vr.y
        mesh.rotation.z += vr.z

        // wrap around screen bounds
        if (mesh.position.x > 7) mesh.position.x = -7
        if (mesh.position.x < -7) mesh.position.x = 7
        if (mesh.position.y > 5) mesh.position.y = -5
        if (mesh.position.y < -5) mesh.position.y = 5
      })

      // Animate particles
      const pos = pgeo.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += pSpeeds[i]
        if (pos[i * 3 + 1] > 5) pos[i * 3 + 1] = -5
      }
      pgeo.attributes.position.needsUpdate = true
      particles.rotation.y = elapsed * 0.02

      // Pole stripe scroll
      pole1.rotation.y = elapsed * 1.5
      pole2.rotation.y = elapsed * 1.5

      // Point light orbit
      pointLight.position.x = Math.sin(elapsed * 0.5) * 4
      pointLight.position.y = Math.cos(elapsed * 0.3) * 3

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
      mount.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 w-full h-full" />
}