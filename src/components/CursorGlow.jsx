import { useEffect, useState } from "react"

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      {/* Desktop Cursor Glow */}
      <div
        className="hidden md:block fixed top-0 left-0 w-72 h-72 rounded-full pointer-events-none z-[999] blur-3xl opacity-30"
        style={{
          background: "#c8a96b",
          transform: `translate(${position.x - 140}px, ${position.y - 140}px)`,
          transition: "transform 0.15s linear",
        }}
      ></div>

      {/* Mobile Ambient Glow */}
      <div className="md:hidden fixed inset-0 pointer-events-none z-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-120px] w-72 h-72 bg-[#c8a96b]/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-72 h-72 bg-[#c8a96b]/10 rounded-full blur-3xl"></div>

      </div>
    </>
  )
}