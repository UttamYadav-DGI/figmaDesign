import React from 'react';

const NovoPageThree = () => {
  return (
    <div className="bg-[#f4f4f4] text-[#445a67] font-['Rajdhani'] min-h-screen px-20 py-16 selection:bg-[#c5934c] selection:text-white">
      
      <section className="max-w-[1400px] mx-auto mb-52">
        <div className="w-full h-[1px] bg-[#c5934c] opacity-30 mb-16"></div>

        <div className="grid grid-cols-3 text-center items-end">

          <div className="flex flex-col items-center">
            <span className="text-[160px] font-extralight leading-none tracking-tighter opacity-100">12+</span>
            <p className="text-[14px] mt-4 tracking-[0.4em] text-gray-700 uppercase font-medium">Branches</p>
          </div>


          <div className="flex flex-col items-center">
            <span className="text-[160px] font-extralight leading-none tracking-tighter opacity-100">10K+</span>
            <p className="text-[14px] mt-4 tracking-[0.4em] text-gray-500 uppercase font-medium">Successful Projects</p>
          </div>


          <div className="flex flex-col items-center">
            <span className="text-[160px] font-extralight leading-none tracking-tighter opacity-100">2M</span>
            <p className="text-[14px] mt-4 tracking-[0.4em] text-gray-500 uppercase font-medium">Satisfied Client</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#c5934c] opacity-30 mt-16"></div>
      </section>


      <section className="max-w-[1200px] mx-auto relative pb-80">
        
        <div className="text-center mb-36">
          <h2 className="text-[72px] leading-[1.1] font-light text-[#445a67] tracking-tight">
            One step towards your <br /> dream home
          </h2>
          <p className="text-[20px] text-gray-500 font-light tracking-wide mt-6">
            Challenging ourselves in every project
          </p>
        </div>

        <div className="grid grid-cols-12 gap-0 items-start">
          
          <div className="col-span-4 z-10">

            <div className="relative w-[320px] mb-16">

              <div className="absolute top-0 left-0 w-full h-8 bg-[#c5934c] z-20"></div>
              <img 
                src="/stache.jpg" 
                alt="Classical Bust" 
                className="w-full h-[480px] object-cover pt-8 relative z-10"
              />
            </div>

            <div className="max-w-[280px] ml-2">
              <p className="text-[15px] leading-relaxed text-gray-500 font-light">
                We are also committed to bioengineering in order to produce a healthier and more 
                sustainable environment in all our solutions, utilizing nature to create humane spaces 
                that stand out from the visual monotony of the urban landscape.
              </p>
            </div>
          </div>

          <div className="col-span-8 relative pt-20">
            
            <div className="absolute top-0 right-[-30px] w-[580px] h-[450px] border-t-[16px] border-r-[16px] border-[#c5934c] z-0"></div>

            <div className="relative z-10 flex justify-end">
              <img 
                src="/horseStachu.jpg" 
                alt="Horse Statues" 
                className="w-[620px] h-[420px] object-cover shadow-xl"
              />
            </div>

            <div className="absolute -bottom-64 left-[-100px] z-30 w-[600px]">
              <img 
                src="/EntryGate.jpg" 
                alt="Modern Arch" 
                className="w-full h-[380px] object-cover shadow-2xl border-white border-[1px]"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default NovoPageThree;