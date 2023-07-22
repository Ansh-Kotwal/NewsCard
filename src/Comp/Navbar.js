import React, { Component } from 'react'


export class Navbar extends Component {

  constructor() {
    super();
    this.state =
    {
      time : ""
    }

  }

  componentDidMount()
  {
    setInterval(() => {
      const d = new Date();
      this.setState({time: d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })})
    }, 100);
  }




  render() {

  


    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container-fluid">
          <div className='me-2 fw-bolder fs-5 border-end pe-2 border-dark border-3 me-4'>
                  {this.state.time}
                </div>
            <a className="navbar-brand fw-semibold" href="/" >News Card</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <a className="nav-link active" href="/India">India</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/World">World</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Business">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/Crypto">Crypto</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Technology">Technology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Science">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/Health">Health</a>
                </li>
                <li><form className="d-flex ms-5" role="search">
                  <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit" >Search</button>
                </form></li>
              </ul>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Dark Mode</label>
              </div>
            </div>
          </div>
        </nav>

    )
  }
}

export default Navbar
