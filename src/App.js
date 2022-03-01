import Navbar from './components/navbar';
import Section from './components/section';
import Projects from './components/projects';
import CarouselFront from './components/carouselFront'
import CarouselBack from './components/carouselBack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <CarouselFront />
      <CarouselBack />
      <Projects />
    </div>
  );
}

export default App;
