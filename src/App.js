import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Main from './components/Main';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
