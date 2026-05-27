export default function About() {
  return (
    <section className="bg-[#0f0f0f] text-white">

      {/* Hero Section */}
      <div
        className="h-[70vh] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1600&auto=format&fit=crop')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full">

          <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
            About Aman Estates
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Redefining
            <span className="gold-text"> Luxury Living</span>
          </h1>

        </div>

      </div>

      {/* Story Section */}
      <div className="py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Crafted For Modern
              <span className="gold-text"> Elegant Lifestyles</span>
            </h2>

            <p className="text-gray-400 leading-8 text-lg mt-8">
              Aman Estates was founded with a vision to redefine luxury real
              estate experiences through timeless architecture, premium
              locations, and world-class living standards.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              Every property is carefully curated to deliver sophistication,
              comfort, and exceptional design for elite lifestyles.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">

              <div className="bg-[#171717] border border-white/10 rounded-3xl p-6">

                <h3 className="text-4xl font-bold gold-text">
                  250+
                </h3>

                <p className="text-gray-400 mt-3">
                  Luxury Estates
                </p>

              </div>

              <div className="bg-[#171717] border border-white/10 rounded-3xl p-6">

                <h3 className="text-4xl font-bold gold-text">
                  18+
                </h3>

                <p className="text-gray-400 mt-3">
                  Years Experience
                </p>

              </div>

              <div className="bg-[#171717] border border-white/10 rounded-3xl p-6">

                <h3 className="text-4xl font-bold gold-text">
                  99%
                </h3>

                <p className="text-gray-400 mt-3">
                  Satisfaction
                </p>

              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-[40px]">

            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Mansion"
              className="w-full h-[700px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

        </div>

      </div>

    </section>
  )
}