
const apiKey = 'pk.eyJ1IjoiYWxleGw0ZCIsImEiOiJjbGNxYTBya20wM3kzM3BsaG5sMmI3aDJvIn0.xoKxcGuInNP84ReSTKmPHg';

const mapAS = L.map('ASmap').setView([5.44, 115.38], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	accessToken: apiKey
}).addTo(mapAS);

//Malaysia

const adoreCafe = L.marker([5.415287925036833, 100.33572591826787]).addTo(mapAS);

let template1 = '<img src="images/Map Images/Asia/Malaysia/Adore Cafe/Guitar.jpg" alt="why" class="single-img" />'

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
