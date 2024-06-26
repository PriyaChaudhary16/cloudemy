import './App.scss';
import './assest/styles/main.scss'
import './assest/styles/responsive.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import Home from './pages/Home';
import Navigation from './routes/Navigation';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
