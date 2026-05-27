export default function Loader({ visible }) {
  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">

      {/* Border frame */}
      <div className="absolute inset-4 border border-[#c8a96b]/20 rounded-[30px]" />

      {/* Glow effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-[#c8a96b]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-[#c8a96b]/10 blur-3xl rounded-full" />

      {/* Shine animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 animate-[shine_2.5s_linear_infinite]" />

      {/* Center loader */}
      <div className="relative flex items-center justify-center">

        <div className="absolute w-20 h-20 border border-[#c8a96b]/30 border-t-[#c8a96b] rounded-full animate-spin" />

        <h1 className="text-3xl font-semibold gold-text">A</h1>

      </div>

    </div>
  )
}