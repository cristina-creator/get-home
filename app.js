function calculateFuelToOffload() {
    var totalDistanceToTravel = prompt('Care este distanța totală pe care dorești să o parcurgi, în kilometri? Introdu un număr.');
    var averageLitersOverHundred = prompt('Care este consumul mediu de combustibil al navei spațiale? Introdu un număr.');
    var tankCapacity = prompt('Care este capacitatea totală a rezervorului de combustibil? Introdu un număr.');

    var requiredFuel = totalDistanceToTravel * (averageLitersOverHundred / 100);
      

    var fuelToOffload = tankCapacity - requiredFuel;
    alert('Cantitatea necesară de combustibil pentru a face călătoria: ' + requiredFuel + ' L\n' + 'Cantitatea de combustibil pe care trebuie să o descarci: ' + fuelToOffload + ' L');
}
calculateFuelToOffload();
