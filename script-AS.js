
const apiKey = 'pk.eyJ1IjoiYWxleGw0ZCIsImEiOiJjbGNxYTBya20wM3kzM3BsaG5sMmI3aDJvIn0.xoKxcGuInNP84ReSTKmPHg';

const mapAS = L.map('ASmap').setView([5.44, 115.38], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	accessToken: apiKey
}).addTo(mapAS);

const alexRegalia = L.marker([3.164702, 101.693180]).addTo(mapAS);

let template1 = '<img src="images/Map Images/Asia/Alex Regalia.jpg" alt="why" class="single-img" />'

alexRegalia.bindPopup(template1);

const alors = L.marker([3.146392677153059, 101.70953842870944]).addTo(mapAS);

let template2 = '<img src="images/Map Images/Asia/Alors.jpg" alt="why" class="single-img" />'

alors.bindPopup(template2);

const batuStairs = L.marker([3.237700901564194, 101.68395511231579]).addTo(mapAS);

let template3 = '<img src="images/Map Images/Asia/Batu Stairs.jpg" alt="why" class="single-img" />'

batuStairs.bindPopup(template3);

const graveyard = L.marker([3.1602960316234734, 101.70852284825158]).addTo(mapAS);

let template4 = '<img src="images/Map Images/Asia/Graveyard.jpg" alt="why" class="single-img" />'

graveyard.bindPopup(template4);

const mosqueInside = L.marker([3.1720819099240525, 101.67060706140143]).addTo(mapAS);

let template5 = '<img src="images/Map Images/Asia/Mosque Inside.jpg" alt="why" class="single-img" />'

mosqueInside.bindPopup(template5);

const petronas = L.marker([3.1580266845500087, 101.71170791197864]).addTo(mapAS);

let template6 = '<img src="images/Map Images/Asia/Petronas.jpg" alt="why" class="single-img" />'

petronas.bindPopup(template6);
