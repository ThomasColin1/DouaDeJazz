import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/*import {
  Home,
  Footer
} from "./components";*/
import Home from "./components/Home.js"
import Footer from "./components/Footer.js"
import About from "./components/About.js"
import Artistes from "./components/Artistes.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div class="general">
    <Routes>
      
      <Route path="/" element={<Home />} class="general"/>
      <Route path="/about" element={<About />} class="general"/>
      <Route path="/artistes" element={<Artistes />} class="general"/>
      {/*<Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />}>
        <Route path="" element={<Posts />} />
        <Route path=":postSlug" element={<Post />} />
</Route>*/}

    </Routes>
    </div>
    <div class="general">
      <Footer class="general"/>
    </div>
  </Router>,

  document.getElementById("root")
);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
      <Home/>
    </div>
  </React.StrictMode>
);*/

