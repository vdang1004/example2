$(document).ready(function() {
//Array for searched topics to be added
var topics = [];

 	function displayFourSquarePhotos() {

	var queryURL = "https://api.foursquare.com/v2/venues/43695300f964a5208c291fe3/photos?&oauth_token=YMBHCFYQYBFVVIIVJ4RAZNN0AMDXWEO5KEWZJX0X2JFGXDHB&v=20180625";

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
        	var results = response.data;
        	console.log(results);
        });
	};
});