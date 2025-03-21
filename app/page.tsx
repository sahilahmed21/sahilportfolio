"use client"

import { useEffect, useRef, useState } from "react"
import Spline from "@splinetool/react-spline"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Contact from "@/components/Contact"

export default function Home() {
  const techStackRef = useRef<HTMLDivElement>(null)
  const splineRef = useRef<any>(null)
  const botHeadRef = useRef<any>(null)
  const [splineLoaded, setSplineLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Function to find the Bot's head in the Spline scene
  const findBotHead = (splineApp: any) => {
    if (!splineApp) return null

    // Log the scene structure to help identify the correct object names
    const logSceneStructure = (obj: any, depth = 0) => {
      if (!obj) return

      const indent = " ".repeat(depth * 2)
      console.log(`${indent}${obj.name || "unnamed"}`)

      if (obj.children) {
        obj.children.forEach((child: any) => logSceneStructure(child, depth + 1))
      }
    }

    const scene = splineApp.scene || splineApp._scene
    if (scene) {
      console.log("Scene structure:")
      logSceneStructure(scene)
    }

    // Try different possible names for the head component
    const possibleHeadNames = ["Bot_head", "head", "Head", "BotHead", "Bot-head", "Bot.head"]

    // First try direct finding through Spline API
    for (const name of possibleHeadNames) {
      const head = splineApp.findObjectByName(name)
      if (head) {
        console.log(`Found head directly with name: ${name}`, head)
        return head
      }
    }

    // If not found directly, try to find the Bot first, then look for the head in its children
    const bot = splineApp.findObjectByName("Bot")
    if (bot && bot.children) {
      console.log("Found Bot, searching for head in its children")

      // Look for head in Bot's children
      for (const child of bot.children) {
        if (possibleHeadNames.includes(child.name)) {
          console.log(`Found head as child of Bot with name: ${child.name}`, child)
          return child
        }

        // Look deeper in the hierarchy
        if (child.children) {
          for (const grandchild of child.children) {
            if (possibleHeadNames.includes(grandchild.name)) {
              console.log(`Found head as grandchild of Bot with name: ${grandchild.name}`, grandchild)
              return grandchild
            }
          }
        }
      }
    }

    // If still not found, search the entire scene recursively
    const findObjectByNameRecursive = (obj: any, names: string[]): any => {
      if (!obj) return null
      if (names.includes(obj.name)) return obj
      if (obj.children) {
        for (const child of obj.children) {
          const found = findObjectByNameRecursive(child, names)
          if (found) return found
        }
      }
      return null
    }

    const foundHead = findObjectByNameRecursive(scene, possibleHeadNames)
    if (foundHead) {
      console.log(`Found head through recursive search with name: ${foundHead.name}`, foundHead)
    } else {
      console.warn("Head not found in scene. Available objects:", scene?.children)
    }

    return foundHead
  }

  const onSplineLoad = (splineApp: any) => {
    console.log("Spline loaded:", splineApp)
    setSplineLoaded(true)
    splineRef.current = splineApp

    // Find and store the Bot's head reference when Spline loads
    const botHead = findBotHead(splineApp)
    if (botHead) {
      botHeadRef.current = botHead
      console.log("Bot head object stored in ref")

      // Store the initial rotation as a reference point
      if (botHead.rotation) {
        botHead._initialRotation = {
          x: botHead.rotation.x,
          y: botHead.rotation.y,
          z: botHead.rotation.z,
        }
      }
    } else {
      // If we couldn't find the head specifically, try to find any object we can control
      console.log("Attempting to find any controllable object in the scene...")

      const scene = splineApp.scene || splineApp._scene
      if (scene && scene.children) {
        // Log all top-level objects to help identify what's available
        console.log("Available top-level objects:")
        scene.children.forEach((child: any, index: number) => {
          console.log(`${index}: ${child.name || "unnamed"}`)
        })
      }
    }
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Calculate normalized coordinates (-1 to 1)
      const normalizedX = (event.clientX / viewportWidth) * 2 - 1
      const normalizedY = (event.clientY / viewportHeight) * 2 - 1 // Normalized Y: -1 at top, 1 at bottom

      setMousePosition({ x: normalizedX, y: normalizedY })

      // Apply look-at behavior to the Bot's head if it exists
      if (botHeadRef.current) {
        const head = botHeadRef.current

        // Get initial rotation if available
        const initialRotation = head._initialRotation || { x: 0, y: 0, z: 0 }

        // Calculate limited rotation angles based on mouse position
        // Increase the max rotation to make the head "look" more intensely
        const maxRotation = 1 // Increased from 0.35 to 0.7 radians (about 40 degrees)

        // Apply dampened rotation (smoother movement)
        const dampFactor = 0.1 // Matches the damping of 10 in Spline editor (approximated)

        // Calculate target rotations relative to initial position
        // Fix the up/down movement by adjusting how normalizedY affects rotation.x
        const targetRotationX = initialRotation.x + normalizedY * maxRotation // Remove the negative sign to fix inversion
        const targetRotationY = initialRotation.y + normalizedX * maxRotation // X movement remains the same

        // Smoothly interpolate current rotation to target rotation
        if (head.rotation) {
          head.rotation.x += (targetRotationX - head.rotation.x) * dampFactor
          head.rotation.y += (targetRotationY - head.rotation.y) * dampFactor

          // Force update if needed
          if (typeof head.updateMatrixWorld === "function") {
            head.updateMatrixWorld(true)
          }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [splineLoaded])

  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Spline
          scene="https://prod.spline.design/3NjxCkeQcK-6PMyN/scene.splinecode"
          onLoad={onSplineLoad}
          style={{ width: "100%", height: "100%", opacity: 0.8 }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        <AboutMe isLoading={!splineLoaded} />

        <Skills techStackRef={techStackRef as React.RefObject<HTMLDivElement>} />

        <Experience />


        <Projects />

        <Education />


        <Contact />

        <Footer />
      </div>
    </main>
  )
}

