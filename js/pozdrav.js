// ==========================================================
// Naloga 1: pozdrav glede na uro in ura, ki se posodobi vsako sekundo
// ==========================================================

const pozdravElement = document.getElementById("pozdrav");

// Vrne pozdrav glede na uro (0–23).
function izberiPozdrav(ura) {
    if (ura < 12) {
        return "Dobro jutro";
    } else if (ura < 18) {
        return "Dober dan";
    } else {
        return "Dober večer";
    }
}

// Število dopolni z ničlo spredaj: 7 -> "07".
function dveMesti(stevilo) {
    return String(stevilo).padStart(2, "0");
}

function posodobiPozdrav() {
    const zdaj = new Date();
    const ura = zdaj.getHours();
    const cas = dveMesti(ura) + ":" + dveMesti(zdaj.getMinutes()) + ":" + dveMesti(zdaj.getSeconds());

    pozdravElement.textContent = izberiPozdrav(ura) + " - " + cas;
}

posodobiPozdrav();                    // takoj ob nalaganju, da ni prazno eno sekundo
setInterval(posodobiPozdrav, 1000);   // nato vsakih 1000 ms (1 sekundo)
