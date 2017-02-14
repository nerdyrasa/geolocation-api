
function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	var latlon = latitude + "," + longitude;
	//var imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon +
	//	"&zoom=14&size=400x300&sensor=false&key=AIzaSyBwPVLHkMHn3e7BX0MzQHLki_efPdTX35c";
  //
	//document.getElementById("mapholder").innerHTML = "<img src='" + imgUrl + "'>";

	var pLocation = document.getElementById("location");
	pLocation.innerHTML += latitude + ", " + longitude + "<br>";
}

function displayError(error) {
	var errors = ["Unknown error", "Permission denied by user", "Position is not available", "Timeout error"];
	var message = errors[error.code];
	console.warn("Error in getting your location: ", message, error.message)
}

window.onload = function() {
	if (navigator.geolocation) {
		//
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);
	} else {
		alert("Sorry, this browser doesn't support geolocation!");
	}
}


