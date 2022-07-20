import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Container from './components/Container/Container';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
    <Navbar />
    <Container>
      <AboutMe />
    </Container>
    </>
  );
}

export default App;
