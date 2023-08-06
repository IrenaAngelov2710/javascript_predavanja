// Vo Javascript nizata(array) e objekt koj se koristi za smestuvanje i organiziranje na poveke vrednosti vo edna promenliva
// Za da se kreira niza vo Javascript potrebni se golemi zagradi [] ili mali () i elementite vo nejze gi postavuvame oddeleni so zapirka
// Elementite vo nizata moze da bidat od razlicni tipovi na podatoci, vklucuvajki broevi, nizi, objekti, stringovi i drugo
// Za pristapuvanje do elementite vo nizata koristime indeksi: Indeksot na elementot pocnuva od 0 za prviot element, 1 za vtoriot element itn
// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers[0]); // otpecateno ke bide 10
// console.log(numbers[2]); // otpecateno ke bide 30

// let niza = new Array("apple","orange","kiwi")
// let sladoledi = ["chokolado","malina","jagoda",12]

// console.log(sladoledi) // pecati ['chokolado', 'malina', 'jagoda', 12]
// console.log(sladoledi[1]) //ime na niza[index] // pecati malina

// let index = 2
// console.log(sladoledi[index]) // pecati jagoda

// sladoledi[index]="snikers"//promena na vrednost na element od nizata
// console.log(sladoledi) // pecati ['chokolado', 'malina', 'snikers', 12]
// console.log(sladoledi.length) //pecati dolzina na niza  // pecati 4

// let fruits = ["apple","banana","orange","melon","cherry","strawberry",2]

// let lastElement = fruits.pop() //SE BRISE POSLEDNIOT element od nizata bez da se zacuva 
// console.log(fruits) // pecati ['apple', 'banana', 'orange', 'melon', 'cherry', 'strawberry']
// console.log(lastElement) // pecati 2

// fruits.push("watermelon") //DODAVA element na KRAJ od nizata
// console.log(fruits) // ['apple', 'banana', 'orange', 'melon', 'cherry', 'strawberry', 'watermelon']

// let firstElement = fruits.shift() //GO BRISE PRVIOT element od nizata
// console.log(fruits) // pecati ['banana', 'orange', 'melon', 'cherry', 'strawberry', 'watermelon']

// fruits.unshift("pear") //DODAVA element na POCETOK od nizata
// console.log(fruits) // pecati ['pear', 'banana', 'orange', 'melon', 'cherry', 'strawberry', 'watermelon']

// console.log(fruits.slice(1,4))//gi prikazuva elementite od index 1 do index 4 (bez 4ot element) bez da gi izbrise
// console.log(fruits) // pecati['banana', 'orange', 'melon']
// console.log(fruits.splice(1,1))//brise kolku sto ke definirame elementi pocnuvajki od onoj index koj go definirame // pecati ['banana']
// Vo ovoj slucaj pocnuva da brise od prviot element i ke izbrise samo eden element
// // kako prv parametar(prva primena na splice)
// console.log(fruits)
// fruits.splice(2,0,"lime","sour cherry")//vo ovoj primer ne se brise element (2ot parametar e 0)
// //tuku se dodavaat 2 novi elementi na 2 pozicija
// console.log(fruits)

// console.log(fruits.toString()) //kreira recenica od site elementi na nizata oddeleni so , // pecati apple,banana,orange,melon,cherry,strawberry,2
// console.log(fruits.join("-")) //so koj separator da se ispecatat elementite na nizata kako string //pecati apple-banana-orange-melon-cherry-strawberry-2
// console.log(fruits.includes("banana")) //true/false dali elementot postoi vo nizata // pecati true
// console.log(fruits.sort()) //gi sortira alfabetski elementite // pecati [2, 'apple', 'banana', 'cherry', 'melon', 'orange', 'strawberry']


// let ime = "Sanja Tashkovska"
// console.log(ime.includes("Sa")) //true/false dali elementot postoi vo nizata // pecati true
// console.log(ime.substring(1,3)) //pod zbor od recenicata od koj do koj karakter (bez 3) // pecati an
// console.log(ime.replace("a","A")) //zamena na prviot podzbor so string // pecati SAnja Tashkovska
// console.log(ime.replaceAll("a","A")) //zamena na site podzborovi so string // pecati SAnjA TAshkovskA
// console.log(ime.split(" ")) //kreira niza od zborovite vo recenicata spored daden separator // pecati ['Sanja', 'Tashkovska']