import { useParams, useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import properties from "../data/properties"

export default function PropertyDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const propertyIndex = properties.findIndex((p) => p.id === Number(id))
  const property = properties[propertyIndex]

  const nextProperty = properties[propertyIndex + 1] || properties[0]

  if (!property) {
    return <div className="text-white p-10">Property not found</div>
  }

  // ❤️ saved state
  const [saved, setSaved] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("savedProps")) || []
    return stored.includes(Number(id))
  })

  // 💥 reaction (heart / heartbreak)
  const [reaction, setReaction] = useState(null)
  const [showReaction, setShowReaction] = useState(false)

  // 💖 floating particles
  const [particles, setParticles] = useState([])

  const toggleSave = () => {
    const stored = JSON.parse(localStorage.getItem("savedProps")) || []

    let updated
    let action

    if (stored.includes(Number(id))) {
      updated = stored.filter((item) => item !== Number(id))
      action = "unlike"
    } else {
      updated = [...stored, Number(id)]
      action = "like"
    }

    localStorage.setItem("savedProps", JSON.stringify(updated))
    setSaved(!saved)

    // ❤️ / 💔 center reaction
    setReaction(action)
    setShowReaction(true)

    // 💖 floating hearts
    const newParticles = Array.from({ length: 6 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 80 + 10,
    }))

    setParticles(newParticles)

    setTimeout(() => {
      setShowReaction(false)
      setReaction(null)
      setParticles([])
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">

        <img
          src={property.image}
          className="w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* title */}
        <div className="
          absolute bottom-10 left-6
          md:left-1/2 md:-translate-x-1/2
          text-left md:text-center
          w-full px-4 max-w-3xl
          z-20
        ">
          <h1 className="text-3xl md:text-5xl font-bold">
            {property.title}
          </h1>

          <p className="text-gray-300 mt-2 md:text-lg">
            📍 {property.location}
          </p>
        </div>

        {/* price */}
        <div className="absolute top-6 right-6 z-30 bg-[#c8a96b] text-black px-4 py-2 rounded-full font-bold">
          {property.price}
        </div>

        {/* ❤️ / 💔 center animation */}
        {showReaction && (
          <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
            <div className="text-6xl animate-bounce">
              {reaction === "like" ? "❤️" : "💔"}
            </div>
          </div>
        )}

        {/* 💖 floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bottom-10 text-xl animate-float-up opacity-80 pointer-events-none z-50"
            style={{ left: `${p.left}%` }}
          >
            ❤️
          </div>
        ))}

      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">

        {/* WHY */}
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            Why this property?
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            This premium property offers modern architecture, luxury interiors,
            and a peaceful environment designed for elite lifestyle.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-300">

          <div className="bg-[#171717] p-4 rounded-xl text-center">
            5 Beds
          </div>

          <div className="bg-[#171717] p-4 rounded-xl text-center">
            4 Baths
          </div>

          <div className="bg-[#171717] p-4 rounded-xl text-center">
            6200 sqft
          </div>

          <div className="bg-[#171717] p-4 rounded-xl text-center">
            Smart Home
          </div>

        </div>

        {/* ACTIONS */}
        <div className="grid md:grid-cols-2 gap-4">

          <Link
            to="/contact"
            className="bg-[#c8a96b] text-black py-3 rounded-xl font-semibold text-center hover:scale-[1.03] transition"
          >
            Contact Agent
          </Link>

          <button
            onClick={() => navigate("/evaluation")}
            className="bg-[#c8a96b] text-black py-3 rounded-xl font-semibold hover:scale-[1.03] transition"
          >
            Evaluate Yours
          </button>

          <button
            onClick={toggleSave}
            className="
              md:col-span-2
              bg-black/60 backdrop-blur-md
              border border-white/20
              py-3 rounded-xl font-semibold
              hover:scale-[1.02] transition
            "
          >
            {saved ? "❤️ Saved Property" : "🤍 Save Property"}
          </button>

        </div>

        {/* NEXT PROPERTY */}
        <div className="bg-[#111] p-6 rounded-2xl border border-white/10 flex flex-col items-center text-center gap-4">

          <div>
            <h3 className="text-lg font-semibold">
              Next Property
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              {nextProperty.title} • {nextProperty.location}
            </p>
          </div>

          <Link
            to={`/properties/${nextProperty.id}`}
            className="bg-[#c8a96b] text-black px-6 py-3 rounded-xl font-semibold hover:scale-[1.05] transition"
          >
            View Next
          </Link>

        </div>

      </div>
    </div>
  )
}