
import './App.scss';
import AboutBlock from './components/AboutBlock/AboutBlock';
import BenefitsBlock from './components/BenefitsBlock/BenefitsBlock';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BenefitsBlock/>
      <AboutBlock/>
      <Footer/>
    </div>
  );
}

export default App;
