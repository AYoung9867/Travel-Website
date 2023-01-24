
const apiKey = 'pk.eyJ1IjoiYWxleGw0ZCIsImEiOiJjbGNxYTBya20wM3kzM3BsaG5sMmI3aDJvIn0.xoKxcGuInNP84ReSTKmPHg';

const mapEU = L.map('EUmap').setView([48.61, 13.67], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	accessToken: apiKey
}).addTo(mapEU);

//adding marker

const alexRegalia = L.marker([3.164702, 101.693180]).addTo(mapAS);

let template1 = '<img src="images/Map Images/Asia/Alex Regalia.jpg" alt="why" class="single-img" />'

alexRegalia.bindPopup(template1); 