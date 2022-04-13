import logo from './logo.svg';
// import './App.css';
import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Candidate from './componenets/Candidate';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Candidate />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
