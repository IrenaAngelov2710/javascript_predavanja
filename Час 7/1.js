// Anonimna funkcija
// Vo Javascript anonimna funkcija e funkcija sto nema definirano ime, taa se kreira bez imenuvanje na funkcijata

// Primer za anonimna funkcija
// let anonimna = function() {
//     console.log("This function is anonymous")
// };

// anonimna() // Pecati This function is anonymous

// Fat arrow functions
// Najcesto se koristat koga imate pokratki funkcii
// Ovie funkcii se isto sto i anonimnite funkcii, no imaat poseben sintaksis sto ovozmozuva kratko i jasno definiranje na funkcii so pomos na strelka (=>)

// Primer za Far arrow function
// let anonimna2 = () => {
//     console.log("Zdravo")
// };

// anonimna2() // Pecati Zdravo

// // primer za site opcii za fat arrow function
// let zbirBroj10 = a => a + 10 // 1 parametar i vraka edna naredba
// console.log(zbirBroj10(5));

// let suma = (a,b) => a + b // poveke parametri i vraka edna naredba
// console.log(suma(5,3));

// let proizvod = (a,b) => { // poveke parametri i poveke naredbi
//     console.log(a * b)
//     console.log("Zdravo")
// };

// proizvod(2,3)

// Primer za Fat arrow function so presmetka na faktoriel za nekoj broj x
// let faktoriel = x => {
//     let proizvod = 1
//     for(let i = x; i > 0; i--){
//         proizvod*=i
//     }
//     return proizvod
// };

// console.log(faktoriel(4)) // pecati 24
// console.log(faktoriel(5)) // pecati 120
// console.log(faktoriel(3)) // pecati 6

// Primer za funkcija koja ima neogranicen broj na parametri(..args), args = arguments(parametri)
// let unknownArgs = (a,...args )=> {
//     console.log(args)
// };

// unknownArgs("1",2,10,200,"www")
// unknownArgs(1,2,3,4,5,6,7,8,9,10)


// Rekunzivni funkcii
// Rekunzivni funkcii se funkcii koi se povikuvaat sami sebe vo svojot telesen kod

// Primer za rekurnzivna funkcija - presmetuvanje na faktoriel
// Faktoriel na brojot "x" se presmetuva kako proizvod na site prirodni broevi od 1 do "x"
// Funkcijata faktoriel prima parametar "x"
// Prvo proveruvam e dali "x" e 0. Ako e 0, vednas vrakame 1, bidejki faktoriel na 0 e 1 (0!=1)
// Ako "x" ne e 0, togas vrakame "x" pomnozeno so faktoriel "(x - 1)"
// Ovaa funkcija ne prenesuva  kon malite broevi se dodeka ne stigneme do bazniot slucaj (koga "x" e 0)
// let faktoriel = (x) => {
//     if (x == 0) {
//         return 1
//     } else {
//         return x * faktoriel (x - 1)
//     }
// };

// 5*faktoriel(4); 5*4*faktoriel(3); 5*4*3*faktoriel(2); 5*4*3*2*faktoriel(1); 5*4*3*2*1

// Callback funkcii
// Callback funkcija prima parametri koi se drugi funkcii
// function greeting() {
//     console.log("Hello")
// }; // Pecati Hello
// function bye() {
//     console.log("bye")
// }; // Pecati bye

// function testCallback(a1,a2) {
//     if(5>4) {
//         a1()
//     } else {
//         a2()
//     }
// };

// testCallback(greeting,bye) // kako vrednosti
// intervalot se povtoruva celo vreme se dodeka ne go prekineme nie
// let interval = setInterval(() => { // prima prv parametar funkcija, vtor vrednost vo ms za intervalot
//     alert("Interval")
// },2000)

// let timeout = setTimeout(()=>{
//     alert("hi")
//     clearInterval(interval) // go prekinuva intervalot so nekoe ime
// },5000)

// Dopolnitelni fukncii za nizi koi primaat funkcii kako parametar 

// forEach, map, filter, reduce 

let niza = [1,5,3,5,7,5,3,1];

// ForEach povikuva funkcija za sekoj element od nizata vo koja se izvrsuvaat nekoi naredbi povrzani so toj element od nizata
// niza.forEach((element) => {
//     console.log(element)
// }); // Pecati 1 5 3 5 7 5 3 1

// pobrzo e da se koristat for of koga ne se koristi index

// index parametarot e opcionalen, go dodavame  po potreba
// niza.forEach((element,index) => {
//     // console.log(element,index)
//     if(index%2==0){
//         console.log(index+":"+element)
//     }
// })

// Map se koristi koga sakame da kreirame nova niza so ist broj na elementi kako prvata (niza), no modificirana
// Sekoj pat map vraka niza
// let niza2 = niza.map(element=>element*2)
// console.log(niza2); // Pecati [2, 10, 6, 10, 14, 10, 6, 2]

// let niza3 = niza.map((element,i)=>element*2+i)
// console.log(niza3)

// Filterot vo Javacript ovozmozuva filtriranje na sekoj element od nizata spored zadaden kriterium(uslov)
// let niza4 = niza.filter(x=>x%2==0)
// console.log(niza4)

// let kandidati = [{name:"a", height:190}, {name:"b", height:160}]


// let k = kandidati.filter(element=>element.height>170)
// console.log(k)

// let names = kandidati.filter(element=>element.height>170).map(e=>e.name)
// console.log(names)
// mozeme da gi kombinirame filter, map i reduce po potreba primer: filter(funkcija.map(funkcija))

// Reduce vo Javascript e vgradena funkcija koja ovozmozuva akkumuliranje na elementite na nizata za da se kreira edna rezultantna vrednost
// let reduceArray = niza.reduce((acc,curr)=>acc+curr)
// console.log(reduceArray)