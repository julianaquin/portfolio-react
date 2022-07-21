import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container/Container';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
    </>
  );
}

export default App;
