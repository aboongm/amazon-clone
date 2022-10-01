import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
import Home from './components/Home';
import Layout from './components/Layout';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* public */}
          <Route path="/checkout" element={<Checkout />} />
          <Route exact path="/" element={<Home />} />

          {/* protected */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
