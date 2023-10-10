import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./common/Headers/Header";
import Footer from "./common/Footers/Footer";
import Home from "./Home";
import SearchPage from "./SearchPage";
import ContactUs from './common/Footers/ContactUs';
import Mentions from './common/Footers/Mentions';
import PageDetailInvestor from "./detailPageInvestor/PageDetailInvestor";
import PageDetailResearchCenter from "./detailPageResearchCenter/PageDetailResearchCenter";
import PageDetailUser from "./detailPageUser/PageDetailUser";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/user/:id" element={<PageDetailUser />} />
                <Route path="/researchCenter/:id" element={<PageDetailResearchCenter />} />
                <Route path="/investor/:id" element={<PageDetailInvestor />} />
                <Route path="/recherche" element={<SearchPage />}></Route>
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/Mentions" element={<Mentions />} />
                <Route path="/" element={<Home />}></Route>
            </Routes>
          <Footer/>
        </BrowserRouter>
   );
}

export default App;
