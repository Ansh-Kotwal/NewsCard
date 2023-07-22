import { useState } from 'react';
import './App.css';
import Navbar from './Comp/Navbar';
import NewsMain from './Comp/NewsMain';
import NewsName from './Comp/NewsName';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {

  document.body.style.backgroundColor = "#ecf6ff"

   const [search , setsearch] = useState ("")


   const sea = (q) =>
   {
     setsearch(q);
   }



  return (
    <>
      <Router>
        <NewsName />
        <Navbar sea={search} />
        <Routes>
          <Route path="/" element={<NewsMain  q='Headlines' h='Top Headlines' />} />
          <Route path="/India" element={<NewsMain q='India' h='India News' />} />
          <Route path="/World" element={<NewsMain q='World' h='World News'/>} />
          <Route path="/Business" element={<NewsMain q='Business' h='Business News'/>} />
          <Route path="/Crypto" element={<NewsMain q='Crypto' h='Crypto News'/>} />
          <Route path="/Entertainment" element={<NewsMain q='Entertainment' h='Entertainment News'/>} />
          <Route path="/Sports" element={<NewsMain q='Sports' h='Sports News'/>} />
          <Route path="/Technology" element={<NewsMain q='Technology' h='Technology News'/>} />
          <Route path="/Science" element={<NewsMain q='Science' h='Science News'/>} />
          <Route path="/Health" element={<NewsMain q='Health' h='Health News '/>} />
          {/* <Route path={`/${}`} element={<NewsMain q='Health' h='Health News '/>} /> */}
        </Routes>
      </Router>

    </>
  );
}

export default App;
