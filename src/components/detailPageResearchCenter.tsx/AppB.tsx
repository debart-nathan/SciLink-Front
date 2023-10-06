import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Home from '../Home';
import PageDetailResearchCenter from '../detailPageResearchCenter.tsx/PageDetailResearchCenter';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="/DetailResearchCenter/:id" element={<PageDetailResearchCenter/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;