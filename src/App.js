import './main.min.css';
import '../node_modules/normalize.css/normalize.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from './pages/NoPage';
import Nav from './Nav';


function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
