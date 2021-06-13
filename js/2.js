/* 2.Suraskite triženklio skaičiaus visų skaitmenų:

*Sumą

*Vidurkį

*Sandaugą.

Prieš tai atpažinti, ar tai yra triženklis skaičius, jei skaičius dviženklis ar n-ženklis, veiksmų nevykdyti

Papildomai:

*Skaičius paimamas iš input HTML žymės laukelio.

*Išveskite informacija į div.
*/
"use strict";

function func2() {
    var sum, avg, sk, multip, nr1, nr2, nr3;
    sk= Number(document.getElementById("trio").value);
    if (sk > 999 || sk < 100)
    {
        alert("wrong number");
        return 0;
    }

        nr1 = Math.floor(sk / 100);
        nr2 = Math.floor(sk % 100 / 10);
        nr3 = Math.floor(sk % 100 % 10);
    
        sum = nr1 + nr2+ nr3;
        avg= (nr1 + nr2 + nr3) / 3;
        multip = nr1 * nr2 * nr3;
    
    
        document.getElementById('ats2').innerHTML = ' sum: ' + sum + ' average: ' + avg + ' multiplication : ' + multip;
    
   
   
    
}