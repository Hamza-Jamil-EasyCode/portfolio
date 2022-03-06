import { useState, useEffect } from "react";
import { Link, useLocation, useHistory, useNavigate } from "react-router-dom";

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState();

  const link = location.pathname;

  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowSize({ width, height });
  };

  const menuClose = (e, page) => {
    e.preventDefault();
    navigate(page);
    if (windowSize.width > 992) return;
    const element = document.getElementById("toggle_btn");
    element.click();
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="top_nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="brand_logo">
            <Link to="/">Easy Code</Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="toggle_btn"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse top_nav-list"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link
                to="/"
                className={`${link === "/" ? "activeLink" : null}`}
                aria-current="page"
                onClick={(e) => menuClose(e, "/")}
              >
                Home
              </Link>
              <Link
                to="services"
                className={`${link === "/services" ? "activeLink" : null}`}
                aria-current="page"
                onClick={(e) => menuClose(e, "/services")}
              >
                Services
              </Link>
              <Link
                to="about"
                className={`${link === "/about" ? "activeLink" : null}`}
                aria-current="page"
                onClick={(e) => menuClose(e, "/about")}
              >
                About Us
              </Link>
              <Link
                to="contact"
                className={`${link === "/contact" ? "activeLink" : null}`}
                aria-current="page"
                onClick={(e) => menuClose(e, "/contact")}
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;

{
  /* 
        <div className='top_nav'>
            <div className="brand_logo">
                <Link to="/" >Easy Code</Link>
            </div>
            <div className="top_nav-list">
                <ul>
                    <Link to="/" className={link === "/" ? 'active' : null}> Home </Link>
                    <Link to="services" className={link === "/services" ? 'active' : null} > Services </Link>
                    <Link to="about" className={link === "/about" ? 'active' : null} > About Us </Link>
                    <Link to="contact" className={link === "/contact" ? 'active' : null} > Contact Us </Link>
                </ul>
            </div>
        </div>
             */
}
