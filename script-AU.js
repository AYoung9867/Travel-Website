
const apiKey = 'pk.eyJ1IjoiYWxleGw0ZCIsImEiOiJjbGNxYTBya20wM3kzM3BsaG5sMmI3aDJvIn0.xoKxcGuInNP84ReSTKmPHg';

const mapAU = L.map('AUmap').setView([-25.80, 139.68], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    //attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	accessToken: apiKey
}).addTo(mapAU);

