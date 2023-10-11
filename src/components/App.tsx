import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./common/Headers/Header";
import Footer from "./common/Footers/Footer";
import Home from "./Home";
import SearchPage from "./SearchPage";
import ContactUs from "./common/Footers/ContactUs";
import Mentions from "./common/Footers/Mentions";
import PageDetailInvestor from "./detailPageInvestor/PageDetailInvestor";
import PageDetailResearchCenter from "./detailPageResearchCenter/PageDetailResearchCenter";
import PageDetailUser from "./detailPageUser/PageDetailUser";
import AdminPage from "./AdminPage";
import Connexion from "./Connexion/Connexion";


function App() {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/login" element={<Connexion />} />
                    <Route path="/user/:id" element={<PageDetailUser />} />
                    <Route
                        path="/researchCenter/:id"
                        element={<PageDetailResearchCenter />}
                    />
                    <Route
                        path="/investor/:id"
                        element={<PageDetailInvestor />}
                    />
                    <Route path="/recherche" element={<SearchPage />}></Route>
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/Mentions" element={<Mentions />} />
                    <Route path="/admin" element={<AdminPage />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
