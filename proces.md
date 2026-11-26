# Proces izdelave: spletna stran Centra ponovne uporabe (CPU)

## 1. Izbira dejavnosti

Izbral sem **Center ponovne uporabe (CPU d.o.o., so.p.)**, slovensko socialno podjetje s sedežem v Ormožu in centri v Ljubljani, Ormožu, Rogaški Slatini in Slovenskih Konjicah. Centri sprejemajo še uporabne izdelke, jih obnovijo in ponovno prodajo, v Slovenskih Konjicah pa vsak zadnji petek v mesecu poteka popravljalnica Repair Café.

Zakaj ta dejavnost:
- je resnična in lokalna, poleg tega ima jasen družbeni in okoljski namen;
- ima podatke, ki jih je smiselno prikazati v tabeli (naslovi, delovni čas in telefoni štirih centrov);
- uradna stran je obsežna in razdrobljena, zato koristi preprosta stran, ki bistvene informacije zbere na enem mestu.

## 2. Raziskovalno delo

### Viri
- Uradna stran: <https://www.cpu-reuse.com/>
- Kaj je CPU: <https://www.cpu-reuse.com/cpu/kaj-je-cpu>
- Strani posameznih centrov: `/cpu/centri-ponovne-uporabe/cpu-ljubljana`, `cpu-ormoz`, `cpu-rogaska-slatina`, `cpu-slovenske-konjice-zbirni-center-cero`
- Facebook: <https://www.facebook.com/CenterPonovneUporabe>

Podatke sem pregledal 2. 11. 2026.

### Pogovor z organizatorjem

<!-- TO IZPOLNI SAM po pogovoru (osebno, po telefonu ali e-pošti). -->

- **Datum in način pogovora:** …
- **Sogovornik (vloga):** … (npr. zaposleni v CPU Ljubljana)
- **Vprašanja in odgovori:**
  1. Komu je center najbolj namenjen? – …
  2. Ali so termini popravljalnice Repair Café še aktualni in ali je udeležba brezplačna? – …
  3. Ali je oddaja izdelkov brezplačna in česa ne sprejemate? – …
  4. Ali lahko na šolski strani objavim fotografije in kontaktne podatke? – …
- **Kaj sem izvedel novega oziroma popravil na strani:** …

### Preverjanje podatkov

| Podatek | Vir | Preverjeno pri organizatorju |
|---|---|---|
| Naslovi centrov | uradna stran, strani centrov | ☐ |
| Delovni čas | strani centrov | ☐ |
| Telefonske številke | strani centrov, stran Kontakt | ☐ |
| Repair Café (zadnji petek v mesecu) | stran CPU Slovenske Konjice | ☐ |

## 3. Fotografije

| Datoteka | Kje je uporabljena | Avtor oziroma dovoljenje |
|---|---|---|
| `slike/cpu-trgovina.jpg` | `index.html` | Brensle, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Loppesupermarked_Kirppis.jpg), licenca CC BY-SA 4.0 (dovoljena uporaba z navedbo avtorja) |
| `slike/cpu-popravljalnica.jpg` | `dejavnost.html` | RaMa2016, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Repair_Caf%C3%A9_Trier_Reparatur.jpg), licenca CC BY-SA 4.0 (dovoljena uporaba z navedbo avtorja) |
| `slike/locilo.svg` | glava vseh strani | izdelal sam (dekorativna grafika) |

Fotografiji nista posneti v Centru ponovne uporabe, ampak prikazujeta podobno trgovino z rabljenimi izdelki in srečanje Repair Café v Trierju. Zato to piše tudi v napisih pod slikama, kjer sta navedena avtor in licenca.

## 4. Zgradba strani

| Datoteka | Vsebina | Ključni elementi |
|---|---|---|
| `index.html` | predstavitev, komu je namenjeno, zakaj ponovna uporaba | `header`, `nav`, `main`, `section`, `figure`/`figcaption`, `ul`, `abbr` |
| `dejavnost.html` | pot izdelka, kaj sprejemajo, Repair Café, socialno podjetje, viri | `ol`, `ul`, `figure`, `blockquote cite`, zunanje povezave, `lang="en"` |
| `informacije.html` | tabela centrov, termini, oddaja, nakup | `table` s `caption`, `thead`, `tbody`, `th scope="col"`/`scope="row"`, povezave `tel:` |
| `kontakt.html` | kontaktni podatki in obrazec | `address`, `form`, `fieldset`/`legend`, `label for`, `input` (`text`, `email`, `tel`, `radio`, `checkbox`), `select`, `textarea` |

## 5. Pomembne odločitve

