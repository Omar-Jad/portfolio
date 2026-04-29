import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/navbar';
import Banner from './components/banner';
import Skills  from './components/skills';
import Projects from './components/projects';
import {Contact} from './components/contact';
import { NewsLetter } from './components/newsletter';
import {Footer} from './components/footer'
import './components/projects.css';
function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <NewsLetter/>
      <Footer/>
    </div>
    
  );
}

export default App;

