import logo from './logo.svg';
import './App.css';
import Accordian from './components/accodian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMOreData from './components/load-more-data';
import TreeView from './components/tree.view';
import treeData from './components/tree.view/data';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';


function App() {
  return (
    <div className="App">
      {/* <Accordian/>
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <ImageSlider /> */}
      {/* <LoadMOreData/> */}

      {/* <TreeView menus={treeData}/> */}

      {/* <QRCodeGenerator/> */}

      {/* <LightDarkMode/> */}



      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </div>
  );
}

export default App;

////
