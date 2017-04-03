// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Geocoder API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// Helper functions for making API Calls
var helper = {

  runQuery: function(term, startyear, endyear) {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q=" + term + "&begin_date=" + startyear + "0101" +  "&end_date=" + endyear + "0101"; 

    return axios.get(queryURL).then(function(response) {
    var headlines = [];
    var link = [];
    for (var i = 0; i < 5; i++) {
      headlines.push(response.data.response.docs[i].headline.main);
      link.push(response.data.response.docs[i].web_url);
    }     
   
    var savedLinks = []; //to be use for filter
    var art = [];
    for (var i = 0; i < 5; i++) {
      var obj = {
        'id': i,
        'headlines': response.data.response.docs[i].headline.main,
        'link': response.data.response.docs[i].web_url
      }
      art.push(obj);
    }     
    return art; 
    })

  },

  // This function posts new searches to our database.
  postArticles: function(headlines, link) {
    var newArticle = {title: headlines, url: link, saved: true};
    return axios.post("/api", newArticle)
    .then(function(response){
  
    })
  },

  getArticles: function() {
    return axios.get("/api")
    .then(function(response){
      console.log(response.data[0].title);
    var sheadlines = [];
    var slink = [];
    for (var i = 0; i < response.data.length; i++) {
      sheadlines.push(response.data[i].title);
      slink.push(response.data[i].url);
    }     
    var sart = [];
    for (var i = 0; i < response.data.length; i++) {
      var sobj = {
        'id': response.data[i]._id,
        'headlines': response.data[i].title,
        'link': response.data[i].url
      }
      sart.push(sobj);
    }     
    return sart; 
    })
  },


};


// We export the API helper
module.exports = helper;
