import './App.css';
import Footer from './components/footer'
import Hero from './components/hero1'
import RepairCardBlock from './components/repairCardBlock';
import Audi from './components/audi';
import Record from './components/record';
import Tuning from './components/tuning';


const App = () => {

  return (
    <section id="App" >
      <Hero />
      <RepairCardBlock />
      <Audi />
      <Record />
      <Tuning />
      <Footer />
    </section>
  );
}

export default App;
