import { useState } from "react"

export default function Evaluation() {

  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [size, setSize] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [price, setPrice] = useState(null)

  const handleEstimate = (e) => {
    e.preventDefault()

    let baseRate = 12000

    // State Pricing
    if (location === "Maharashtra") {
      baseRate = 45000
    }

    else if (location === "Delhi") {
      baseRate = 40000
    }

    else if (location === "Karnataka") {
      baseRate = 25000
    }

    else if (location === "West Bengal") {
      baseRate = 18000
    }

    else if (location === "Goa") {
      baseRate = 35000
    }

    else if (location === "Tamil Nadu") {
      baseRate = 22000
    }

    else if (location === "Gujarat") {
      baseRate = 21000
    }

    let total =
      Number(size) * baseRate +
      Number(bedrooms) * 2500000 +
      Number(bathrooms) * 1200000

    // Property Type Pricing
    if (propertyType === "Luxury Villa") {
      total += 30000000
    }

    if (propertyType === "Penthouse") {
      total += 50000000
    }

    if (propertyType === "Duplex Apartment") {
      total += 15000000
    }

    if (propertyType === "Luxury Flat") {
      total += 8000000
    }

    const crore = (total / 10000000).toFixed(2)

    setPrice(`₹${crore} Crore`)
  }

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white pt-40 pb-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Heading */}
        <div className="mb-20">

          <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
            Property Evaluation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Discover Your
            <span className="gold-text"> Property Value</span>
          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl">
            Receive a realistic luxury property estimate based on
            Indian premium real estate market trends.
          </p>

        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-[#171717] border border-white/10 rounded-[40px] p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-10">
              Enter Property Details
            </h2>

            <form
              onSubmit={handleEstimate}
              className="grid gap-6"
            >

              {/* State */}
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-[#0f0f0f] text-gray-300 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition appearance-none"
              >

                <option value="">Select State</option>

                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Karnataka</option>
                <option>West Bengal</option>
                <option>Tamil Nadu</option>
                <option>Gujarat</option>
                <option>Rajasthan</option>
                <option>Punjab</option>
                <option>Uttar Pradesh</option>
                <option>Madhya Pradesh</option>
                <option>Kerala</option>
                <option>Telangana</option>
                <option>Andhra Pradesh</option>
                <option>Haryana</option>
                <option>Bihar</option>
                <option>Odisha</option>
                <option>Assam</option>
                <option>Goa</option>

              </select>

              {/* Property Type */}
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="bg-[#0f0f0f] text-gray-300 border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition appearance-none"
              >

                <option value="">Property Type</option>

                <option>Luxury Villa</option>
                <option>Penthouse</option>
                <option>Luxury Flat</option>
                <option>Duplex Apartment</option>

              </select>

              {/* Size */}
              <input
                type="number"
                placeholder="Property Size (sqft)"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition"
              />

              {/* Bedrooms */}
              <input
                type="number"
                placeholder="Bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition"
              />

              {/* Bathrooms */}
              <input
                type="number"
                placeholder="Bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                className="bg-[#0f0f0f] border border-white/10 rounded-2xl p-5 outline-none focus:border-[#c8a96b] transition"
              />

              {/* Button */}
              <button className="bg-[#c8a96b] text-black py-5 rounded-2xl font-semibold hover:scale-[1.02] transition">
                Calculate Estimate
              </button>

            </form>

          </div>

          {/* Result */}
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 min-h-[500px]">

            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury Property"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-10">

              <p className="uppercase tracking-[6px] text-sm gold-text mb-5">
                Estimated Market Value
              </p>

              {price ? (
                <>
                  <h2 className="text-5xl md:text-7xl font-bold gold-text">
                    {price}
                  </h2>

                  <p className="text-gray-300 mt-6 max-w-md leading-8">
                    Estimated using premium Indian city market
                    rates, luxury amenities, and property size.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-4xl md:text-5xl font-bold max-w-md leading-tight">
                    Your Luxury Property Estimate Appears Here
                  </h2>

                  <p className="text-gray-400 mt-6 leading-8 max-w-md">
                    Fill in your property details to calculate
                    a realistic market valuation.
                  </p>
                </>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
