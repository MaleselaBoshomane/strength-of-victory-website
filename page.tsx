export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="text-center max-w-2xl z-10">
        
        {/* Small Badge */}
        <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">
          Maintenance Mode
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We’ll Be Back Soon
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Our website is currently undergoing improvements and updates
          to serve you better.
        </p>

        <p className="text-gray-500 mb-10">
          Thank you for your patience and support.
        </p>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
      </div>
    </main>
  );
}