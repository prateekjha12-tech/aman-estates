import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="bg-[#0f0f0f] text-white">

      {/* Hero Section */}
      <div
        className="h-[75vh] bg-cover bg-center relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop')",
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full pt-20">

          <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
            Contact Aman Estates
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] max-w-5xl">
            Let’s Discover Your
            <span className="gold-text"> Perfect Property</span>
          </h1>

          <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">
            Connect with our luxury real estate specialists and discover
            exceptional residences crafted for elite lifestyles.
          </p>

        </div>

      </div>

      {/* Main Section */}
      <div className="py-28">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <div>

            <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-xl">
              Speak With Our
              <span className="gold-text"> Luxury Experts</span>
            </h2>

            <p className="text-gray-400 leading-8 text-lg mt-8 max-w-xl">
              Whether you are searching for a premium residence,
              investment opportunity, or exclusive estate, our team is
              here to guide you through every step.
            </p>

            {/* Contact Cards */}
            <div className="grid gap-6 mt-12">

              {/* Address */}
              <div className="bg-[#171717] border border-white/10 rounded-[30px] p-6 flex gap-5 hover:border-[#c8a96b]/40 transition">

                <div className="bg-[#c8a96b] text-black p-4 rounded-2xl h-fit">
                  <MapPin size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Office Address
                  </h3>

                  <p className="text-gray-400 mt-3 leading-7">
                   6, Lenin Sarani, Esplanade Area, Kolkata - 700013, West Bengal, India
                  </p>
                </div>

              </div>

              {/* Phone */}
              <div className="bg-[#171717] border border-white/10 rounded-[30px] p-6 flex gap-5 hover:border-[#c8a96b]/40 transition">

                <div className="bg-[#c8a96b] text-black p-4 rounded-2xl h-fit">
                  <Phone size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Phone Number
                  </h3>

                  <p className="text-gray-400 mt-3">
                    +91 9433567282
                  </p>
                </div>

              </div>

              {/* Email */}
              <div className="bg-[#171717] border border-white/10 rounded-[30px] p-6 flex gap-5 hover:border-[#c8a96b]/40 transition">

                <div className="bg-[#c8a96b] text-black p-4 rounded-2xl h-fit">
                  <Mail size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Email Address
                  </h3>

                  <p className="text-gray-400 mt-3">
                    contact@amanestates.com
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Form */}
          <div className="bg-[#171717] border border-white/10 rounded-[40px] p-8 md:p-10">

            <p className="uppercase tracking-[5px] text-sm gold-text mb-4">
              Send Message
            </p>

            <h3 className="text-4xl font-bold mb-10">
              Request A Consultation
            </h3>

            <form className="grid gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your dream property..."
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none resize-none focus:border-[#c8a96b] transition"
              ></textarea>

              <button className="bg-[#c8a96b] text-black py-5 rounded-2xl font-semibold hover:scale-[1.02] transition">
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  )
}
