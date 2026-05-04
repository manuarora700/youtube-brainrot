import React from 'react';

const scalesPattern = "bg-[repeating-linear-gradient(315deg,#d1d5db_0,#d1d5db_1px,transparent_1px,transparent_8px)]";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center w-screen h-screen bg-gray-100 overflow-hidden font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Scales framing the viewport */}
      <div className={`absolute top-0 left-0 right-0 w-screen h-6 border-y border-gray-300 ${scalesPattern} z-20`} />
      <div className={`absolute bottom-0 left-0 right-0 w-screen h-6 border-y border-gray-300 ${scalesPattern} z-20`} />
      <div className={`absolute top-0 bottom-0 left-0 w-6 h-screen border-x border-gray-300 ${scalesPattern} z-20`} />
      <div className={`absolute top-0 bottom-0 right-0 w-6 h-screen border-x border-gray-300 ${scalesPattern} z-20`} />

      {/* Main Content Area */}
      {/* Sized precisely to avoid scales on small screens while maintaining max-w-7xl on larger ones */}
      <div className="z-10 w-[calc(100vw-3rem)] max-w-7xl h-[calc(100vh-3rem)] bg-white shadow-2xl relative flex flex-col overflow-hidden">
        
        {/* Faded Background Image */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-90"
          style={{
            backgroundImage: 'url("https://assets.aceternity.com/components/mountains-snow.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            maskImage: 'linear-gradient(to bottom, white 0%, white 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 0%, white 30%, transparent 100%)'
          }}
        />

        {/* Navbar */}
        <nav className="relative z-10 border-b border-gray-200/50 bg-white/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl md:text-2xl tracking-tighter text-gray-950">clonely</span>
            </div>
            
            <div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-950 transition-colors">Agents</a>
              <a href="#" className="hover:text-gray-950 transition-colors">Pricing</a>
              <a href="#" className="hover:text-gray-950 transition-colors">Documentation</a>
            </div>

            <div>
              <button className="px-5 py-2.5 text-sm font-semibold text-white bg-linear-to-t from-blue-600 to-blue-500 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] ring-1 ring-inset ring-white/20 hover:opacity-90 transition-all active:scale-95">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content - Justified End, Left Aligned */}
        <div className="relative z-10 flex-1 flex flex-col justify-end items-start px-6 pb-16 pt-32 md:px-16 md:pb-24">
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-gray-950 max-w-5xl leading-[1.05]">
            Make your AI agents perform 100x better
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-medium">
            With clonely AI, you can spin up 100 of voice agents at a single moment without having to worry about servers and everything that comes with it
          </p>
          
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-linear-to-t from-blue-600 to-blue-500 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] ring-1 ring-inset ring-white/20 hover:opacity-90 transition-all active:scale-95">
              Start building
            </button>
            <button className="w-full sm:w-auto px-6 py-4 text-base font-semibold text-gray-500 hover:text-gray-950 transition-colors">
              Read documentation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
