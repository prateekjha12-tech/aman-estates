const testimonials = [
  {
    name: "Pragati Jha",
    role: "Business Executive",
    review:
      "Aman Estates completely transformed our luxury home buying experience. Professional& elegant",
  },

  {
    name: "Prateek Jha",
    role: "Interior Designer",
    review:
      "The attention to detail and premium property selection exceeded every expectation we had.",
  },

  {
    name: "Hritik mishra",
    role: "Entrepreneur",
    review:
      "From consultation to closing, everything felt smooth, luxurious, and professionally managed.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#111111]">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-sm gold-text mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What Our
            <span className="gold-text"> Clients Say</span>
          </h2>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#171717] border border-white/10 rounded-[30px] p-8 hover:border-[#c8a96b]/40 transition"
            >

              <div className="flex gap-1 text-[#c8a96b] text-2xl">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8 mt-6 text-lg">
                “{item.review}”
              </p>

              <div className="mt-10">

                <h3 className="text-2xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}