
import './App.scss';
import AboutBlock from './components/AboutBlock/AboutBlock';
import BenefitsBlock from './components/BenefitsBlock/BenefitsBlock';
import Footer from './components/Footer/Footer';
import ImagesGallery from './components/ImagesGallery/ImagesGallery';
import FirstBlock from './components/FirstBlock/FirstBlock';
import Spacer from './components/UI/Spacer/Spacer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstBlock/>
      <Spacer type="xxl"/>
      <BenefitsBlock/>
      <Spacer type="xl"/>
      <ImagesGallery/>
      <Spacer type="xl"/>
      <AboutBlock/>
      <Spacer type="xl"/>
      <Footer/>
    </div>
  );
}

export default App;