- **Brez CSS-ja in JavaScripta:** vso strukturo nosi HTML, zato je stran berljiva tudi brez oblikovanja.
- **Navigacija:** na vseh straneh je enak `nav` s seznamom povezav; trenutna stran je označena z `aria-current="page"`.
- **Hierarhija naslovov:** vsaka stran ima natanko en `h1`, sklopi pa so `h2` znotraj `section`. Na podstraneh je ime organizacije v glavi zapisano kot povezava v odstavku, ne kot `h1`, da `h1` ostane naslov posamezne strani.
- **Slike:** vsebinske fotografije imajo opisni `alt` in so v elementu `figure` s `figcaption`. Dekorativno ločilo ima prazen `alt=""`, zato ga bralniki zaslona preskočijo. Vse slike imajo podana `width` in `height`, da se postavitev ob nalaganju ne premika.
- **Tabela:** glava stolpcev je v `thead` s `scope="col"`, ime centra v vsaki vrstici je `th scope="row"`, tabela ima `caption`.
- **Obrazec:**
  - vsa polja imajo `label` s `for`, ki se ujema z `id` polja;
  - polja so združena v tri `fieldset` z `legend` (podatki, razlog, sporočilo);
  - za validacijo skrbijo `required`, `type="email"`, `minlength`/`maxlength`, `pattern` s `title` za telefon in `autocomplete`;
  - radijski gumbi imajo skupen `name="razlog"`, zato je izbran lahko samo eden, `required` na prvem pa velja za celo skupino;
  - `method="post"`, ker podatki ne smejo biti vidni v URL-ju; `action` bi v pravi rešitvi kazal na strežniški skript.
- **Meta-podatki:** vsaka stran ima `charset`, `viewport`, `description`, `author` in svoj `title`; `lang="sl"` je nastavljen na elementu `html`.

## 6. Prikaz delovanja

<!-- Sem dodaj posnetke zaslona vseh štirih strani ali opis kratkega videoposnetka. -->

---

# Vaja 3: oblikovanje s CSS

## 1. Kratka analiza

Stran iz vaje 2 je bila vsebinsko popolna, a brez oblikovanja: dolga, enolična in na telefonu težko pregledna. Obiskovalec mora hitro najti **najbližji center in njegov delovni čas**, zato sta poziv k dejanju na naslovnici in berljiva tabela najpomembnejša. HTML-vsebina je ostala enaka; dodal sem samo razrede, ovojne elemente za postavitev, povezavo za preskok navigacije in povezave na datoteke CSS.

## 2. Oblikovalski načrt

### Barvna paleta

| Vloga | Barva | Spremenljivka | Uporaba |
|---|---|---|---|
| primarna | `#2f6b3a` (zelena) | `--barva-primarna` | glava, glave tabele, naslovi, povezave – zelena pomeni reciklažo in naravo |
| primarna temna | `#1f4a28` | `--barva-primarna-temna` | naslovi, noga |
| sekundarna | `#e9a23b` (topla oranžna) | `--barva-sekundarna` | gumb za poziv k dejanju, trenutna stran v meniju, poudarki |
| nevtralna temna | `#1f2421` | `--barva-besedilo` | besedilo |
| nevtralna svetla | `#f7f6f1` | `--barva-ozadje` | ozadje strani |
| fokus | `#1a5fb4` (modra) | `--barva-fokus` | obroba pri fokusu – drugačna od ostalih barv, da je takoj opazna |

Bela na zeleni `#2f6b3a` in temno besedilo na oranžni `#e9a23b` imata zadosten kontrast za berljivost.

### Tipografija

- Besedilo: sistemska brezserifna pisava (`Segoe UI`, `Roboto`, `Arial`), 16 px, razmik vrstic 1.6.
- Naslovi: serifna pisava `Georgia`, ki naslove jasno loči od besedila.
- Velikosti: `h1` 2rem (na tablici in več 2.5rem), `h2` 1.5rem (1.75rem).

### Sistem razmikov

Šest korakov, vsak približno dvakrat večji od prejšnjega: `--razmik-1` (0.25rem) do `--razmik-6` (4rem). Vsi odmiki in notranji robovi uporabljajo te spremenljivke, zato je stran enakomerna.

### Vizualna hierarhija

1. Zelena glava z menijem (enaka na vseh straneh).
2. Velik naslov strani `h1`, pod njim sivkast uvodni odstavek.
3. Sklopi (`h2`) z dovolj prostora vmes; kartice z belim ozadjem in senco ločijo vsebine.
4. Oranžna barva samo za najpomembnejše: poziv k dejanju, trenutno stran, opozorila.

## 3. Datoteke CSS

| Datoteka | Vsebina |
|---|---|
| `css/style.css` | spremenljivke, `box-sizing`, tipografija, `.vsebnik` (širina vsebine), glava, navigacija, noga, gumbi, kartice, poudarek |
| `css/index.css` | uvodno območje (junak), predstavitev s sliko, mreža kartic |
| `css/dejavnost.css` | oštevilčeni koraki, seznam s kljukicami, slika + besedilo, citat |
| `css/informacije.css` | drsni vsebnik in tabela, izstopajoč termin, dva stolpca |
| `css/kontakt.css` | polja, oznake, radijski gumbi, gumbi, fokus |

## 4. Postavitev in odzivnost

