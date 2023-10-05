import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>

        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
