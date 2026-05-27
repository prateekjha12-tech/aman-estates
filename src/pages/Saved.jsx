import { Link } from "react-router-dom"
import properties from "../data/properties"

export default function Saved() {
  const savedIds = JSON.parse(localStorage.getItem("savedProps")) || []

  const savedProperties = properties.filter((p) =>
    savedIds.includes(p.id)
  )

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white pt-32 pb-20">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold mb-10">
          ❤️ Saved Properties
        </h1>

        {savedProperties.length === 0 ? (
          <p className="text-gray-400">
            No saved properties yet.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {savedProperties.map((property) => (
              <div
                key={property.id}
                className="bg-[#171717] border border-white/10 rounded-2xl overflow-hidden"
              >

                <img
                  src={property.image}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5 space-y-3">

                  <h2 className="text-xl font-semibold">
                    {property.title}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    📍 {property.location}
                  </p>

                  <p className="text-[#c8a96b] font-bold">
                    {property.price}
                  </p>

                  <Link
                    to={`/properties/${property.id}`}
                    className="block text-center bg-[#c8a96b] text-black py-2 rounded-xl font-semibold hover:scale-[1.03] transition"
                  >
                    View Property
                  </Link>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  )
}