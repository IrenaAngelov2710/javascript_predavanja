// Uslovite vo Javascript se koristat za odlucuvanje koj del od kodot da se izvrsi vrz osnova na odredeni uslovi
// Conditionals (uslovi)
// if (uslov) {
// 	naredbi;
// }

// Primer (w3schlools)
// if (hour < 18) {
//   greeting = "Good day";
// }

// ako i samo ako imate edna naredba ne mora da se pisuvaat fraerski zagradi

// let broj = 0
// if (broj>=10) {
// 	console.log("Brojot e pogolem ili ednakov na 10")
// }

//dokolku imame SPROTIVEN nastan na if togas koristime struktura if-else
// if (uslov) {
// 	naredbi-kod sto se izvrsuva ako uslovot e tocen (true);
// } else {
// 	naredbi-kod sto se izvrsuva ako uslovot e netocen (false);
// }

// Primer (w3schools)
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// let promptBroj = prompt("Vnesi broj")
// let broj = Number(promptBroj)
// console.log(broj)
// vo slucaj inputot da ne e broj dava rezultat NaN ->Not a number
// isNaN() ->funkcija koja proveruva dali inputot ne e broj; vraka true/false
// console.log(isNaN(broj))

// if (broj%2==0) {
// 	console.log("brojot e paren")
// } else {
// 	console.log("brojot e neparen")
// }

// let godini = 20
// if (godini >= 18 && godini <= 60) {
// 	console.log("Imate pravo da polagate za vozachka dozvola so "+godini +" godini")
// } else {
// 	console.log("Nemate pravo da polagate za vozachka dozvola")
// }

// Teranry operator (?)
// sintaksa: uslov ? naredba ako uslovot e ispolnet :(sprotivno) naredba ako uslovot ne e ispolnet
// let godini = 30
// let rezultat = (godini >= 18) ? "Imate pravo da polagate" : "Nemate pravo da polagate"
// console.log(`Odgovorot e ${rezultat}`) //nacin na pecatenje na vrednost na promenliva

// let proizvod = prompt("Vnesi proizvod")
// if (proizvod == "chokolado") {
// 	console.log("kupiv chokolado")
// } else if (proizvod == "mastika") {
// 	console.log("kupiv mastika")
// } else if (proizvod == "chips") {
// 	console.log("kupiv chips")
// } else {
// 	console.log("ne kupiv nishto")
// }

//PRAVILO! if moze da stoi samostojno dodeka else if i else ne moze da se definiraat bez if
// isto taka ne mora sekogas da se definira sprotiven (else) nastan

// Primer (w3schools)
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// domashna: da procitate za switch-case
// Switch-case se koristi za proverka na razlicni vrednosti so promenliva i se izvrsuva so odgovor (kod) za sekoja vrednost
// switch se koristi najcesto koga imame direktna sporedba na promenliva so vrednost(operator=="*")

// swith (promenliva) {
// 	case 1:
// 		naredbite vo slucaj promenlivata da ima vrednost 1;
// 		break;
// 	case 2 :
// 		naredbite vo slucaj promenlivata da ima vrednost 2;
// 		break;
// 	default: naredbi
// }

// let broj1 = 10
// let broj2 = 5
// let operator = prompt("Vnesi operator") 

// switch (operator) {
// 	case "+":
// 		console.log(broj1+broj2)
// 		break;
// 	case "-":
// 		console.log(broj1-broj2)
// 		break;
// 	default:console.log("vnesovte pogresen operator")
// }

// let profesor = prompt("Vnesi ime na profesor od JavaScript Akademija")

// switch (profesor) {
//     case "sanja":
//     case "SANJA":
//     case "Sanja":
//         alert("Sanja e glavna za Fron-End")    
//     break;
//     case "biljana":
//     case "BILJANA":
//     case "Biljana":
//         alert("Biljana e glavna za GNU/Linux")
//     break;
//     case "hristijan":
//     case "HRISTIJAN":
//     case "Hristijan":
//         alert("Hristijan e glaven za HTML i CSS")
//     break;
//     case "aleksandar":
//     case "ALEKSANDAR":
//     case "Aleksandar":
//         alert("Aleksandar e glaven za Node i MongoDB")
//     break;
//     case "martin":
//     case "MARTIN":
//     case "Martin":
//         alert("Martin e glaven za React")
//     break;
//     case "bojan":
//     case "BOJAN":
//     case "Bojan":
//         alert("Bojan e glaven za Back-End")
//     break;
//     case "irena":
//     case "IRENA":
//     case "Irena":
//         alert("Irena e glavna za kariera")
//     break;

//     default:
//         alert("Nema profesor so toa ime")
//     break;

// }