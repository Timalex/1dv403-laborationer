var makePerson = function (persArr) {
    // Strikta kodningsregler gäller endast den här funktionen
    "use strict";

    var ages = [], names = [], agesSum, ageResult = {};

    // Lägg objektegenskaperna i arrayer för att kunna använda arrayfunktioner på dem
    persArr.forEach(function propertyToArray(person) {

        ages.push(person.age);
        names.push(person.name);
    });

    // Tilllämpa Math.min och -max på åldrarna
    ageResult.minAge = Math.min.apply(null, ages);
    ageResult.maxAge = Math.max.apply(null, ages);

    // Summera alla åldrar för att kunna beräkna medelåldern sen
    agesSum = ages.reduce(function (a, b) { return a + b; });

    // Beräkna medelåldern, avrunda till närmaste år
    ageResult.averageAge = Math.round(agesSum / persArr.length);

    // Variant på sortfunktionen där tecken jämförs enligt en lokal "ordlista"
    names.sort(function compare(a, b) { return a.localeCompare(b); });

    // Sammanfoga med ", " _mellan_ namnen
    ageResult.names = names.join(', ');

    return ageResult;
};