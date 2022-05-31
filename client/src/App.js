import './App.css';
import HomePage from './components/HomePage';
import Store from './components/Store';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
        <Route path="/store" element={<Store />} />
        </Route>      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
