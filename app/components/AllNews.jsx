var React = require('react');

var NewsApi = require('NewsApi');

var AllNews = React.createClass({
  getInitialState: function (){
    return {
      //sources: 'Nope'
    }
  },
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
        {this.setNews()}
        <p>{this.state.sources}</p>

      </div>
    );
  }
});

module.exports = AllNews;
