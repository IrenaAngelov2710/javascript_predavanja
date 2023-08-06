// site parni broevi od 0-20
// let i = 0
// while (i <= 20) {
// 	if (i%2==0) {
// 		console.log(i)
// 	}
// 	i++
// };

// site neparni broevi od 0-20
// let i = 0
// while (i <= 20) {
// 	if (i%2==1) {
// 		console.log(i)
// 	}
// 	i++
// };

// let pocetok = Number(prompt("vnesi pocetok"))
// let kraj = Number(prompt("vnesi kraj"))

// pecatenje na site parni broevi od pocetok do kraj i broenje na istite vo toj opseg
// let brojac = pocetok
// let brojacNaParni = 0

// while (brojac <= kraj ) {
// 	if (brojac%2==0) {
// 		console.log(brojac)
// 		brojacNaParni++
// 	}
// 	brojac++
// };

// console.log(`od ${pocetok} do ${kraj} ima ${brojacNaParni} parni broevi`)

// presmetuvanje na zbir na site broevi od pocetok do kraj

// let brojac = pocetok
// let zbir = 0

// while (brojac <= kraj) { 
// 	zbir+=brojac//13+14+15....
// 	brojac++
// };

// console.log(`Zbirot na broevite od ${pocetok} do ${kraj} e ${zbir}`)

// let ucenici = ["Irena","Vilim","Gjoko"];

// let uceniciLength = ucenici.length//za ova nema potreba od promenliva, se pisuva direktno vo uslovot od ciklusot
// let index = 0

// while (index<uceniciLength) {
// 	console.log(ucenici[index])
// 	index++
// };


// vnesuvanje na broevi vo niza se dodeka ne vneseme input koj ne e broj

// let input = prompt("vnesi broj")
// let niza = []

// isNaN-> is Not a number 
// if (isNaN(input)) {
// 	console.log("Vnesovte input koj ne e broj")
// }
// else {
// 	while (!isNaN(input)) {
// 		niza.push(Number(input))
// 		input = prompt("Vnesi broj")
// 	}
// };

// console.log(niza)

// DO WHILE

// do {
// 	naredbi
// } while (uslov)

//razlikata megu do-while i while e toa sto do-while se izvrsuva sigurno barem ednas


// let i = 10
// let suma = 0
// do {
// 	suma+=i
// 	i+=2
// } while (i<10)

// console.log(suma)

//FOR ciklusi

// for(inicijalizacija;uslov;inkrement/dekrement) {
// 	naredbi
// };

// for(let i = 0; i <= 10; i++) {
// 	console.log(i)
// }; // pecati 0 1 2 3 4 5 6 7 8 9 10

// let niza = [1,2,3,4];
// for(let i = 0; i < niza.length; i++) {
// 	console.log(niza[i])
// }; // pecati 1 2 3 4
// for(let i = niza.length-1; i >= 0 ; i--) {
// 	console.log(niza[i])
// }; // pecati 4 3 2 1 

// Ispecati gi iminjata na site ucenici koi imaat dolzina >= 6

// let ucenici = ["Angela","Damjan","Irena","Sanja","Gjoko","Danche","Maja"];

// for(let i = 0; i < ucenici.length; i++){
// 	let ime = ucenici[i]
// 	if (ime.length>=6) {
// 		console.log(ime)
// 	}
// }; // pecati Angela Damjan Danche

// while najcesto se koristi koga imame nekakva logicka promenliva ili zavisime od nekakov uslov, 
// for se koristi najcesto koga imame broenje, naredbite se izvrsuvaat definiran broj pati




