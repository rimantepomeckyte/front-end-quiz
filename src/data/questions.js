export const questions1 =[
    {
        id: 1,
        question: "Kuri HTML versija yra naudojama šiuo metu?",
        answers: [
            {text: 2, isCorrect: false},
            {text: 5, isCorrect: true},
            {text: 7, isCorrect: false},
            {text: 3, isCorrect: false},
            {text: 8.3, isCorrect: false}
        ]
    },
    {
        id: 2,
        question: "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
        answers: [
            {text: "<news>", isCorrect: false},
            {text: "<article>", isCorrect: true},
            {text: "<section>", isCorrect: false},
            {text: "<main>", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 3,
        question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
        answers: [
            {text: "inline", isCorrect: true},
            {text: "block", isCorrect: false},
            {text: "inline-block", isCorrect: false},
            {text: "table", isCorrect: false}
        ]
    },
    {
        id: 4,
        question: "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
        answers: [
            {text: "a[href >='.pdf']", isCorrect: false},
            {text: "a[href $='.pdf']", isCorrect: false},
            {text: "a[href only ='.pdf']", isCorrect: false},
            {text: "a[href='.pdf']", isCorrect: true},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 5,
        question: "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
        answers: [
            {text: ".columns-5-offset-1", isCorrect: false},
            {text: ".col-sm5-1", isCorrect: false},
            {text: ".col-sm-5 .col-offset-1", isCorrect: false},
            {text: ".col-sm-5 .col-sm-offset-1", isCorrect: true} // ar tikrai?
        ]
    },
    {
        id: 6,
        question: "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
        answers: [
            {text: "antraste.style.background-color = 'tomato';", isCorrect: false},
            {text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true},
            {text: "antraste.css.background-color= 'tomato';", isCorrect: false},
            {text: "Teisingo atsakymo nėra", isCorrect: false}
        ]
    },
    {
        id: 7,
        question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
        answers: [
            {text: "@include isorinis_failas", isCorrect: false},
            {text: "@add isorinis_failas", isCorrect: false},
            {text: "@import isorinis_failas", isCorrect: true},
            {text: "Nėra teisingo varianto", isCorrect: false}
        ]
    },
    {
        id: 8,
        question: "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
        answers: [
            {text: "extend a:hover", isCorrect: false},
            {text: "into a:hover", isCorrect: false},
            {text: "&:hover", isCorrect: true},
            {text: "@:hover", isCorrect: false}
        ]
    },
    {
        id: 9,
        question: "Kuris iš sąrašo nėra preprocesorius?",
        answers: [
            {text: "Ruby", isCorrect: true},
            {text: "SASS", isCorrect: false},
            {text: "LESS", isCorrect: false},
            {text: "Stylus", isCorrect: false},
            {text: "Nėra teisingo varianto", isCorrect: false}
        ]
    },
    {
        id: 10,
        question: "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
        answers: [
            {text: "$('header').diplayNone();", isCorrect: false},//nezinau
            {text: "$('header').hide();", isCorrect: true},
            {text: "$('header').hideIt();", isCorrect: false},
            {text: "Nėra teisingo atsakymo.", isCorrect: false}
        ]
    },
    {
        id: 11,
        question: "Kokią template sistemą naudoja Drupal 8?",
        answers: [
            {text: "HTML", isCorrect: false},
            {text: "Smarty", isCorrect: false},
            {text: "Twig", isCorrect: true},
            {text: "PHP", isCorrect: false},
            {text: "Nėra teisingo varianto", isCorrect: false}
        ]
    },
    {
        id: 12,
        question: "Kuo skiriasi kintamieji let nuo var ?",
        answers: [
            {text: "Nesiskiria", isCorrect: false},
            {text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose", isCorrect: true},
            {text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems", isCorrect: false},
            {text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 13,
        question: "Kam naudojamas 'use strict'?",
        answers: [
            {text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių", isCorrect: false},
            {text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami", isCorrect: false},
            {text: "Išjungia painias ir blogai apgalvotas funkcijas", isCorrect: false},
            {text: "Visi atsakymai tesisingi", isCorrect: true},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 14,
        question: "Kodėl CSS vadinami pakopiniais stiliais?",
        answers: [
            {text: "Kodas rašomas pakopomis", isCorrect: false},
            {text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui", isCorrect: true},
            {text: "Įjungus CSS pakopas, galima naudoti !important", isCorrect: false},
            {text: "Teisingo atsakymo nėra", isCorrect: false}
        ]
    },
    {
        id: 15,
        question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
        answers: [
            {text: "count", isCorrect: false},
            {text: "length", isCorrect: true},
            {text: "valueOf", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 16,
        question: "Kiek laiko duomenys saugomi local storage?",
        answers: [
            {text: "Iki perkraunant puslapį", isCorrect: false},
            {text: "Vieną parą", isCorrect: false},
            {text: "Vieną mėnesį", isCorrect: false},
            {text: "Metus laiko", isCorrect: false},
            {text: "Neturi galiojimo laiko", isCorrect: true}
        ]
    },
    {
        id: 17,
        question: "let kiekis = 12; \n" +
            "console.log(++kiekis); \n" +
            "Ką išves konsolėje?",
        answers: [
            {text: "undefined", isCorrect: false},
            {text: "12", isCorrect: false},
            {text: "13", isCorrect: true},
            {text: "Nieko", isCorrect: false}
        ]
    },
    {
        id: 18,
        question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
        answers: [
            {text: "shift()", isCorrect: false},
            {text: "pop()", isCorrect: false},
            {text: "splice()", isCorrect: false},
            {text: "split()", isCorrect: true}
        ]
    },
    {
        id: 19,
        question: "function sveikas(){ \n" +
            " let vardas=\"Jonas\" \n" +
            "console.log(vardas)\n" +
            "} \n" +
            "sveikas();\n"+
            "Ką atspausdins konsolėje?",
        answers: [
            {text: "Jonas", isCorrect: true},
            {text: "vardas", isCorrect: false},
            {text: "sveikas", isCorrect: false},
            {text: "undefined", isCorrect: false},
            {text: "nieko", isCorrect: false}
        ]
    },
    {
        id: 20,
        question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
        answers: [
            {text: "const sass spalva;", isCorrect: false},
            {text: "const spalva;", isCorrect: false},
            {text: "let spalva;", isCorrect: false},
            {text: "$spalva string", isCorrect: false},
            {text: "$spalva", isCorrect: true}
        ]
    },
    {
        id: 21,
        question: "HTML tai",
        answers: [
            {text: "Programavimo kalba tinklapio interaktyvumui kurti", isCorrect: false},
            {text: "Tinklapio apipavidalinimą aprašanti kalba", isCorrect: false},
            {text: "Tinklapio struktūrą aprašanti kalba", isCorrect: true}
        ]
    },
    {
        id: 22,
        question: "Kuris kodas teisingai aprašo HTML lentelės eilutę?",
        answers: [
            {text: "<tr><td>Vardas</td><td>Pavardė</td><td>Telefonas></td></tr>", isCorrect: true},
            {text: "<td><tr>Vardas</tr><tr>Pavardė</tr><tr>Telefonas></tr></td>", isCorrect: false},
            {text: "<row><cell>Vardas</cell><cell>Pavardė</cell><cell>Telefonas></cell></row>", isCorrect: false}
        ]
    },
    {
        id: 23,
        question: "Koks HTML elementas aprašo tinklapio bloką?",
        answers: [
            {text: "<span>", isCorrect: false},
            {text: "<p>", isCorrect: false},
            {text: "<h2>", isCorrect: false},
            {text: "<hr>", isCorrect: false},
            {text: "<div>", isCorrect: true},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 24,
        question: "Koks CSS matavimo vienetas naudojamas, kad HTML blokas prisitaikytų prie ekrano pločio?",
        answers: [
            {text: "px", isCorrect: false},
            {text: "em", isCorrect: false},
            {text: "%", isCorrect: true}
        ]
    },
    {
        id: 25,
        question: "Kaip priskirti nav bloke sąrašo būdu aprašytas nuorodas kintamajam,kurio pavadinimas nuorodos?",
        answers: [
            {text: "var nuorodos = document.querySelector('nav nuorodos');", isCorrect: false},
            {text: "var nuorodos = document.querySelector('nav li a');", isCorrect: true},
            {text: "var nuorodos = .getByElements('nav li a');", isCorrect: false},
            {text: "const nuorodos = querySelector('nav li a');", isCorrect: false},
            {text: "Teisingo atsakymo nėra", isCorrect: false}
        ]
    },
    {
        id: 26,
        question: "Kurie iš kintamųjų yra masyvai?",
        answers: [
            {text: "var pastraipos = document.querySelector('p');", isCorrect: false},
            {text: "var tekstai = document.getByElements('p');", isCorrect: false},
            {text: "var patarimai = document.querySelectorAll('p');", isCorrect: true},
            {text: "var pastraipos = document.intoArray('p);", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 27,
        question: "Kaip sukurti naują li elementą esančiame ul elemente, kuris turi klasę pageidavimai?",
        answers: [
            {text: "var list = document.querySelector('ul.pageidavimai'); var listItem = document.create('li'); list.appendChild(listItem);", isCorrect: false},
            {text: "var list = document.querySelector('ul .pageidavimai'); var listItem = document.createElement('li'); list.appendChild(listItem);", isCorrect: true},
            {text: "var list = document.querySelector('ul.pageidavimai'); var listItem = document.createElement('li'); list.append(listItem);", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 28,
        question: "Kas yra preprocesorius?",
        answers: [
            {text: "Naujas CSS dialektas", isCorrect: false},
            {text: "CSS 5 versija", isCorrect: false},
            {text: "Skriptų rašymo kalba, kuri išplečia CSS ir leidžia kompiliuoti kodą į standartinį HTML ir CSS kodą", isCorrect: false},
            {text: "Skriptų rašymo kalba, kuri išplečia CSS ir leidžia kompiliuoti kodą į standartinį CSS kodą", isCorrect: true}
        ]
    },
    {
        id: 29,
        question: "Pažymėkite, kuris iš pateiktų variantų nėra TVS",
        answers: [
            {text: "WordPress", isCorrect: false},
            {text: "Drupal", isCorrect: false},
            {text: "Bootstrap", isCorrect: true},
            {text: "ImpressPage", isCorrect: false}
        ]
    },
    {
        id: 30,
        question: "Kuris iš pavyzdžių yra arow funkciją",
        answers: [
            {text: "function (a, b){\n" +
                    " return a + b + 100;}\n", isCorrect: false},
            {text: "function (a, b) => {\n" +
                    " return a + b + 100;}\n", isCorrect: false},
            {text: "(a, b) => a + b + 100;", isCorrect: true},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 31,
        question: "let kiekis = 10;  \n" +
            "console.log(kiekis++); \n" +
            "Ką išves konsolėje?",
        answers: [
            {text: "10", isCorrect: true},
            {text: "11", isCorrect: false},
            {text: "undefined", isCorrect: false},
            {text: "Nieko", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 32,
        question: "Ką matysime konsolėje užrašius šį kodą: \n" +
            "let foto = ['Overlay', 'Overlay1', 'Overlay2', 'Overlay3'];\n" +
            "let naujas = foto;\n" +
            "console.log(naujas);",
        answers: [
            {text: "undefined", isCorrect: false},
            {text: "foto", isCorrect: false},
            {text: "['Overlay', 'Overlay1', 'Overlay2', 'Overlay3']", isCorrect: true},
            {text: "Nieko", isCorrect: false},
            {text: "Nėra teisingo atsakymo", isCorrect: false}
        ]
    },
    {
        id: 33,
        question: "Ką atspausdins konsolėje : \n" +
            "function labas(a) {    \n" +
            "return a;\n" +
            "} \n" +
            "console.log(labas(1))",
        answers: [
            {text: "undefined", isCorrect: false},
            {text: "labas(1)", isCorrect: false},
            {text: "1", isCorrect: true},
            {text: "a", isCorrect: false},
            {text: "Nieko", isCorrect: false}
        ]
    }
]