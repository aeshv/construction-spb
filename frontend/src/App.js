
import './App.scss';
import AboutBlock from './components/AboutBlock/AboutBlock';
import BenefitsBlock from './components/BenefitsBlock/BenefitsBlock';
import Footer from './components/Footer/Footer';
import ImagesGallery from './components/ImagesGallery/ImagesGallery';
import FirstBlock from './components/FirstBlock/FirstBlock';

function App() {
  return (
    <div className="App">
      <FirstBlock/>
      <ImagesGallery/>
      <BenefitsBlock/>
      <AboutBlock/>
      <Footer/>
    </div>
  );
}

export default App;
