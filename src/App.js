import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import HomepageLayout from "./layouts/HomepageLayout";
import About from "./pages/About";
import Services from "./pages/Services";
import ErrorPage from "./pages/ErrorPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomepageLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
