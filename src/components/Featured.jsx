import { Link } from "react-router-dom"
// importations
const properties = [
  {
    title: "Modern Villa",
    price: "₹5.5CR",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Luxury Penthouse",
    price: "₹4.5CR",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Ocean Residence",
    price: "₹4.1CR",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function Featured() {
  return (
    <section className="py-28 bg-[#111111]">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">

          <div>

            <p className="uppercase tracking-[6px] text-sm gold-text mb-4">
              Premium Collection
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Featured Luxury
              <span className="gold-text"> Properties</span>
            </h2>

          </div>
<Link
  to="/properties"
  className="border border-white/20 px-6 py-3 rounded-full hover:bg-white hover:text-black transition w-fit"
>
  View All
</Link>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {properties.map((property, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
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

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-2xl font-semibold">
                      {property.title}
                    </h3>

                    <p className="text-gray-400 mt-2">
                     Kolkata, west bengal.
                    </p>

                  </div>

                  <p className="gold-text text-2xl font-bold">
                    {property.price}
                  </p>

                </div>

                {/* Features */}
                <div className="flex gap-6 mt-6 text-gray-300 text-sm">

                  <span>5 Beds</span>
                  <span>4 Baths</span>
                  <span>6200 sqft</span>

                </div>

                {/* Button */}
                <Link
  to="/evaluation"
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