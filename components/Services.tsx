import React from 'react'

function Services() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Otvorený prístup */}
            <div className="space-y-6 border-t border-gray-300 pt-6">
              <div className="pb-4">
                <h2 className="text-xl md:text-2xl font-normal text-gray-800 pb-2  border-gray-600 ">
                  Otvorený prístup
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  AS LEGAL patrí medzi malé až stredne veľké advokátske kancelárie, dlhodobo pôsobiace na slovenskom a
                  českom trhu. Základom nášho úspechu je otvorený prístup, ktorý sa prejavuje vo všetkom, čo robíme -
                  rýchlo sa prispôsobíme konkrétnym požiadavkám klienta, prijímame spätnú väzbu a inovujeme za účelom
                  poskytnutia ešte lepšej služby.
                </p>
                <p>
                  Právny názor Vám prezentujeme otvorene a zrozumiteľne, máme transparentný systém odmeňovania a
                  usilujeme sa jednoduchšie Vám prístup k spravodlivosti po každej stránke.
                </p>
              </div>
            </div>

            {/* Profesionálna služba */}
            <div className="space-y-6 border-t border-gray-300 pt-6">
              <div className="pb-4">
                <h2 className="text-xl md:text-2xl font-normal text-gray-800 pb-2  border-gray-300 ">
                  Profesionálna služba
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Advokátska kancelária AS LEGAL sa sústreďí najmä na služby pre obchodné a správne právo súdnych konaní
                  je potom súčasťou práce našej zmluvnej a poradenskej agendy. Cieľom je predchádzať všetkým možným
                  konfliktom. O Vaše práva sa starajú vždy aspoň dvaja členovia tímu, čím sa zabezpečuje väčšia
                  stabilita služieb a širší pohľad na daný prípad.
                </p>
                <p>
                  Je zrejmé, že nemôžeme byť expertmi na všetky otázky. K profesionalite preto patrí schopnosť
                  spolupráce s odborníkmi z iných odvetví a ak to nestačí, odporučanie iného advokáta.
                </p>
              </div>
            </div>

            {/* Spokojnosť klienta */}
            <div className="space-y-6 border-t border-gray-300 pt-6">
              <div className="pb-4">
                <h2 className="text-xl md:text-2xl font-normal text-gray-800 pb-2  border-gray-300 ">
                  Spokojnosť klienta
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>
                  Spokojnosť klienta je u nás na prvom mieste. Pre členov tímu to znamená nielen objaviť práva a záujmy
                  klientov za použitia všetkých dostupných prostriedkov, ale aj záväzok neustále zvyšovať úroveň
                  odbornej kvalifikácie, pristupovať ku každému prípadu osobitne a priniesť očakávaný výsledok - všetko
                  v rámci platných pravidiel práva a advokátskej etiky.
                </p>
                <p>
                  Pri návšteve našej kancelárie sa stretnete s priateľskou a neformálnou atmosférou, v ktorej Vám naši
                  právnici radi a ochotne poradia s predloženým problémom.
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
