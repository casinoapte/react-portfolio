import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home"
import Projects from "./components/pages/Projects"
import Pictures from "./components/pages/Pictures"
import Contact from "./components/pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <>
      <Navbar />
       <Route exact path ="/" component={Home} />
       <Route exact path ="/projects" component={Projects} />
       <Route exact path ="/pictures" component={Pictures} />
       <Route exact path ="/contact" component={Contact} />
      <Footer />
      </>
    </Router>
  );
}

export default App;
