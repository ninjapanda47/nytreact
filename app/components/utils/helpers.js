// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var helper = {

  runQuery: function(term, startyear, endyear) {
    console.log(term, startyear, endyear );
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q=" + term + "&begin_date=" + startyear + "0101" +  "&end_date=" + endyear + "0101"; 

    return axios.get(queryURL).then(function(response) {
    var headlines = [];
    for (var i = 0; i < 5; i++) {
      headlines.push(response.data.response.docs[i].headline.main);
    }     

    return headlines; 
})

  }
};


// We export the API helper
module.exports = helper;
