// ==========================================================
// Naloga 3: kalkulator prihranka pri nakupu rabljenega izdelka
// Vhod: cena novega izdelka in cena rabljenega izdelka v CPU
// Izhod: prihranek v evrih in v odstotkih
// ==========================================================

const obrazecKalkulatorja = document.getElementById("kalkulator");
const vnosNov = document.getElementById("cena-nov");
const vnosRabljen = document.getElementById("cena-rabljen");
const izpis = document.getElementById("rezultat");

// 12.5 -> "12,50 €"
function vEvre(znesek) {
    return znesek.toLocaleString("sl-SI", { style: "currency", currency: "EUR" });
}

obrazecKalkulatorja.addEventListener("submit", function (dogodek) {
    dogodek.preventDefault();   // stran se ne osveži, rezultat izpišemo kar tu

    const cenaNov = Number(vnosNov.value);
    const cenaRabljen = Number(vnosRabljen.value);

    if (cenaNov <= 0) {
        izpis.textContent = "Cena novega izdelka mora biti večja od 0 €.";
        izpis.className = "rezultat rezultat--napaka";
        return;
    }

    if (cenaRabljen > cenaNov) {
        izpis.textContent = "Rabljen izdelek je dražji od novega, zato pri tem nakupu ne prihraniš.";
        izpis.className = "rezultat rezultat--napaka";
        return;
    }

    const prihranek = cenaNov - cenaRabljen;
    const odstotek = Math.round((prihranek / cenaNov) * 100);

    izpis.textContent = "Prihraniš " + vEvre(prihranek) + " (" + odstotek + " % cene novega izdelka).";
    izpis.className = "rezultat rezultat--uspeh";
});

// Ob kliku na "Počisti" pobrišemo tudi rezultat.
obrazecKalkulatorja.addEventListener("reset", function () {
    izpis.textContent = "";
    izpis.className = "rezultat";
});
