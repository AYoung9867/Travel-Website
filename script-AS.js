
const apiKey = 'pk.eyJ1IjoiYWxleGw0ZCIsImEiOiJjbGNxYTBya20wM3kzM3BsaG5sMmI3aDJvIn0.xoKxcGuInNP84ReSTKmPHg';

const mapAS = L.map('ASmap').setView([5.44, 115.38], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	accessToken: apiKey
}).addTo(mapAS);

const regaliaView = L.marker([3.164702, 101.693180]).addTo(mapAS);

let template = '<div style="text-align: center;" ><img src="images\Map Images\Asia\Alex Regalia.jpg" style="width: 20px;"></div>'

regaliaView.bindPopup(template);