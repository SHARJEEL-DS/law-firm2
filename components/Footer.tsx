import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Štandardizované služby */}
            <div className="space-y-4">
              <h3 className="text-lg font-normal mb-4">Štandardizované služby</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Založenie s.r.o., zmeny a zrušenie s.r.o.
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Prevod nehnuteľností a vklad na kataster
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Zrušenie a vysporiadanie BSM
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Pracovnoprávne zmluvy a dohody
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Žiadosť o podmienečné prepustenie
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Registrácia ochrannej známky / dizajnu
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-cyan-300 transition-colors">
                    Ústavná sťažnosť na prieťahy v konaní
                  </a>
                </div>
              </div>
            </div>

            {/* Odborné zameranie */}
            <div className="space-y-4">
              <h3 className="text-lg font-normal mb-4">Odborné zameranie</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Obchodné právo</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Občianske právo</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Rodinné právo</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Pracovné právo</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Trestné právo</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Právo duševného vlastníctva</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Ľudské práva a slobody</a></div>
              </div>
            </div>

            {/* Užitočné právne linky */}
            <div className="space-y-4">
              <h3 className="text-lg font-normal mb-4">Užitočné právne linky</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Slov-Lex - elektronická zbierka zákonov</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">EUR-Lex - prístup k právu Európskej únie</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Slovenská advokátska komora</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Ministerstvo spravodlivosti SR</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Ústavný súd Slovenskej republiky</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Najvyšší súd Slovenskej republiky</a></div>
                <div><a href="#" className="hover:text-cyan-300 transition-colors">Úrad priemyselného vlastníctva SR</a></div>
              </div>
            </div>

            {/* Ďalšie informácie */}
            <div className="space-y-4">
              <h3 className="text-lg font-normal mb-4">Ďalšie informácie</h3>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <p>FLA advokáti, s. r. o.</p>
                  <p>Vajnorská 1854/8A</p>
                  <p>831 04 Bratislava - m.č. Nové Mesto</p>
                  <p>IČO: 56 273 592</p>
                  <p>DIČ: 2122254882</p>
                  <p>
                    Bankové spojenie (Tatrabanka):<br />
                    IBAN: SK44 1100 0000 0029 4217 0344
                  </p>
                  <p>
                    <a href="#" className="hover:text-cyan-300 transition-colors">
                      Viac informácií o cookies
                    </a>
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-600">
                  <p>
                    E-mail:{" "}
                    <a href="mailto:kancelaria@aslegal.sk" className="text-cyan-300 hover:underline">
                      kancelaria@aslegal.sk
                    </a>
                  </p>
                  <p>Tel: 02 / 444 544 98</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