- **Mobile-first:** osnovna pravila veljajo za telefon, `@media (min-width: 48em)` (~768 px) in `@media (min-width: 64em)` (~1024 px) dodata stolpce.
- **Flexbox:** navigacija (`.navigacija ul`), glava (logotip + meni), gumbi na naslovnici in v obrazcu, posamezno polje obrazca (oznaka nad vnosom), termin Repair Café.
- **CSS Grid:** kartice na naslovnici (1 → 2 → 3 stolpci), koraki na strani Dejavnost (1 → 2 → 3), slika + besedilo, oddaja/nakup, kontaktni podatki + obrazec.
- **Navigacija brez JavaScripta:** na telefonu se štiri povezave prelomijo v mrežo 2 × 2 velikih gumbov, zato ni potreben »hamburger« meni.
- **Tabela:** je v vsebniku z `overflow-x: auto`, zato na ozkem zaslonu drsi samo tabela; napis tabele je `position: sticky`, da ostane viden.
- **Slike:** `max-width: 100%; height: auto;`, zato se prilagodijo širini.

Preverjeno pri širinah 375, 768 in 1440 px: nobena stran se ne pomika vodoravno, vse slike se naložijo.

## 5. Dostopnost

- Povezava »Preskoči na vsebino« (vidna ob pritisku tipke Tab).
- Jasno stanje fokusa (`:focus-visible`, modra obroba 3 px) na povezavah, poljih in gumbih.
- Napačen vnos v obrazcu se obarva rdeče šele, ko ga uporabnik vnese (`:user-invalid`), ne že ob nalaganju strani.
- Trenutna stran je v meniju označena z `aria-current="page"` in oranžno barvo.
- Drsni vsebnik tabele ima `tabindex="0"` in `role="region"`, zato ga lahko premikaš s tipkovnico.
- Obrazec ostane brez strežniške obdelave; uspešno pošiljanje se ne simulira.

---

# Vaja 4: JavaScript

Vsa koda JavaScript je v ločenih datotekah v mapi `js/`. Vsaka stran naloži samo svojo datoteko z `<script src="..." defer>`; `defer` pomeni, da se skripta zažene šele, ko je HTML že naložen, zato elementi z `id` že obstajajo.

## Naloga 1: pozdrav z uro (`index.html`, `js/pozdrav.js`)

- V uvodnem območju je element `<p id="pozdrav">`. Brez JavaScripta piše »Pozdravljeni«.
- Funkcija `izberiPozdrav(ura)` vrne »Dobro jutro« (pred 12. uro), »Dober dan« (od 12. do 18. ure) ali »Dober večer« (od 18. ure naprej).
- Funkcija `posodobiPozdrav()` prebere trenutni čas z `new Date()`, ga oblikuje kot `hh:mm:ss` (z `padStart` doda ničlo spredaj) in ga zapiše v element s `textContent`.
- `setInterval(posodobiPozdrav, 1000)` funkcijo pokliče vsako sekundo; prvič jo pokličemo takoj, da besedilo ni eno sekundo prazno.

## Naloga 2: kartice iz polja objektov (`dejavnost.html`, `js/termini.js`)

- Polje `termini` vsebuje pet objektov (termini popravljalnice Repair Café), vsak ima lastnosti `naslov`, `datum`, `kraj`, `opis` in `prostaMesta`.
- Funkcija `ustvariKartico(termin)` z `document.createElement` sestavi element `<article>` z naslovom, datumom (`<time datetime="...">`), krajem, opisom in oznako mest.
- Če je `prostaMesta === 0`, kartica pokaže »Zasedeno« (rdeča oznaka), sicer »Prosta mesta: X« (zelena oznaka).
- `termini.forEach(...)` za vsak objekt ustvari kartico in jo doda v `<div id="termini">`. Nov termin se na strani pojavi, ko v polje dodaš nov objekt; HTML-ja ni treba spreminjati.
- Datumi so resnični zadnji petki v mesecu (25. 12. 2026 je izpuščen, ker je božič). **Število prostih mest je izmišljeno za prikaz delovanja**, zato na strani piše, da je podatek informativen in naj obiskovalec center pokliče.

## Naloga 3: kalkulator prihranka (`informacije.html`, `js/kalkulator.js`)

- Tema: koliko prihraniš, če izdelek kupiš rabljen v CPU namesto novega.
- Parametra: cena novega izdelka in cena rabljenega izdelka (polji `type="number"` z `min`, `step` in `required`).
- Rezultat: prihranek v evrih in v odstotkih: `prihranek = cenaNov - cenaRabljen`, `odstotek = prihranek / cenaNov * 100` (zaokroženo).
- Ob oddaji obrazca `preventDefault()` prepreči osvežitev strani, rezultat pa se izpiše v element `<output aria-live="polite">`, ki ga prebere tudi bralnik zaslona.
- Posebni primeri: če je cena novega izdelka 0 ali če je rabljen izdelek dražji od novega, se izpiše opozorilo namesto rezultata. Gumb »Počisti« pobriše tudi rezultat.

## Preverjanje

V brskalniku sem preveril:
- da se ura posodablja vsako sekundo in da je pozdrav za ure 0, 11, 12, 17, 18 in 23 pravilen;
- da se prikaže pet kartic, prva z napisom »Zasedeno«;
- da kalkulator za 120 € in 35 € izpiše »Prihraniš 85,00 € (71 % cene novega izdelka).«;
- da v konzoli ni napak in da se strani na širini 375 px ne pomikajo vodoravno.
