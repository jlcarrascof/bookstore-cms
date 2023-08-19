import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
          <h1>Bookstore</h1>
          <Routes>
            <Route path="/" element={<Book />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </header>
      </Router>
    </div>
  );
}

export default App;
