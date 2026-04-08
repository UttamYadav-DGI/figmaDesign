import React from 'react';

const NovoPageFour = () => {
  const sections = [
    {
      title: "Our Vision",
      text: "To be the first choice for quality in implementation and innovation of ideas in all interior and exterior decorations and finishes.",
      active: true
    },
    {
      title: "Our Mission",
      text: "To achieve uniqueness in all that we do, adding elements of nature in order to humanize the spaces we create, balancing form, function and aesthetics.",
      active: false
    },
    {
      title: "Our Work",
      text: "All Novo work is undertaken under one brand in order to ensure quality in materials and implementation. We pride ourselves in offering inimitable ideas and solutions which create harmony and coherence between each stage of the project. We employ familiar materials but use them innovatively.",
      active: false
    }
  ];

  return (
    <div className="bg-[#445a67] text-white font-['Rajdhani'] min-h-screen px-16 py-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-12 gap-16 items-start mb-32">
          
\          <div className="col-span-5 pt-4">
            <h2 className="text-[54px] font-light mb-8 leading-tight">Introduction</h2>
            <p className="text-[14px] leading-relaxed text-gray-300 max-w-sm mb-16 font-light">
              We are living in a time of rapid urban growth with increasingly busy and fast lifestyles characterized by movement and commotion — so much so that the need to humanize architecture has never been more important.
            </p>

            <div className="space-y-12">
              {sections.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex justify-between items-center mb-4">
                    <div className="relative">
                      <h3 className="text-[22px] font-medium tracking-wide">{item.title}</h3>
                        <div className="absolute -bottom-2 left-0 w-12 h-[2px] bg-[#C28C42] opacity-160"></div>                    </div>
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#445a67] transition-all">
                      <span className="text-[10px]">↗</span>
                    </div>
                  </div>
                  <p className="text-[13px] leading-relaxed text-[#ECEEEF] font-light max-w-md">
                    {item.text}
                  </p>
                  <div className="w-full h-[1px] bg-white opacity-20 mt-10"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-7">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-5 bg-[#c5934c] z-10"></div>
              <img 
                src="/shadow.jpg" 
                alt="Architectural Interior" 
                className="w-full h-[750px] object-cover pt-5 shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/45 pt-8 mt-20">
          <div className="flex justify-between text-[16px] uppercase tracking-[0.3em] text-[#ECEEEF] mb-16">
            <span>Our Success</span>
            <span>01/03</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-center pb-20">
            <div className="col-span-9">
              <p className="text-[44px] leading-[1.2] font-medium tracking-tight text-white/95">
                We are living in a time of rapid urban growth with increasingly busy and fast lifestyles characterized by movement and commotion — so much so that the need to humanize architecture has never been more important. This means reconsidering the form and functions of our buildings and the materials we use, a prevalent trend in our industry which, more and more, seeks to provide an environment that understands people’s needs and shield them from the noise and bustle of the city streets. This encapsulates the Novo Design & Build approach. It begins with our name, one which promises authentic human feelings, taking us back to a time of serenity and spaciousness and looking ahead to ‘smart’, modern solutions.
              </p>
            </div>

            <div className="col-span-3 flex justify-center">
              <div className="w-48 h-48 rounded-full border border-[#c5934c]/40 flex items-center justify-center group cursor-pointer hover:border-[#c5934c] transition-all duration-500">
                <div className="w-44 h-44 rounded-full border border-transparent group-hover:border-[#c5934c]/20 flex items-center justify-center transition-all">
                   <span className="text-[24px] tracking-widest font-light">Next</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-white opacity-20"></div>
        </div>

      </div>
    </div>
  );
};

export default NovoPageFour;