
var axios = require("axios");

var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var helper = {

  runQuery: function(term, startyear, endyear) {
    var savedLinks = [];
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
 authKey + "&q=" + term + "&begin_date=" + startyear + "0101" +  "&end_date=" + endyear + "0101"; 

        this.getLinks().then(function(res){
        var savedLinks = res;
        console.log(savedLinks);
        });//this will be a filter in the future

    return axios.get(queryURL).then(function(response) {
    var headlines = [];
    var link = [];
    for (var i = 0; i < 5; i++) {
      headlines.push(response.data.response.docs[i].headline.main);
      link.push(response.data.response.docs[i].web_url);
    }     
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



  postArticles: function(headlines, link) {
    var newArticle = {title: headlines, url: link, saved: true};
    return axios.post("/api", newArticle)
    .then(function(response){
      
    })
  },


  getArticles: function() {
    return axios.get("/api")
    .then(function(response){
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

  deleteArticles: function(id) {
    console.log(id);
    return axios.put("/api", {params: {id: id}})
    .then(function(response){
    })
  },

  getLinks: function() {
    return axios.get("/api")
    .then(function(response){
      var savedLinks = [];
      for (var i = 0; i < response.data.length; i++){
        savedLinks.push(response.data[i].url);
      }
      return savedLinks;
    })
  }


};


module.exports = helper;
