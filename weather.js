
const label = document.getElementById('weather');

if (navigator.geolocation) 
{
	navigator.geolocation.getCurrentPosition(setLabel);
}
else 
{
	label.textContent = 'Can not locate your position!!!';
}

//fetching  api
function setLabel(position) 
{
	let link = 'http://api.weatherunlocked.com/api/current/'+
					 + position.coords.latitude + ','
					 + position.coords.longitude
					 + '?app_id=ac129dac' + '&app_key=04d2e1906e54292dd71a71ca7c8e4892';

	var request = new XMLHttpRequest();
	request.addEventListener("load", weather);
	request.open("GET", link);
	request.responseType = "json";
	request.send();
}


const weather = (insert) => {	

	data = insert.currentTarget.response;

	labelText = "&nbsp; Weather at your city: " + "&nbsp;" + data.wx_desc + "&nbsp; - "
					+ "&nbsp; Temperature: " + data.temp_c + "°C" + "&nbsp; - " + "&nbsp; Humidity: " + data.humid_pct + "%&nbsp;" 
	label.innerHTML = labelText;
}
