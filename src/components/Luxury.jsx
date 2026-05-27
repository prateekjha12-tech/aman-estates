import { Link } from "react-router-dom"
export default function Luxury() {
  return (
    <section className="py-32 bg-[#0f0f0f]">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-[40px]">

            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury House"
              className="w-full h-[650px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

          {/* Content */}
          <div>

            <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
              Luxury Lifestyle
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
              Crafted For Elegant
              <span className="gold-text"> Modern Living</span>
            </h2>

            <p className="text-gray-400 leading-8 mt-8 text-lg">
              Aman Estates delivers world-class residences designed for
              sophisticated lifestyles, combining timeless architecture with
              elite comfort and exceptional experiences.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="bg-[#171717] border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-bold gold-text">
                  Prime Locations
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  Exclusive luxury properties in world-class destinations.
                </p>
              </div>

              <div className="bg-[#171717] border border-white/10 rounded-3xl p-6">
                <h3 className="text-2xl font-bold gold-text">
                  Modern Design
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  Contemporary architecture crafted with premium finishes.
                </p>
              </div>

            </div>

            {/* Button */}
            <Link
  to="/about"
  className="inline-block mt-10 bg-[#c8a96b] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
>
  Learn More
</Link>

          </div>

        </div>

      </div>

    </section>
  )
}