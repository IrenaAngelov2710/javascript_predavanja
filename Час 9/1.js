// Vo Javascript promises se mehanizam za rabota so asinhron kod i obrabotka na asinhroni operacii
// Promisite imaat tri osnovni sostojbi:
// -Pending(vo tek); Izvrsuvanjeto na asinhronata operacija ne e zavrseno i promisot e vo tek
// -Resolve(ispolnet); Asinhronata operacija zavrsi uspesno i promisot se ispolnuva uspesno: Rezultatot od operacijata e dostapen
// -Reject(odbien); Asinhronata operacija zavrsi neuspesno i promisot e odbien. Pricinata za neuspehot e dostapna

// let promise = new Promise((resolve, reject) => {
// if (uslov) {
// 	resolve()
// } else {
// 	reject()
// }
// });

// let hasPizza = false
// let promiseToBringPizza = new Promise((resolve,reject) => {
// 	if (hasPizza) {
// 		resolve("We'll eat pizaa")
// 	} else {
// 		reject("The pizza place was closed")
// 	}
// });

// 	//alternativa za if
// 	// hasPizza?resolve("We'll eat pizaa"):reject("The pizza place was closed")

// promiseToBringPizza.then(result=>{
// 	console.log(result)
// }).catch(error=>{console.log(error)})

// then funkcijata se povikuva koga vetuvanjeto e ispolneto
// catch se povikuva koga vetuvanjeto ne e ispolneto
// edna promise resolve funkcija moze da vrati novo vetuvanje koe povtorno treba da se proveri
// dali e ispoleneto ili ne

// fetch("https://randomuser.me/api/?results=1")
// .then(response=>response.json())
// .then(jsonObj=>{
// 	// console.log(jsonObj)
// 	let user = jsonObj.results
// 	console.log(user)
// })

async function fetchWeather() {
	const result = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=5cd5799692e9625b7115ef06970bb8a6&units=metric")
	const data = await result.json()
	console.log(data.main.temp)
}

fetchWeather()