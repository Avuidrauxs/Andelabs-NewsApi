var axios = require('axios');

const NEWS_API_URL = 'https://newsapi.org/v1/sources?apiKey=213327409d384371851777e7c7f78dfe';

module.exports = {
  getNews: function (category){
    var encodedCategory = encodeURIComponent(category);
    var requestUrl = `${NEWS_API_URL}&category=${encodedCategory}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.status === 'ok' && res.data.sources === []){
        throw new Error('Error no news');
      }else {
        return res.data.sources[0].id;
      }
    },function(res){
      throw new Error('Error no news')
    })
  }
}
