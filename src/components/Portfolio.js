import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";

const Portfolio = () => {
  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(false);

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup} close={() => setPopup(false)} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Digital Creations</h3>
            <p>
              Check out my portfolio to see the projects I’ve worked on!
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("youtube")}`}
                  onClick={handleFilterKeyChange("youtube")}
                >
                  {/**!! Youtube */}
                  Frontend
                </a>
              </li>
              {/* <li>
                <a
                  className={`c-pointer ${activeBtn("vimeo")}`}
                  onClick={handleFilterKeyChange("vimeo")}
                >
                  Tools
                </a>
              </li> */}
              <li>
                <a
                  className={`c-pointer ${activeBtn("soundcloud")}`}
                  onClick={handleFilterKeyChange("soundcloud")}
                >
                  {/* Soundcloud */}
                  Full Stack
                </a>
              </li>
              {/* <li>
                <a
                  className={`c-pointer ${activeBtn("popup")}`}
                  onClick={handleFilterKeyChange("popup")}
                >
                  Backend
                </a>
              </li> */}
              <li>
                <a
                  className={`c-pointer  ${activeBtn("detail")}`}
                  onClick={handleFilterKeyChange("detail")}
                >
                  Backend & Tools
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
              {/* ComfortJouney */}
              {/* <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Comfortjourney"
                    data-category="Full Stack WebApp"
                  >
                    <a
                      // className="popup-youtube"
                      href="https://www.comfortjourney.in/"
                      target="_blank" rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34 copy.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/comfort.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>comfortjourney</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li> */}

              {/* Brand */}
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Uniclips Brand"
                    data-category="Full Stack"
                  >
                    <a
                      // className="popup-youtube"
                      href="https://guc-fe-user-test.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/BrandSS.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Unliclips</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>

              {/* Website */}
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Portfolio"
                    data-category="Frontend"
                  >
                    <a
                      // className="popup-youtube"
                      href="https://patil-sandhya.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/WebsiteSS.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Portfolio</h3>
                    <span>Frontend</span>
                  </div>
                </div>
              </li>
              {/*  */}
              {/* <li className="vimeo grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Comfortjouney"
                    data-category="Vimeo"
                  >
                    <a
                      className="popup-vimeo"
                      href="https://player.vimeo.com/video/337293658?autoplay=1"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ave Bottle</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li> */}
              {/* Cheers shop */}
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Ecommerce"
                    data-category="Full Stack"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://forky-ten.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/forky.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Ecommerce</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>

              {/* Gem Garden */}
              <li className="youtube grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Gem Garden"
                    data-category="Full Stack "
                  >
                    <a
                      // className="popup-youtube"
                      href="https://gemgarden.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/thumbs/42-34 copy.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/GemSS.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Gem Garden</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>
              {/* Uniclips Creator */}
              <li className="soundcloud grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Uniclips Creator"
                    data-category="Full Stack"
                  >
                    <a
                      className="soundcloude_link mfp-iframe audio"
                      href="https://guc-fe-creator.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/CreatorSS.png"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>ComfortJourney</h3>
                    <span>Full Stack</span>
                  </div>
                </div>
              </li>

              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Scott Felix"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/5.jpg">
                      <img src="img/thumbs/42-56.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Blue Lemon</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}
              {/* <li className="popup grid-item">
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Art Stone"
                    data-category="Popup"
                  >
                    <a className="zoom" href="img/portfolio/4.jpg">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Art Stone</h3>
                    <span>Popup</span>
                  </div>
                </div>
              </li> */}

              <li className="detail grid-item" onClick={() => setPopup(true)}>
                <div className="inner">
                  <div
                    className="entry dizme_tm_portfolio_animation_wrap"
                    data-title="Tool Summary"
                    data-category="Detail"
                  >
                    <a className="portfolio_popup" href="#">
                      <img src="img/thumbs/42-34.jpg" alt="image" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Backend.jpg"
                      />
                    </a>
                  </div>
                  <div className="mobile_title">
                    <h3>Tool Summary</h3>
                    <span>Backend</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
