
import './App.css';
import LowMid from './components/Body/MidSection/LowMid/LowMid';
import MidSection from './components/Body/MidSection/MidSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MidSection />
      <LowMid />
      <Footer />
    </div>
  );
}

export default App;
