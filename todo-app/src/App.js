import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Page1 from './components/Page1';
import FOA from './components/FOA';
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/page1" element={<Page1 />}></Route>
            <Route path="/foa" element={<FOA />}></Route>

        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
