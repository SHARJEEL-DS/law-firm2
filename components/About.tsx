import React from "react";

const people = [
  {
    name: "JUDr. Milan Šulva",
    title: "Skúsenosť je silný argument",
    description:
      "Cieľom AS LEGAL je dodať poctivú službu s kvalitným výsledkom. Do kancelárie sme preto spolu s JUDr. Ivetou Abelovskou vložili viac ako 25-ročnú skúsenosť, doplnenú o stabilný tím špičkových právnikov s vysokou odbornosťou a nasadením v prospech klienta.",
    contact: {
      address: "Hlučinská 1/11, 831 03 Bratislava, SR",
      email: "milan.sulva@aslegal.sk",
    },
  },
  {
    name: "JUDr. Iveta Abelovská",
    title: "Rozhodnutia s nadhľadom",
    description:
      "Ako bývalá sudkyňa si uvedomujem aktuálnu situáciu v súdnictve. V našej kancelárii preto kladieme dôraz na to, aby sa veci riešili tak, ako to je efektívne. Správne rozhodnutie o vhodnom postupe je totiž prvým a základným predpokladom budúceho úspechu.",
    contact: {
      address: "Hlučinská 1/11, 831 03 Bratislava, SR",
      email: "iveta.abelovska@aslegal.sk",
    },
  },
  {
    name: "JUDr. Milan Šulva",
    title: "Skúsenosť je silný argument",
    description:
      "Cieľom AS LEGAL je dodať poctivú službu s kvalitným výsledkom. Do kancelárie sme preto spolu s JUDr. Ivetou Abelovskou vložili viac ako 25-ročnú skúsenosť, doplnenú o stabilný tím špičkových právnikov s vysokou odbornosťou a nasadením v prospech klienta.",
    contact: {
      address: "Hlučinská 1/11, 831 03 Bratislava, SR",
      email: "milan.sulva@aslegal.sk",
    },
  },
  {
    name: "JUDr. Iveta Abelovská",
    title: "Rozhodnutia s nadhľadom",
    description:
      "Ako bývalá sudkyňa si uvedomujem aktuálnu situáciu v súdnictve. V našej kancelárii preto kladieme dôraz na to, aby sa veci riešili tak, ako to je efektívne. Správne rozhodnutie o vhodnom postupe je totiž prvým a základným predpokladom budúceho úspechu.",
    contact: {
      address: "Hlučinská 1/11, 831 03 Bratislava, SR",
      email: "iveta.abelovska@aslegal.sk",
    },
  },
];

function About() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-1" /> {/* Left empty space */}
        <div className="col-span-12 md:col-span-11 space-y-12">
          {people.map((person, index) => (
            <div
              key={index}
              className="border-t border-b py-8 md:grid md:grid-cols-12 md:gap-6"
            >
              <div className="md:col-span-8 md:col-start-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {person.name}
                </h3>
                <h4 className="text-cyan-600 font-medium mt-1">
                  {person.title}
                </h4>
                <p className="text-sm text-gray-700 mt-4">{person.description}</p>

                <div className="text-sm text-gray-600 space-y-1 mt-6">
                  <p>{person.name}, advokát/ka</p>
                  <p>AS Legal s.r.o., advokátska kancelária</p>
                  <p>{person.contact.address}</p>
                  <p className="text-gray-700">
                    <strong>e-mail:</strong>{" "}
                    <a
                      href={`mailto:${person.contact.email}`}
                      className="text-cyan-600 hover:underline"
                    >
                      {person.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
