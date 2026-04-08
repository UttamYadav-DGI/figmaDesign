import React from 'react';

const NovoPageThree = () => {
  return (
    <div className="bg-[#f4f4f4] text-[#445a67] font-['Rajdhani'] min-h-screen px-16 py-20">
      
      <section className="max-w-7xl mx-auto mb-40">

        <div className="w-full h-[1px] bg-[#c5934c] opacity-40 mb-20"></div>

        <div className="flex justify-between items-end px-10">
          <div className="flex flex-col items-start">
            <span className="text-[140px] font-extralight leading-none tracking-tighter">12+</span>
            <p className="text-[16px] mt-6 tracking-[0.2em] text-gray-600 uppercase font-medium">Branches</p>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-[140px] font-extralight leading-none tracking-tighter">10K+</span>
            <p className="text-[16px] mt-6 tracking-[0.2em] text-gray-600 uppercase font-medium">Successful Projects</p>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-[140px] font-extralight leading-none tracking-tighter">2M</span>
            <p className="text-[16px] mt-6 tracking-[0.2em] text-gray-600 uppercase font-medium">Satisfied Client</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#c5934c] opacity-40 mt-20"></div>
      </section>


      <section className="max-w-7xl mx-auto relative pb-60">
        
        <div className="text-center mb-32">
          <h2 className="text-[64px] leading-tight font-light text-[#445a67]">
            One step towards your <br /> dream home
          </h2>
          <p className="text-[20px] text-gray-600 font-light tracking-wide mt-4">
            Challenging ourselves in every project
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          
          <div className="col-span-4 space-y-16">

            <div className="relative w-[300px]">

              <div className="absolute top-0 left-0 w-full h-6 bg-[#c5934c] z-10"></div>
              <img 
                src="/stache.jpg" 
                alt="Classical Bust" 
                className="w-full h-[450px] object-cover mt-2 shadow-sm"
              />
            </div>

            <div className="max-w-[340px]">
              <p className="text-[14px] leading-relaxed text-gray-600 font-light">
                We are also committed to bioengineering in order to produce a healthier and more 
                sustainable environment in all our solutions, utilizing nature to create humane spaces 
                that stand out from the visual monotony of the urban landscape.
              </p>
            </div>
          </div>

          <div className="col-span-8 relative">
            
            <div className="absolute top-[-20px] right-[-20px] w-[500px] h-[400px] border-t-[14px] border-r-[14px] border-[#c5934c] z-0"></div>

            <div className="relative z-10 ml-auto w-[550px]">
              <img 
                src="/horseStachu.jpg" 
                alt="Horse Statues" 
                className="w-full h-[400px] object-cover shadow-lg"
              />
            </div>

            <div className="absolute bottom-[-180px] left-[-40px] z-20 w-[550px]">
              <img 
                src="/EntryGate.jpg" 
                alt="Modern Arch" 
                className="w-full h-[350px] object-cover shadow-2xl border-4 border-white"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default NovoPageThree;