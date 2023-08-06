// let iminja = ["Sanja", "Angela", "Krunislav", "Damjan", "Danche"];
// console.log(iminja.length) // pecati 5

// for (let i = 0; i < iminja.length; i++){
// 	let ime = iminja[i]
// 	console.log(ime)
// }; // pecati Sanja Angela Krunislav Damjan Danche

// for of (se odnesuva na nizi)
// gi izminuva site elementi od nizata i element po element gi smestuva vo prvata promenliva (pred of)
// izvrsuva naredbi za sekoj element od nizata

// Primer za for of
// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//     console.log(num)
// }; // pecati 1 2 3 4 5

// for (let ime of iminja) {
// 	console.log(ime)
// }; // pecati Sanja Angela Krunislav Damjan Danche

// for in (se odnesuva na objekti)

// Primer za for in
// const person = {
//     firstName: "Petar",
//     lastName: "Petrovski",
//     age: 30
// };
// for (const key in person) {
//     console.log(key + ":" + person[key])
// }; // pecati firstName:Petar lastName:Petrovski age:30

// let obj = {name: "Semos", type: "edukacija"};

// let keys = Object.keys(obj)
// console.log(keys); // pecati ['name', 'type']
// //primer kako da se zemat vrednostite ako gi imame klucevite "kluc:vrednost"
// for (let i = 0; i < keys.length; i++) {
// 	let key = keys[i]
// 	console.log(key+":"+obj[key])
// };
// vtor nacin za pecatenje samo na vrednostite
// let values = Object.values(obj)
// for (let i = 0; i < values.length; i++) {
// 	console.log(values[i])
// };

// zamena za ciklusot id 23 linija e for in
// for (kluc in objekt) {
// 	console.log(objekt[kluc])
// };
// se koristi za objekti
// for (let key in obj) {
// 	console.log(obj[key])
// };
// //se koristi i za nizi, no vo klucot se smestuva indeksot
// for (let key in iminja) {
// 	console.log(iminja[key])
// };
// //sledniot kod frla greshka
// for (let element of obj) {
// 	console.log(element)
// };

// let niza = [1, 2, "Semos", [1,2,3]];
// let movie = {
// 	title: "Harry Potter",
// 	author: "J.K.Rowling",
// 	year: 1994,
// 	actors: ["Daniel R","a1","a2"],
// 	parts: ["p1","p2"]	
// };


// Vgnezdeni ciklusi(nested loops) - koga eden ciklus e vmetnat vnatre vo drug ciklus. Vnatresniot ciklus se izvrsuva poveke pati za sekoja interakcija na nadvoresniot ciklus
// Primer za vgnezdeni ciklusi
// for (let i = 0; i <= 3; i++) {
//     console.log("Nadvoresen ciklus: " + i);
// for (let j = 0;  j <= 2; j++) {
//     console.log("Vnatresen ciklus: " + j)
// }
// };

// site denovi od nedelata za 2 nedeli
// for (let i = 1; i <= 2; i++) { //brojac za broj na nedela
// 	    console.log("Nedela br :"+ i)
// 	for(let j = 1; j <= 7; j++) { //brojac za den vo nedela
// 	    console.log("Den "+j)
// 	}
// };

//funkcii
//postojat funkcii koi imaat parametri, nemaat parametri, vrakaat vrednost ili ne vrakaat vrednost

// function imeNaFunkcija() {
// 	naredbi
// };

// imeNaFunkcija()

// function prvaFunkcija() { //funkcija bez parametar
// 	console.log("Hello world!")
// 	console.log("Hallo!")
// };

// prvaFunkcija()
// prvaFunkcija()

// function pecatiString(str) { //funkcija so eden parametar
// 	console.log(str)
// };

// pecatiString("Zdravo")
// pecatiString("Hello")


// function pomnoziBroj(broj) {
// 	return broj*2/ /return e klucno zborce so koe kazuvame deka funkcijata ni vraka vrednost
// }
// console.log(pomnoziBroj(5))
// // let rezultat = pomnoziBroj(5)
// // console.log(rezultat)
// console.log(pomnoziBroj(20))

// function vnesiIpomnoziBroj() {
// 	let broj = Number(prompt("vnesi broj"))
// 	console.log(broj*2)
// };

// vnesiIpomnoziBroj()
// vnesiIpomnoziBroj()