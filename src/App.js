import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Section from './components/section';
// import Projects from './components/projects';
// import CarouselFront from './components/carouselFront'
// import CarouselBack from './components/carouselBack';
// import Test from './components/test';

function App() {
  return (
    <div className="App">
      {/* <Test /> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' />
        </Routes>
      </Router>
      {/* <Section /> */}
      {/* <CarouselFront /> */}
      {/* <CarouselBack /> */}
      {/* <Projects /> */}
    </div>
  );
}

export default App;
