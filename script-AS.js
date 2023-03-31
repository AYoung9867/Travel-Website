
const apiKey = 'pk.eyJ1IjoiYWxleGw0ZCIsImEiOiJjbGNxYTBya20wM3kzM3BsaG5sMmI3aDJvIn0.xoKxcGuInNP84ReSTKmPHg';

const mapAS = L.map('ASmap').setView([5.44, 115.38], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	accessToken: apiKey
}).addTo(mapAS);

//Malaysia

/*const adoreCafe = L.marker([5.415287925036833, 100.33572591826787]).addTo(mapAS);

let template1 = '<div style="max-width: 20vw;"><img src="images/Map Images/Asia/Malaysia/Adore Cafe/Guitar.jpg" alt="why" class="single-img" /></div>'

adoreCafe.bindPopup(template1);

const alors = L.marker([3.1463756515795, 101.70949331520049]).addTo(mapAS);

let template2 = '<img src="images/Map Images/Asia/Malaysia/Alors/Alors Art.jpg" alt="why" class="single-img" />'

alors.bindPopup(template2);

const armeniasq = L.marker([5.41533688786035, 100.3361273541736]).addTo(mapAS);

let template3 = '<img src="images/Map Images/Asia/Malaysia/Armenia Square/Chinese NY.jpg" alt="why" class="single-img" />'

armeniasq.bindPopup(template3);

const batu = L.marker([3.237781619904121, 101.68396519406367]).addTo(mapAS);

let template4 = '<img src="images/Map Images/Asia/Malaysia/Batu/Batu Statue.jpg" alt="why" class="single-img" />'

batu.bindPopup(template4);

const cameronHike = L.marker([4.454050232470405, 101.36514388694557]).addTo(mapAS);

let template5 = '<img src="images/Map Images/Asia/Malaysia/Cameron Hike/Cameron Sign.jpg" alt="why" class="single-img" />'

cameronHike.bindPopup(template5);

const cameronMossy = L.marker([4.495980894984814, 101.39603331796961]).addTo(mapAS);

let template6 = '<img src="images/Map Images/Asia/Malaysia/Cameron Mossy/Flag.jpg" alt="why" class="single-img" />'

cameronMossy.bindPopup(template6);

const graveyard = L.marker([3.160139572105489, 101.70752471568088]).addTo(mapAS);

let template7 = '<img src="images/Map Images/Asia/Malaysia/Graveyard/Graveyard.jpg" alt="why" class="single-img" />'

graveyard.bindPopup(template7);

const jetty = L.marker([5.411819141889632, 100.34049881227675]).addTo(mapAS);

let template8 = '<img src="images/Map Images/Asia/Malaysia/Jetty/Jetty.jpg" alt="why" class="single-img" />'

jetty.bindPopup(template8);

const jettyFood = L.marker([5.413311715098913, 100.3391423408955]).addTo(mapAS);

let template9 = '<img src="images/Map Images/Asia/Malaysia/Jetty Food/Street Food.jpg" alt="why" class="single-img" />'

jettyFood.bindPopup(template9);

const klcc = L.marker([3.1580489894325203, 101.7116773018668]).addTo(mapAS);

let template10 = '<img src="images/Map Images/Asia/Malaysia/KLCC/Petronas.jpg" alt="why" class="single-img" />'

klcc.bindPopup(template10);

const lavendarGarden = L.marker([4.527060839505565, 101.42658120782713]).addTo(mapAS);

let template11 = '<img src="images/Map Images/Asia/Malaysia/Lavendar Garden/Castle.jpg" alt="why" class="single-img" />'

lavendarGarden.bindPopup(template11);

const merdeka = L.marker([3.1416658294826068, 101.70073874736545]).addTo(mapAS);

let template12 = '<img src="images/Map Images/Asia/Malaysia/Merdeka/Merdeka.jpg" alt="why" class="single-img" />'

merdeka.bindPopup(template12);

const mosque = L.marker([3.1719745109019892, 101.67062968723005]).addTo(mapAS);

let template13 = '<img src="images/Map Images/Asia/Malaysia/Mosque/Mosque.jpg" alt="why" class="single-img" />'

mosque.bindPopup(template13);

const penangStreet = L.marker([5.416854648368575, 100.33915962510436]).addTo(mapAS);

let template14 = '<img src="images/Map Images/Asia/Malaysia/Penang Street/Erin Walking Penang.jpg" alt="why" class="single-img" />'

penangStreet.bindPopup(template14);

const regalia = L.marker([3.1644522302166926, 101.69251677611085]).addTo(mapAS);

let template15 = '<img src="images/Map Images/Asia/Malaysia/Regalia/KL Night.jpg" alt="why" class="single-img" />'

regalia.bindPopup(template15);

const shrine = L.marker([5.418483836548781, 100.33879419398308]).addTo(mapAS);

let template16 = '<img src="images/Map Images/Asia/Malaysia/Shrine/Lanterns.jpg" alt="why" class="single-img" />'

shrine.bindPopup(template16);



//Thailand

const bananas = L.marker([8.16391857027564, 98.74708655392922]).addTo(mapAS);

let template17 = '<img src="images/Map Images/Asia/Thailand/Bananas/Bananas.jpg" alt="why" class="single-img" />'

bananas.bindPopup(template17);

const bananasVilage = L.marker([8.165508522084691, 98.74876339714655]).addTo(mapAS);

let template18 = '<img src="images/Map Images/Asia/Thailand/Bananas Village/Cheap Food.jpg" alt="why" class="single-img" />'

bananasVilage.bindPopup(template18);

const railey = L.marker([8.005112200764227, 98.83955889685177]).addTo(mapAS);

let template19 = '<img src="images/Map Images/Asia/Thailand/Railey/Railey.jpg" alt="why" class="single-img" />'

railey.bindPopup(template19);

const emeraldPool = L.marker([7.925029631336609, 99.26681757733492]).addTo(mapAS);

let template20 = '<img src="images/Map Images/Asia/Thailand/Emerald Pool/20230127_145837.jpg" alt="why" class="single-img" />'

emeraldPool.bindPopup(template20);

const hangoutNoi = L.marker([8.119150637407994, 98.56378283563639]).addTo(mapAS);

let template21 = '<img src="images/Map Images/Asia/Thailand/Hangout Noi/20230202_164850.jpg" alt="why" class="single-img" />'

hangoutNoi.bindPopup(template21);

const krabiMainRoad = L.marker([8.066999493567518, 98.914764681937]).addTo(mapAS);

let template22 = '<img src="images/Map Images/Asia/Thailand/Krabi Main Road/VideoCapture_20230201-225527.jpg" alt="why" class="single-img" />'

krabiMainRoad.bindPopup(template22);

const krabiMarket = L.marker([8.067137041508449, 98.91677961894486]).addTo(mapAS);

let template23 = '<img src="images/Map Images/Asia/Thailand/Krabi Market/VideoCapture_20230126-213128.jpg" alt="why" class="single-img" />'

krabiMarket.bindPopup(template23);

const krabiTemple = L.marker([8.063152591848242, 98.9143944960289]).addTo(mapAS);

let template24 = '<img src="images/Map Images/Asia/Thailand/Krabi Temple/20230126_170656.jpg" alt="why" class="single-img" />'

krabiTemple.bindPopup(template24);

const lamHaed = L.marker([8.082391496867137, 98.59876516470126]).addTo(mapAS);

let template25 = '<img src="images/Map Images/Asia/Thailand/Lam Haed/White Beach.jpg" alt="why" class="single-img" />'

lamHaed.bindPopup(template25);

const monkeyIsland = L.marker([8.190619404288173, 98.72649396880824]).addTo(mapAS);

let template26 = '<img src="images/Map Images/Asia/Thailand/Monkey Island/VideoCapture_20230124-134443.jpg" alt="why" class="single-img" />'

monkeyIsland.bindPopup(template26);

const oldTownPhuket = L.marker([7.884844818446742, 98.38777065876835]).addTo(mapAS);

let template27 = '<img src="images/Map Images/Asia/Thailand/Old Town Phuket/20230129_183923.jpg" alt="why" class="single-img" />'

oldTownPhuket.bindPopup(template27);

const phuketCentre = L.marker([7.880264280344732, 98.39217973481202]).addTo(mapAS);

let template28 = '<img src="images/Map Images/Asia/Thailand/Phuket Centre/20230131_182730.jpg" alt="why" class="single-img" />'

phuketCentre.bindPopup(template28);

const sunsetBeach = L.marker([8.129815648922182, 98.6233261937874]).addTo(mapAS);

let template29 = '<img src="images/Map Images/Asia/Thailand/Sunset Beach/20230202_065859.jpg" alt="why" class="single-img" />'

sunsetBeach.bindPopup(template29);

const tigerCaves = L.marker([8.12622956803137, 98.92244879022189]).addTo(mapAS);

let template30 = '<img src="images/Map Images/Asia/Thailand/Tiger Caves/20230127_102410.jpg" alt="why" class="single-img" />'

tigerCaves.bindPopup(template30);

const yaiBeach = L.marker([8.034828868032662, 98.563588919448]).addTo(mapAS);

let template31 = '<img src="images/Map Images/Asia/Thailand/Yai Beach/VideoCapture_20230206-165133.jpg" alt="why" class="single-img" />'

yaiBeach.bindPopup(template31);
*/


/*function plotAccom(Name, Latitude, Longitude) {
	for (i=0, len = THELIST.length; i<len; i++) {
		L.marker([Latitude[i], Longitude[i]]).addTo(mapAS);
	}
}*/

const url ='https://script.google.com/macros/s/AKfycbyDtMDn8lqH-BD7f0hGbZgO2GJhgcY0DMp8blB4P-YgsuDZRseo27d4tnRxl1gLotfepw/exec';
const accom = document.querySelector('.accom');
accom.onclick = (e)=>{
	fetch(url)
	.then(rep => rep.json())
	.then(data =>{
		console.log(data);
		const headings = data[0];
		const rows = data.slice(1);
		for (i=0, len = rows.length; i<len; i++) {
			plotAccom(rows[i][0],rows[i][2],rows[i][3]);
		}
	})
}


function plotAccom(Name, Latitude, Longitude) {
	
	const pin = L.marker([Latitude,Longitude]).addTo(mapAS);
	
	const template = "<h2>"+Name+"</h2>"

	pin.bindPopup(template);

}



 
