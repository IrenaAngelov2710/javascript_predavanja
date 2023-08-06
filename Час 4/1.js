// Objektite vo Javasript se eden od osnovnite tipovi na podatoci i pretstavuvaat kolekcija od svojstva
// Objektite se koristat za zacuvuvanje i organiziranje na podatoci vo oblik na parovi kluc-vrednost
// Klucevite se obicno stringovi, a vrednostite mozat da bidat bilo koj tip na podatok

// Kreiranje na prazen objekt
// let person = {};

// Dodavanje na svojstva vo objektot
// person.firstName = "Jovan";
// person.lastName = "Jovanovski";
// person.age = 30;
// person.isEmployed = true;

// console.log(person); // pecati {firstName: 'Jovan', lastName: 'Jovanovski', age: 30, isEmployed: true}

// Pristap do svojstva na objektot
// let person = {
//     firstName: "Jovan",
//     lastName: "Jovanovski",
//     age: 30,
//     isEmployed: true
// };

// console.log(person.firstName); // pecati Jovan
// console.log(person.lastName); // pecati Jovanovski
// console.log(person.age); // pecati 30
// console.log(person.isEmployed); // pecati true

// Object literals
// let firstObj = {
// 	title: "Harry Potter",
// 	year: 1994,
// 	12:123
// };

// console.log(firstObj); // pecati {12: 123, title: 'Harry Potter', year: 1994}

// console.log(firstObj.title); // pecati Harry Poter
// console.log(firstObj.year); // pecati 1994
// console.log(firstObj[12]); // pecati 123


// console.log(firstObj["title"]); //ako go odberete ovoj nacin na pecatenje togas klucot(string) se stava vo ""
// console.log(firstObj["year"]);

// let user = {
// 	name: "Sanja",
// 	surname: "Tashkovska",
// 	email: "mail@mail.com",
// 	number: 123
// };

// console.log(user); // pecati {name: 'Sanja', surname: 'Tashkovska', email: 'mail@mail.com', number: 123}

//  let hotel = {
// 	name: "Some hotel", //svojstvo
// 	roomNumber: 234, //svojstvo
// 	hasVacancy: true, //svojstvo 
// 	management: {
// 		manager: "Pero",
// 		email: "pero@mail.com"
// 	},
// 	owner: "Pero",
// 	user : {
// 		name: "Sanja",
// 		surname: "Tashkovska",
// 		email: "mail@mail.com",
// 		number: 123
// 	}
// };

// console.log(hotel); // pecati {name: 'Some hotel', roomNumber: 234, hasVacancy: true, management: {…}, owner: 'Pero', …}
// let hotel2 = hotel
// //poveke nachini za pecatenje na vrednosta na manager
// console.log(hotel.management.manager)
// console.log((hotel.management).manager)
// console.log(hotel["management"].manager)
// console.log(hotel.management["manager"])
// console.log(hotel["management"]["manager"])
// let managementVar = hotel.management
// console.log(managementVar.manager)

//dodavanje na svojstvo
// hotel.built = 2000
// hotel.owner = "Petko"
// // console.log(hotel)
// // console.log(hotel2)

// za doma: da procitate kako funkcioniraat objektite vo javascript

// briseshenje na svojstvo
// delete hotel.built // klucnoto zborce delete i svojstvoto koe sakate da go izbrisete

// console.log(Object.keys(hotel)); // pecatenje na site klucevi na objektot hotel
// console.log(Object.values(hotel)); // pecatenje na site vrednosti od objektot hotel


// let ucenici = [
// 	{
// 		ime: "Gjoko",
// 		prezime: "Blazevski"
// 	},
// 	{
// 		ime: "Tihana",
// 		prezime: "Chingarova"
// 	}
// ]


// console.log(ucenici[0].ime)
// console.log(ucenici[1].prezime)

// ciklusi
// Vo Javascript ciklusite se strukturi za povtoruvanje na odreden blok na kod poveke pati
// Vrsime odredeni akcii dodeka ne se ispolni nekoja uslovna proverka

// "for" ciklus
// for (inicijalizacija; uslov; inkrementacija) {
    // blok na kod koj se povtoruva
// };

// Primer za "for" ciklusi
// for (let i = 0; i < 5, i++) {
    // console.log(i);
// }; // ke ispecati 0 1 2 3 4

// "while" ciklusi
// while (uslov) {
    // blok na kod koj se povtoruva se dodeka uslovot e vistinit
// };

// Primer za "while" ciklus
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }; // ke ispecati 0 1 2 3 4

// "do-while" ciklusi
// do {
     //blok na koj koj ke se povtoruva barem ednas
     //i potoa se proveruva uslovot
// } while (uslov);

// Primer za "do-while" ciklus
// let i = 0;
// do {
    // console.log(i);
    // i++;
// } while (i < 5); // pecati 0 1 2 3 4

// while, do-while, for
// pred while definirame pocetok 
// while (uslov) {
// 	naredbi;
// 	promena koja ke napravi uslovot da bide netocen;
// };

// var i = 0

// while (i <= 10) {
// let b = 10 //koga definirame LET promenliva vo blok na kod taa promenliva nema da e dostapna nadvor od toj blok
// console.log(b)
// b++
// console.log(i)
// i++;
// }

// console.log(b)

