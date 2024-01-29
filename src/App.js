import './App.css';
import Allroutes from './Routes/Allroutes';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
