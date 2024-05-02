// Load the full build.
var _ = require('lodash');

/*zadatak - korisnik na našoj stranici kreira password te želimo osigurati da:
1.svaki znak u passwordu je različit
2.su svi znakovi brojke
3.password nema više od 10 znakova

Vaš je zadatk:
1.napuisati funkciju koja provjerava dali su svi znakovi jedinstveni
2.napisati funkciju koja provjerava da li su znakovi brojevi
3.napisati funkciju koja uzima password i skraćuje ju na 10 znakova, ako je broj veći od 10

*/

//1.

var dobro = "1234567890abcdef";
var lose = "1123456abcdefghij";
var jedinstveniZnakovi = function (password) {
    //kod za 2.zadatak
    var mojNiz = [];
    console.log("password.length=" + password.length);

    for (var i = 0; i <= password.length - 1; i++) {
        var numToCheck = password.charAt(i);
        //console.log(numToCheck + " is integer = " + isBroj(numToCheck));
        if (isBroj(numToCheck) == false) {          // može se napisati i kao if (!isBroj(numToCheck)) {
            console.log(numToCheck + " nije broj");
            //break;
            return false;
        }
        if (mojNiz.includes(numToCheck)) {
            console.log(numToCheck + " već postoji u našem nizu ");
            //break;
            return false;
        } else {
            console.log(numToCheck + " NE postoji u nasem nizu ");
            mojNiz.push(numToCheck);
        }
    }
    return true;
};

// funkcija za provjeriti dali je character na tom mjestu broj
function isBroj(broj) {
    return !isNaN(broj);
}

//3.
function isMoreThan10(password) {
    if (password.length > 10) {
        return true;
    }

    return false;

}

function skratiNa10(password) {
    var tmpPassword = "";
    for (let i = 0; i < 10; i++) {
        var charAtIndex = password.charAt(i);
        tmpPassword += charAtIndex;
        
    }
    return tmpPassword;
}

console.log("password je ispravan: " + jedinstveniZnakovi(dobro));
//jedinstveniZnakovi(dobro);

console.log("PAssword je ispravan: " + jedinstveniZnakovi(lose));
//jedinstveniZnakovi(lose);

console.log("passWORD ima više od 10 znakova: " + isMoreThan10(dobro));

console.log("passWORD ima više od 10 znakova: " + isMoreThan10(lose));

console.log("passwoRd nakon skraćivanja: " + skratiNa10(dobro));
console.log("passwoRd nakon skraćivanja: " + skratiNa10(lose));