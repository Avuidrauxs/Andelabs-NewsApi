var React = require('react');

var NewsApi = require('NewsApi');

var AllNews = React.createClass({

  setNews: function (){
    var that = this;
    NewsApi.getNews('sport').then(function (sources){
      that.setState({
        sources: sources
      })
    },function (error){
      alert(error);
    });

  },
  render: function (){
    function renderNews(){

    }
    return (
      <div>
        <h1>All News</h1>
        {this.state.sources}

      </div>
    );
  }
});

module.exports = AllNews;
