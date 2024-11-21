import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import GetQuote from "./Components/GetQuote";
import JoinUs from "./Components/JoinUs";
// import JoinusForm from "./Components/JoinusForm";
import LoginPage from "./DashboardPages/LoginPage";
import DashBoard from "./DashboardPages/DashBoard";
// import JoinUsUploads from "./Components/JoinUsUploads";
// import CustomerDetails from "./DashboardPages/CustomerDetails";
import CustomerFullDetails from "./Components/CustomerFullDetails";
import ThankyouPage from "./Components/ThankyouPage";
import TermsOfService from "./Components/TermsOfService";
import Privacypolicy from "./Components/Privacypolicy";
import Stickyicons from "./Components/Stickyicons";
import MagicLink from "./Components/Magiclinks/MagicLink";
import LandingPage from "./Components/LandingPage";
import MoreDetail from "./Components/MoreDetail";

function App() {
  const location = useLocation();

  const isDashboardPage = () => {
    const dashboardRoutes = [
      "/dashboard",
      "/login",
      "/users",
      "/Leads",
      "/Installers",
      "/CustomerDetails",
    ]; // Add your dashboard routes here
    return dashboardRoutes.some((route) => location.pathname.startsWith(route));
  };
  const isLandingPage = () => location.pathname === "/landingPage";
  return (
    <div className="App">
      {!isDashboardPage() && !isLandingPage() && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/thank" element={<MoreDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/getquote" element={<GetQuote />} />
        {/* <Route path="/joinusform" element={<JoinusForm />} /> */}
        {/* <Route path="/joinusuploads" element={<JoinUsUploads />} /> */}
        <Route path="/customer" element={<CustomerFullDetails />} />
        <Route path="/thankyoupage" element={<ThankyouPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />

        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/magiclink" element={<MagicLink />} />
      </Routes>
      {!isDashboardPage() && !isLandingPage() && <Stickyicons />}
      {!isDashboardPage() && !isLandingPage() && <NewsLetter />}
      {!isDashboardPage() && <Footer />}
    </div>
  );
}

export default App;
