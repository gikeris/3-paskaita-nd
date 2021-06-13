/* 3. Sukurkite  skriptą, kuris suranda kvadratinės lygties sprendimą.

Papildomai:

*Skaičiai paimami iš input HTML žymės laukelių.

*Išveskite konvertuotą sekunžių informacija į div.

*/
"use strict";

function func3() {
    var d, x1, x2;
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c  = Number(document.getElementById("c").value);

    d = (Math.pow(b,2) - (4 * a * c));
    
    if(d < 0)
    {
        document.getElementById('ats3').innerHTML = 'not possible';
    }
    if (d > 0){
        x1 = (-b - Math.sqrt(d))/ (2 * a);
        x2 = (-b + Math.sqrt(d))/ (2 * a);

        document.getElementById('ats3').innerHTML = ' D: ' + d + ' x1: ' + x1 + ' x2: ' + x2;

    }
    
   
    if (d == 0){
        x1 = (-b - Math.sqrt(d))/ (2 * a);
        x2 = (-b + Math.sqrt(d))/ (2 * a);
        
        if(x1 == x2){
        document.getElementById('ats3').innerHTML = 'x1 and x2 equals: ' + x1;
        }
    }
}