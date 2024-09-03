import logo from './logo.svg';
import './App.css';
import Newheader from '../src/components/Newheader';
import Banner from './components/Banner';
import Cards from './components/Cards';
import { ImageText } from './components/ImageText';
function App() {
  return (
    <div className="App">
     <Newheader />
     <Banner />
     <Cards />
     <ImageText />
    </div>
  );
}

export default App;
