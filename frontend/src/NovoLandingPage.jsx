import React from 'react';

const NovoLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f4] text-[#445a67] font-['Rajdhani'] relative overflow-hidden pb-20">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="0" x2="20" y2="100" stroke="white" strokeWidth="0.1" />
          <line x1="50" y1="0" x2="80" y2="100" stroke="white" strokeWidth="0.1" />
          <line x1="0" y1="50" x2="100" y2="100" stroke="white" strokeWidth="0.1" />
        </svg>
      </div>

      <nav className="relative z-20 flex justify-between items-center px-16 py-8">
        <div className="border-[1.5px] border-[#c5934c] p-1 w-10 h-10 flex flex-col justify-center items-center leading-none">
          <span className="text-[10px] font-bold tracking-tighter">no</span>
          <span className="text-[10px] font-bold tracking-tighter">vo</span>
        </div>

        <div className="flex space-x-12 text-[14px] font-medium uppercase tracking-[0.2em] text-[#445a67]/80">
          <a href="#" className="hover:text-[#c5934c] transition">About</a>
          <a href="#" className="hover:text-[#c5934c] transition">Service</a>
          <a href="#" className="hover:text-[#c5934c] transition">Project</a>
          <a href="#" className="hover:text-[#c5934c] transition">Team</a>
        </div>

        <button className="border border-[#c5934c] px-8 py-2 rounded-full text-[13px] flex items-center group hover:bg-[#c5934c] hover:text-white transition-all duration-300">
          Contact Us <span className="ml-2">→</span>
        </button>
      </nav>

      <main className="relative z-10 px-16 grid grid-cols-12 mt-10">
        
        <div className="col-span-9 pt-10">
          <h1 className="text-[80px] leading-[0.85] font-semibold tracking-tight">
            <span className="text-[#C28C42]">Our</span> <span className="text-[#445a67]">Implicit Belief</span> <span className="text-[#C28C42]">in</span> <br />
            <span className="text-[#C28C42]">Architecture's Dynamism</span>
          </h1>
        </div>

        <div className="col-span-3 flex flex-col items-end text-right space-y-8 pt-4">
          <p className="text-[13px] leading-relaxed max-w-[200px] text-[#445a67]/70 font-medium">
            Decorations and finishes of ideas in all interior and exterior implementation.
          </p>
          <p className="text-[20px] leading-tight text-[#c5934c] font-semibold max-w-[220px]">
            To achieve uniqueness in all that we do, adding elements of nature
          </p>
          
          <div className="relative w-32 h-32 mt-4">
            <div className="absolute top-0 left-0 w-full h-2 bg-[#c5934c] z-10"></div>
            <img 
              src="/horse.jpg" 
              alt="Sculpture" 
              className="w-full h-full object-cover pt-2"
            />
          </div>
        </div>
      </main>

      <div className="relative z-10 max-w-4xl mx-auto mt-4">
        <div className="relative inline-block">
          
          <div className="absolute -top-12 left-[35%] w-[65%] h-[80%] border-t-[14px] border-r-[14px] border-[#c5934c] z-0"></div>
          
          <div className="relative z-10 border-[6px] border-[#3b82f6]/0"> 
            <img 
              src="/housefist.jpg" 
              alt="House" 
              className="w-[850px] h-[480px] object-cover"
            />
            <div className="absolute inset-0 border-[3px] border-[#3b82f6] opacity-100 pointer-events-none"></div>
          </div>

          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#c5934c] z-20"></div>
        </div>
      </div>

      <div className="relative z-10 px-16 mt-20 flex justify-between items-end">
        
        <div className="relative w-32 h-32 flex items-center justify-center group cursor-pointer">
          <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
            <path
              id="circlePath"
              d="M 16, 64 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
              fill="transparent"
            />
            <text className="text-[10px] uppercase tracking-[0.2em] font-bold fill-[#445a67]">
              <textPath href="#circlePath">
                • WATCH VIDEO • WATCH VIDEO • WATCH VIDEO
              </textPath>
            </text>
          </svg>
          <div className="w-12 h-12 bg-[#445a67] rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent"></div>
          </div>
        </div>

        <div className="max-w-[380px] text-right">
          <p className="text-[13px] leading-relaxed text-[#445a67]/70">
            Our architectural team excels at creating visually appealing and function-driven spaces. 
            We specialize in residential, commercial, and industrial architectural design, 
            tailoring our designs to meet the unique needs of each client.
          </p>
        </div>
      </div>

      <div className="mx-16 mt-12 h-[1px] bg-[#445a67]/20"></div>

    </div>
  );
};

export default NovoLandingPage;