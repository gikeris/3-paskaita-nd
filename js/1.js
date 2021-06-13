/* Suprogramuokite skriptą, kurioje parašius tam tikrą sekundžių kiekį, rodo 24 valandų, minučių, sekundžių formatu.
Papildomai:

*Sekundčių kiekis paimamas iš input HTML žymės laukelio.

*Išveskite konvertuotą sekunžių informacija į div.

*/
"use strict";

function func1() {
    var sec, h, min, sec0;
    var sec = Number(document.getElementById("sec").value);
    h = Math.floor(sec / 3600);
    min = Math.floor(sec % 3600 / 60);
    sec0 = sec % 3600 % 60;
     document.getElementById('ats1').innerHTML = h + ' h '+ min + " min " + sec0 + " sec ";

}