import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Header from './components/Header';
import NavBar from './components/NavBar'; 
import MovieList from './components/MovieList';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import Offers from './components/Offers';
import './App.css'; // Your custom CSS

function App() {

  // Initialize the fairy-dust cursor effect globally
  useEffect(() => {
    fairyDustCursor();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Template formType={"login"} />} />
          <Route path="/signup" element={<Template formType={"signup"} />} />
        </Routes>
      </Router>
    </div>

  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <ImageSlider />
        <MovieList />
        <Offers />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
