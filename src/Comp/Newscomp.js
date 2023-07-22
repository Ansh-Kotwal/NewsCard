import React, { Component } from 'react'


export default class Newscomp extends Component {


  render() {
    let { title, desc, url, iurl, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card w-200 shadow">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" >
          {source.slice(0,30)}
        </span>
          <img src={iurl?iurl:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} className="card-img-top img-responsive  h-25" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}... </p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>

      </div>


    )
  }
}

