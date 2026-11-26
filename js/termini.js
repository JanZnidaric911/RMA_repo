// ==========================================================
// Naloga 2: kartice terminov Repair Café, ustvarjene iz polja objektov
// Nov termin dodaš tako, da v polje "termini" dodaš nov objekt –
// HTML-ja ni treba spreminjati.
// ==========================================================

const termini = [
    {
        naslov: "Repair Café – november",
        datum: "2026-11-27",
        kraj: "CPU Slovenske Konjice, Tattenbachova 5d",
        opis: "Prinesi pokvarjen gospodinjski aparat, oblačilo ali kolo in ga popravi skupaj s popravljalci.",
        prostaMesta: 0
    },
    {
        naslov: "Repair Café – januar",
        datum: "2027-01-29",
        kraj: "CPU Slovenske Konjice, Tattenbachova 5d",
        opis: "Prvo popravljanje v novem letu: namesto da izdelek zavržeš, mu podaljšaj življenje.",
        prostaMesta: 4
    },
    {
        naslov: "Repair Café – februar",
        datum: "2027-02-26",
        kraj: "CPU Slovenske Konjice, Tattenbachova 5d",
        opis: "Popravljalci ti pomagajo ugotoviti, kaj je narobe, popraviš pa sam.",
        prostaMesta: 8
    },
    {
        naslov: "Repair Café – marec",
        datum: "2027-03-26",
        kraj: "CPU Slovenske Konjice, Tattenbachova 5d",
        opis: "Spomladansko popravljanje: kolesa, športna oprema in manjši aparati.",
        prostaMesta: 10
    },
    {
        naslov: "Repair Café – april",
        datum: "2027-04-30",
        kraj: "CPU Slovenske Konjice, Tattenbachova 5d",
        opis: "Nauči se novih veščin in spoznaj ljudi, ki radi popravljajo.",
        prostaMesta: 12
    }
];

// "2027-01-29" -> "petek, 29. januar 2027"
function oblikujDatum(datum) {
    return new Date(datum).toLocaleDateString("sl-SI", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

// Iz enega objekta naredi eno kartico (element <article>).
function ustvariKartico(termin) {
    const kartica = document.createElement("article");
    kartica.className = "termin-kartica";

    const naslov = document.createElement("h3");
    naslov.textContent = termin.naslov;

    const datum = document.createElement("p");
    const cas = document.createElement("time");
    cas.dateTime = termin.datum;
    cas.textContent = oblikujDatum(termin.datum);
    datum.className = "termin-kartica__datum";
    datum.append(cas);

    const kraj = document.createElement("p");
    kraj.className = "termin-kartica__kraj";
    kraj.textContent = termin.kraj;

    const opis = document.createElement("p");
    opis.textContent = termin.opis;

    // Če ni prostih mest, napišemo "Zasedeno", sicer število mest.
    const mesta = document.createElement("p");
    if (termin.prostaMesta === 0) {
        mesta.textContent = "Zasedeno";
        mesta.className = "mesta mesta--zasedeno";
    } else {
        mesta.textContent = "Prosta mesta: " + termin.prostaMesta;
        mesta.className = "mesta mesta--prosto";
    }

    kartica.append(naslov, datum, kraj, opis, mesta);
    return kartica;
}

const vsebnikTerminov = document.getElementById("termini");

// Za vsak objekt v polju ustvarimo kartico in jo dodamo na stran.
termini.forEach(function (termin) {
    vsebnikTerminov.append(ustvariKartico(termin));
});
