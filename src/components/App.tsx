import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./common/Headers/Header";
import Footer from "./common/Footers/Footer";
import SizeButton from "./common/SizeButtons";
import Home from "./Home";
import SearchPage from "./SearchPage";
import ContactUs from "./common/Footers/ContactUs";
import Mentions from "./common/Footers/Mentions";
import PageDetailInvestor from "./detailPageInvestor/PageDetailInvestor";
import PageDetailResearcher from "./detailPageResearcher/PageDetailResearcher";
import PageDetailResearchCenter from "./detailPageResearchCenter/PageDetailResearchCenter";
import PageDetailUser from "./detailPageUser/PageDetailUser";
import AdminPage from "./AdminPage";
import Connexion from "./Connexion/Connexion";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState("1em");

  const handleFontSizeChange = (newFontSize: string) => {
    setFontSize(newFontSize);
  };
  return (
    <BrowserRouter>
      <div className="background">
        <Header />
        <div className="container ">
          <SizeButton onFontSizeChange={handleFontSizeChange} />
          <div className="fontSize" style={{ fontSize }}>
            <Routes>
              <Route path="/login" element={<Connexion />} />
              <Route path="/user/:id" element={<PageDetailUser />} />
              <Route
                path="/researchCenter/:id"
                element={<PageDetailResearchCenter />}
              />
              <Route path="/researcher/:id" element={<PageDetailResearcher />} />
              <Route path="/investor/:id" element={<PageDetailInvestor />} />
              <Route path="/recherche" element={<SearchPage />}></Route>
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/Mentions" element={<Mentions />} />
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
