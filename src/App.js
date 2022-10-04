import './App.css';
import Header from './components/header'
import Footer from './components/footer'
import Hero from './components/hero'
import Body from './components/body';


const App = () => {

  return (
    <div className="App">
      <Header />
      <Hero />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
