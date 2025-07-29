import React from "react";

function Standardized() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-8 text-center">
        <p className="text-gray-500 text-sm">
          Spoznajte AS LEGAL v štyroch jednoduchých krokoch, ktoré Vám nezaberú viac ako niekoľko minút.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-700 font-normal">
          <div className="flex flex-col items-center space-y-1">
            <span className="text-gray-800 font-semibold text-base">1/</span>
            <p>
              Zistite viac <a href="#" className="text-cyan-500 hover:underline">O SLUŽBE</a>,<br />
              ktorú ponúkame
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <span className="text-gray-800 font-semibold text-base">2/</span>
            <p>
              Prečítajte si <a href="#" className="text-cyan-500 hover:underline">O NÁS</a>,<br />
              čo Vás zaujíma
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <span className="text-gray-800 font-semibold text-base">3/</span>
            <p>
              Informujte sa <a href="#" className="text-cyan-500 hover:underline">O CENE</a>,<br />
              za právne služby
            </p>
          </div>

          <div className="flex flex-col items-center space-y-1">
            <span className="text-gray-800 font-semibold text-base">4/</span>
            <p>
              Vyberte si <a href="#" className="text-cyan-500 hover:underline">KONTAKT</a>,<br />
              ktorý Vám vyhovuje
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Standardized;
