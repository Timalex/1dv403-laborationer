"use strict";

window.onload = function(){

	
	var birthday = function(dateBorn){
		
	var dayLength = 24 * 60 * 60 * 1000; // Antalet millisekunder på ett dygn
		
	var dateToday = new Date();
        var dateTomorrow = new Date();
            dateTomorrow.setDate(dateTomorrow.getDate() + 1);

        var birthdayThisYear = new Date(dateBorn);
        var birthdayNextYear = new Date(dateBorn);
            birthdayThisYear.setFullYear( dateToday.getFullYear() );
            birthdayNextYear.setFullYear( dateToday.getFullYear() +1 );


        var birthdateUpcoming;


		if (dateToday.toDateString()  === birthdayThisYear.toDateString()) //Om årets födelsedag är idag: Gratulera
		{
			return 0;
		}
		else if (dateTomorrow.toDateString() === birthdayThisYear.toDateString()) //Om årets födelsedag är imorgon: Informera
		{
			return 1;
		}
		else if (dateToday > birthdayThisYear) //Om årets födelsedag ligger _framåt_ i tiden: så fyller användaren i år
		{
			return Math.ceil((birthdayThisYear - dateToday) / dayLength); 
		}
		else if (dateToday < birthdayThisYear) //Om årets födelsedag ligger _bakåt_ i tiden: så fyller användaren nästa år
		{
			return Math.ceil((birthdayNextYear - dateToday) / dayLength); 
		}
		

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};
