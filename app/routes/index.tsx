import IMGHeroMobile from "../assets/images/home-hero-mobile.jpg";
import IMGHeroTablet from "../assets/images/home-hero-tablet.jpg";
import IMGHeroDesktop from "../assets/images/home-hero-desktop.jpg";
import SVGRightArrow from "../assets/svg/RightArrow";
import SVGLine from "../assets/svg/Line";
import SVGWhiteCircles from "../assets/svg/WhiteCircles";
import type { LinksFunction } from "@remix-run/node";
import mobileStyles from  "css/pages/home/homeMobile.css";
import styles from  "css/pages/home/homeShared.css";
import tabletStyles from  "css/pages/home/homeTablet.css";
import desktopStyles from  "css/pages/home/homeDesktop.css";

export const links: LinksFunction = () => {
  return[
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: desktopStyles,
      media: "(min-width: 1032px)",
    },
    {
      rel: "stylesheet",
      href: tabletStyles,
      media: "(max-width: 1031px)",
    },
    {
      rel: "stylesheet",
      href: mobileStyles,
      media: "(max-width: 600px)",
    },
  ];
}
export default function Index() {
  return (
    <>
      <div className="home_header">
        <picture>
          <source  media="(min-width: 800px)" srcSet={IMGHeroDesktop}/>
          <source  media="(min-width: 480px)" srcSet={IMGHeroTablet}/>
          <img className="home_header_image" src={IMGHeroMobile}/>
        </picture>

        <div className="home_header_text">
            <h1>Scooter sharing made simple</h1>
            <div className="home_text-image">
            <div className="home_svg-line"><SVGLine/></div>
              <p>
                Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient 
                locations in each of our cities. Use our app to locate the nearest bike, unlock 
                it with a tap, and you’re away!
              </p>
            
          <div className="home_svg-right-arrow"><SVGRightArrow/></div>
       
          <div className="home_svg-white-circles"><SVGWhiteCircles/></div>
          </div>
     
          <button>
              Get Scootin
            </button>
            
          
          </div>
          
      </div>
    </>
  );
}
