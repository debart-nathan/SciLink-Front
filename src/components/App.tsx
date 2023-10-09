import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footers/Footer';
import Home from './Home';
import ContactUs from './common/Footers/ContactUs';
import Mentions from './common/Footers/Mentions';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Mentions" element={<Mentions />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
