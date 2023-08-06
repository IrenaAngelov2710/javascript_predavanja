// DOM (Document Object Model) vo Javascript e programski interfejs koj obezbeduva pretstavuvanje na HTML dokumentite kako struktura na drvo ili objekt
// Osnovni celi na DOM se:
// -Pregled na HTML dokumentot. Na primer: mozeme da gi prebarame i najdeme site elementi so odreden "tag", "class" ili "id" vrednost
// -Manipulacija na HTML dokumentot. Mozeme da ja izmenuvame sodrzinata i strukturata na HTML dokumentot
// -Odgovaranje na nastanite-event listeners (kopcinja)
// -Promena na stilovite. Ni ovozmozuva da go menuvame stilot(CSS)

// let title = document.getElementById("title")
// console.log(title)

// ova ke vrati null ako script tagot ne e na kraj od bodyto
// Resenie 2?
// - koristenje na window.onload funkcija

window.onload = function(){
	// let title = document.getElementById("title")
	// console.log(title)
	// console.dir(title) //gi prikazuva site svojstva na toj element

	// let blockElements = document.getElementsByClassName("block")
	// console.dir(blockElements)
	// let firstBlockElement = blockElements[0]
	// firstBlockElement.innerText = "Zdravo"

	// let links = document.getElementsByTagName("a")
	// let link = links[0]
	// // 1.nachin za menuvanje na attribute
	// // link.attributes e niza
	// link.attributes[0].value = "https://www.google.com"
	// link.innerText = "google"
	// //2 nachin 
	// link.setAttribute("href", "https://www.yahoo.com")
	// //brishenje na atribut
	// link.removeAttribute("ime na atribut")


	// //1 nachin za setranje na klasi
	// document.getElementById("title").setAttribute("class","someClas someClass1")
	// //2 nachin za setiranje na klasi
	// document.getElementById("title").classList.add("newClass")
	// //brishenje na klasa
	// document.getElementById("title").classList.remove("newClass")

	// console.log(document.querySelector("#title")) //skrateno od getElementById
	// console.log(document.querySelector(".block") //skrateno od getElementsByClassName
	// //go zema prviot element so klasa block

	// console.log(document.querySelectorAll(".block")) //gi selektira site elementi koi imaat klasa blok

	// 1 nacin za definiranje na akcija za nastan
	// document.getElementById("button").addEventListener("click",
	// 	()=>{
	// 		document.getElementById("result").innerHTML = new Date()
	// 	}
	// )

	// document.getElementById("light_off").addEventListener("click",()=>{
	// 	document.getElementById("light").setAttribute("src", 
	// 		"https://www.w3schools.com/js/pic_bulboff.gif")
	// })

	//kreiranje na elementi vo js

	// let div = document.createElement("div")
	// div.id = "firstDiv"
	// div.innerHTML = `<p>Ova e paragraf</p>
	// 		<h1>Naslov</h1>`
	// div.style.color = "red"
	// div.style.height = "100px"
	// div.style.width = "100px"
	// div.style.background = "green"

	// document.body.appendChild(div)//dodava dete na body tagot

	let ucenici = [
		{name:"Krunislav", surname:"Mirkovski", email:"email"},
		{name:"Gjoko",surname:"Blazhevski",email:"email"},
		{name:"Tihana", surname:"Chingarova",email:"email"}
	]

	createTable(ucenici,"Uchenici JS akademija")
}


function createTable(niza,naslov){

	let tabela = document.createElement("table")
	let caption = document.createElement("caption")
	caption.innerText = naslov
	tabela.appendChild(caption)//na element dodavame dete, elementot e smesten vo promenliva

	let firstRow = document.createElement("tr")//go kreirame prviot red od tabelata
	let objekt = niza[0]
	for(key in objekt){
		let th = document.createElement("th")//gi kreirame keliite od prviot red
		th.innerText = key
		firstRow.appendChild(th)//se dodava kelijata na redot
	}

	tabela.appendChild(firstRow)//se dodava prviot red na tabelata


	for(element of niza){
		let tr = document.createElement("tr")
		for(key in element){
			let td = document.createElement("td")
			td.innerText = element[key]
			tr.appendChild(td)
		}
		tabela.appendChild(tr)//se dodava redot na tabelata
	}

	tabela.setAttribute("border","1px")
	document.body.appendChild(tabela)//se dodava tabelata na bodyto.
	//so document.body se pristapuva do body tagot od html
}



// function lighton(){
// 	document.getElementById("light").setAttribute("src", 
// 			"https://www.w3schools.com/js/pic_bulbon.gif")
// }