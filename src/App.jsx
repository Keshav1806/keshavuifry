
import './App.css'
import Navbar from './components/Navbar'
import "./assets/css/style.css";
import Home from './components/Home';
import About from './components/About';
import Review from './components/Review';
import Faq from './components/Faq';
import Banner from './components/Banner';
import Foot from './components/Foot';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Review/>
      <Faq/>
      <Banner/>
      <Foot/>
    </>
  )
}

export default App
