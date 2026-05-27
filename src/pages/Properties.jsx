import { Link } from "react-router-dom"
import properties from "../data/properties"

export default function Properties() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="mb-20">

          <p className="uppercase tracking-[6px] text-sm gold-text mb-4">
            Premium Collection
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Explore Our
            <span className="gold-text"> Luxury Properties</span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl">
            Browse exceptional residences designed for elegant lifestyles,
            elite comfort, and timeless luxury.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-[#171717] rounded-[30px] overflow-hidden border border-white/10 hover:border-[#c8a96b]/40 transition"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h2 className="text-2xl font-semibold">
                      {property.title}
                    </h2>

                    <p className="text-gray-400 mt-3">
                      {property.location}
                    </p>
                  </div>

                  <p className="gold-text text-2xl font-bold">
                    {property.price}
                  </p>

                </div>

                {/* Features */}
                <div className="flex gap-6 text-sm text-gray-300 mt-6">
                  <span>5 Beds</span>
                  <span>4 Baths</span>
                  <span>6200 sqft</span>
                </div>

                {/* Button */}
                <Link
                  to={`/properties/${property.id}`}
                  className="mt-8 w-full bg-[#c8a96b] text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition text-center block"
                >
                  View Property
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}