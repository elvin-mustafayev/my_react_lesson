
import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import About from './pages/About/About';
import {BrowserRouter as Router,
Routes,Route} from 'react-router-dom'
import Users from './pages/Users/Users';
import Counter from './components/Counter/Counter';
import CounterContext from './components/Context/CounterContext';
function App() {
  

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App
