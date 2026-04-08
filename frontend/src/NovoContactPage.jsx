import React from 'react';

const NovoContactPage = () => {
  return (
    <div className="min-h-screen bg-[#ecf0f1] text-[#445a67] font-['Rajdhani'] relative overflow-hidden flex items-center justify-center py-20 px-10">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="50" y1="0" x2="10" y2="100" stroke="white" strokeWidth="0.2" />
          <line x1="60" y1="0" x2="90" y2="100" stroke="white" strokeWidth="0.2" />
          <line x1="0" y1="30" x2="100" y2="80" stroke="white" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-12 gap-10">
        
        <div className="col-span-4 flex flex-col justify-between pt-10">
          <div className="space-y-8">
            <h3 className="text-[18px] font-medium tracking-wide">Also get in touch</h3>
            
            <div className="space-y-4 text-[14px] font-light">
              <div className="flex space-x-2">
                <span className="opacity-70 italic">e:</span>
                <a href="mailto:info@novo.sa" className="hover:text-[#c5934c] transition-colors">info@novo.sa</a>
              </div>
              <div className="flex space-x-2">
                <span className="opacity-70 italic">t:</span>
                <span>+966 11 2111 090</span>
              </div>
              <div className="flex space-x-2">
                <span className="opacity-70 italic">m:</span>
                <span>+966 575 77 8888</span>
              </div>
              
              <div className="pt-4">
                <a href="https://novo-sa.com" target="_blank" className="hover:text-[#c5934c] transition-colors">novo-sa.com</a>
              </div>

              <div className="pt-2 max-w-[200px] leading-relaxed opacity-80">
                4658 King Abdulaziz Road, Al Rabeeh, 7542, Riyadh 13315 Saudi Arabia
              </div>
            </div>
          </div>

          <div className="border-[1.5px] border-[#c5934c] p-1 w-12 h-12 flex flex-col justify-center items-center leading-none mt-20">
            <span className="text-[12px] font-bold tracking-tighter">no</span>
            <span className="text-[12px] font-bold tracking-tighter">vo</span>
          </div>
        </div>

        <div className="col-span-1 flex justify-center">
          <div className="w-[1px] h-full bg-[#c5934c] opacity-60"></div>
        </div>

        <div className="col-span-7 pt-10 pl-10">
          <h2 className="text-[52px] font-light leading-tight mb-4">Register your inteest</h2>
          <p className="text-[14px] text-gray-500 mb-16 font-light">
            Construction commencing during 2023 earthworks. season.
          </p>

          <form className="space-y-16">
            
            <div className="relative group">
              <input 
                type="text" 
                placeholder="e.g. Mohammed"
                className="w-full bg-transparent border-b border-[#c5934c]/50 py-2 focus:outline-none focus:border-[#c5934c] placeholder:text-gray-300 placeholder:italic transition-all"
              />
              <label className="absolute -bottom-6 left-0 text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-[#c5934c] transition-colors">
                Your Name
              </label>
            </div>

            <div className="relative group">
              <input 
                type="email" 
                placeholder="e.g. mohammed@gmail.com"
                className="w-full bg-transparent border-b border-[#c5934c]/50 py-2 focus:outline-none focus:border-[#c5934c] placeholder:text-gray-300 placeholder:italic transition-all"
              />
              <label className="absolute -bottom-6 left-0 text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-[#c5934c] transition-colors">
                Your E-Mail
              </label>
            </div>

            <div className="relative group pt-4">
              <textarea 
                rows="1"
                placeholder="e.g. Hello!"
                className="w-full bg-transparent border-b border-[#c5934c]/50 py-2 focus:outline-none focus:border-[#c5934c] placeholder:text-gray-300 placeholder:italic transition-all resize-none"
              ></textarea>
              <label className="absolute -bottom-6 left-0 text-[10px] uppercase tracking-widest text-gray-400 group-focus-within:text-[#c5934c] transition-colors">
                Your Messages
              </label>
            </div>

            <div className="pt-12">
              <button className="bg-[#445a67] text-white w-full py-5 rounded-full flex items-center justify-center space-x-3 group hover:bg-[#34495e] transition-all duration-300 shadow-xl shadow-[#445a67]/20">
                <span className="text-[15px] font-medium tracking-widest">Send Message</span>
                <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default NovoContactPage;