import React from 'react'

function Services() {
  return (
    <div>
       <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Dobré zmluvy */}
            <div className="space-y-6">
              <div className="border-b-2 border-gray-300 pb-2">
                <h2 className="text-xl md:text-2xl font-light text-gray-800">Dobré zmluvy</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Zmluvy pre Vás navrhujeme, upravujeme i kontrolujeme. Upozorňujeme na dôležité body zmluvných vzťahov
                  a vyhodnocujeme ich relevantné súvislosti. Radíme Vám pri rokovaniach s obchodnými partnermi a v
                  prípade potreby vyjednávame vo Vašom mene.
                </p>
                <p>
                  Vo svete záväzkov spravidla platí, že dobré zmluvy robia dobrých priateľov.{" "}
                  <span className="text-cyan-500 cursor-pointer hover:underline">Viac...</span>
                </p>
              </div>
            </div>

            {/* Férový proces */}
            <div className="space-y-6">
              <div className="border-b-2 border-gray-300 pb-2">
                <h2 className="text-xl md:text-2xl font-light text-gray-800">Férový proces</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Dohliadame na to, aby Vaše konanie pred súdom alebo správnym orgánom prebiehalo v súlade so zákonom a
                  právom na spravodlivý proces. Pripravujeme kvalifikované podania, vyhotovujeme stratégiu pre vedenie
                  sporu a zastupujeme Vaše záujmy na pojednávaniach.
                </p>
                <p>
                  Súčasný stav právneho prostredia klade na účastníkov konania vysoké nároky.{" "}
                  <span className="text-cyan-500 cursor-pointer hover:underline">Viac...</span>
                </p>
              </div>
            </div>

            {/* Odborná ochrana */}
            <div className="space-y-6">
              <div className="border-b-2 border-gray-300 pb-2">
                <h2 className="text-xl md:text-2xl font-light text-gray-800">Odborná ochrana</h2>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Poskytujeme právne poradenstvo, ktoré Vám pomáha vyriešiť svoje práva, poznať povinnosti a vyjasniť si
                  sporné otázky. Predkladáme Vám zrozumiteľné právne analýzy, vykonávame právne audity (due diligence) a
                  organizujeme školenia na mieru podľa Vašej potreby.
                </p>
                <p>
                  Cieľom našej odbornej ochrany je pôsobiť predovšetkým preventívne.{" "}
                  <span className="text-cyan-500 cursor-pointer hover:underline">Viac...</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
