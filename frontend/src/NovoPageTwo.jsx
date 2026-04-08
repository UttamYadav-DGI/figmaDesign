import React from 'react';

const NovoPageTwo = () => {
  const stages = [
    {
      id: "01",
      title: "Design",
      image: "/design.jpg",
      description: [
        "The design stage begins by developing an understanding of our clients' needs and predispositions in an initial consultation with one of our designers. After this dialogue, we present the first draft of the design with a full explanation of our suggestions and their rationale.",
        "After client feedback, we rework our design to include any required modifications.",
        "After their approval we finalize the design and take full measurements."
      ]
    },
    {
      id: "02",
      title: "Pricing and Materials Approval",
      image: "/material.jpg",
      description: [
        "Once full measurements have been calculated and quantities estimated,",
        "We present a comprehensive cost analysis, giving clients a range of material options commensurate with their project and budget."
      ]
    },
    {
      id: "03",
      title: "Implementation",
      image: "/implementation.jpg",
      description: [
        "After approving the plans and with the clients approval of carefully chosen materials,",
        "We carry out the finishing and decoration work, monitoring the fit-out throughout its progress.",
        "After this, we provide our clients with peace of mind thanks to our aftersales service."
      ]
    }
  ];

  return (
    <div className="bg-[#445a67] text-white font-['Rajdhani'] min-h-screen">
      
      <section className="flex flex-col items-center pt-24 px-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] mb-12 text-gray-300">
          Innovative architectural designs
        </p>
        <h2 className="text-[72px] leading-[1.05] font-medium max-w-5xl mb-24">
          The place where you spend your time is a direct reflection of your culture
        </h2>

        <div className="relative w-full max-w-6xl px-8">

          <div className="absolute -inset-2 border-[10px] border-[#c5934c] z-0"></div>
          

          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-[12px] border-l-[12px] border-[#c5934c] z-20"></div>
          

          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-[#c5934c] z-20"></div>


          <div className="absolute -bottom-2 right-0 w-[40%] h-[15px] bg-[#c5934c] z-20"></div>


          <div className="relative z-10 overflow-hidden shadow-2xl border-[6px] border-[#445a67]">
            <img 
              src="/public/housebig.jpg" 
              alt="Architecture Culture" 
              className="w-full h-[550px] object-cover"
            />
          </div>
        </div>
      </section>


      <section className="px-16 mt-40">
        <div className="max-w-7xl mx-auto">
          <p className="text-[14px] text-gray-300 font-light mb-4">Our works goes through three stages</p>
          <div className="w-full h-[1px] bg-white opacity-20"></div>
        </div>
      </section>


      <section className="px-16 pb-32">
        <div className="max-w-7xl mx-auto divide-y divide-white/10">
          
          {stages.map((stage) => (
            <div key={stage.id} className="grid grid-cols-12 gap-12 py-24 items-start">
              

              <div className="col-span-3 flex flex-col justify-between h-full min-h-[320px]">
                <div>
                  <div className="mb-4">
                    <span className="text-[#c5934c] text-sm font-semibold tracking-widest">{stage.id}</span>
                    <div className="w-12 h-[2px] bg-[#c5934c] mt-1"></div>
                  </div>
                  <h3 className="text-[52px] leading-tight font-medium">
                    {stage.title}
                  </h3>
                </div>
                
                <button className="w-fit border border-[#c5934c]/60 px-8 py-2 rounded-full text-[12px] text-gray-300 hover:bg-[#c5934c] hover:text-white transition-all flex items-center group">
                  View Project <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>


              <div className="col-span-6">
                <div className="relative group">

                  <div className="absolute top-0 left-0 w-full h-4 bg-[#c5934c] z-10 transition-transform group-hover:scale-y-110"></div>
                  <img 
                    src={stage.image} 
                    alt={stage.title} 
                    className="w-full h-[320px] object-cover pt-4 shadow-xl"
                  />
                </div>
              </div>


              <div className="col-span-3 space-y-6 pt-4">
                {stage.description.map((p, idx) => (
                  <p key={idx} className="text-[13.5px] leading-relaxed text-gray-300 font-light">
                    {p}
                  </p>
                ))}
              </div>

            </div>
          ))}


          <div className="w-full h-[1px] bg-white opacity-10 mt-12"></div>
        </div>
      </section>

    </div>
  );
};

export default NovoPageTwo;