import React, { Component } from 'react'
import Newscomp from './Newscomp'
import Spin from './Spin';




export class NewsMain extends Component {



  constructor() {
    super();
    this.state =
    {
      articles: [],
      loading : false
    }

  }



  async componentDidMount() {
    

    let url = `http://newsapi.org/v2/everything?q=${this.props.q}&language=en&sortBy=publishedAt&apiKey=8149e4dbadd347318cc984949a714823`;
    this.setState({ loading : true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles , loading : false})

  }

 
  render() {


    var k = this.state.articles.length;
    var j = k / 6;
    var i = 0;

    return (
      <>

        <div className="container-fluid my-4 " >
          {this.state.loading && <Spin />}
          <h4 >{this.props.h}</h4>

          <div className="row">

            <div className="col-lg-2 col-md-12 mb-4 mb-lg-0" >
              {
                this.state.articles.slice(0, i = i + j).map((element) => {
                  return <div className="row " key={element.url}>
                    <Newscomp url={element.url} title={element.title} desc={element.description.slice(0, 80)} iurl={element.urlToImage} source = {element.source.name} />
                  </div>
                })
              }
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-lg-0" >
              {
                this.state.articles.slice(i, i = i + j).map((element) => {
                  return <div className="row " key={element.url}>
                    <Newscomp url={element.url} title={element.title} desc={element.description.slice(0, 80)} iurl={element.urlToImage}  source = {element.source.name}/>
                  </div>
                })
              }
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-lg-0" >
              {
                this.state.articles.slice(i, i = i + j).map((element) => {
                  return <div className="row " key={element.url}>
                    <Newscomp url={element.url} title={element.title} desc={element.description.slice(0, 80)} iurl={element.urlToImage} source = {element.source.name} />
                  </div>
                })
              }

            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-lg-0" >
              {
                this.state.articles.slice(i, i = i + j).map((element) => {
                  return <div className="row " key={element.url}>
                    <Newscomp url={element.url} title={element.title} desc={element.description.slice(0, 80)} iurl={element.urlToImage} source = {element.source.name} />
                  </div>
                })
              }
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-lg-0" >
              {
                this.state.articles.slice(i, i = i + j).map((element) => {
                  return <div className="row " key={element.url}>
                    <Newscomp url={element.url} title={element.title} desc={element.description.slice(0, 80)} iurl={element.urlToImage} source = {element.source.name} />
                  </div>
                })
              }
            </div>
            <div className="col-lg-2 col-md-12 mb-4 mb-lg-0" >
              {
                this.state.articles.slice(i, i = i + j).map((element) => {
                  return <div className="row " key={element.url}>
                    <Newscomp url={element.url} title={element.title} desc={element.description.slice(0, 80)} iurl={element.urlToImage} source = {element.source.name} />
                  </div>
                })
              }

            </div>

          </div>

        </div >
      </>
    )
  }
}


export default NewsMain