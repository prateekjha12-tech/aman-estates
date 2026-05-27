import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      className="min-h-screen bg-cover bg-center relative flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-36 pb-16 w-full">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">

          {/* Small Tag */}
          <motion.p
            data-aos="fade-up"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[6px] text-sm gold-text mb-4"
          >
            Luxury Real Estate
          </motion.p>

          {/* Heading */}
          <motion.h1
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-4xl"
          >
            Discover Premium Living With
            <span className="gold-text"> Aman Estates</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-gray-300 max-w-2xl text-lg leading-8"
          >
            Exceptional luxury residences crafted for modern lifestyles,
            timeless elegance, and elite comfort.
          </motion.p>

          {/* Buttons */}
          <motion.div
            data-aos="fade-up"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >

           <Link
  to="/properties"
  className="bg-[#c8a96b] text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition text-center"
>
  Explore Properties
</Link>
           <Link
  to="/contact"
  className="border border-[#c8a96b]/50 bg-transparent px-8 py-4 rounded-full text-white hover:bg-[#c8a96b] hover:text-black hover:shadow-[0_0_30px_rgba(200,169,107,0.7)] transition duration-300 text-center"
>
  Contact Us
</Link>
          </motion.div>

          {/* Stats */}
          <div className="hidden lg:flex gap-6 mt-20">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">
              <h2 className="text-4xl font-bold gold-text">
                250+
              </h2>

              <p className="text-gray-300 mt-2">
                Luxury Properties
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">
              <h2 className="text-4xl font-bold gold-text">
                18+
              </h2>

              <p className="text-gray-300 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-6">
              <h2 className="text-4xl font-bold gold-text">
                99%
              </h2>

              <p className="text-gray-300 mt-2">
                Client Satisfaction
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}