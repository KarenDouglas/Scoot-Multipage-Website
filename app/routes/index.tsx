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
import SVGLocate from "../assets/svg/Locate";
import SVGRide from "../assets/svg/Ride";
import SVGScooter from "../assets/svg/Scooter";

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
  interface DescriptionProps{
    icon: JSX.Element;
    title: string;
    description: string;
  }
  function Description({ icon, description, title} :DescriptionProps):JSX.Element {
    return(
      <div className="home_description">
          <div className="home_description_icon">
            <i>{icon}</i>
          </div>
          <div className="home_description_title-container">
          <h2>{title}</h2>
          <div className="home_description_text">
            <p>{description}</p>
          </div>
          </div>
          
        </div>
    )
  }
  return (
    <>
      <div className="home_header">
        <picture>
          <source  media="(min-width: 1032px)" srcSet={IMGHeroDesktop}/>
          <source  media="(min-width: 600px)" srcSet={IMGHeroTablet}/>
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
      <section className="home_description_container">
        <div className="home_description-border"></div>
        <Description
        title="Locate with app"
        icon={<SVGLocate/>}
        description="Use the app to find the nearest scooter to you. We are continuously placing scooters 
        in the areas with most demand, so one should never be too far away. "
        />
        <Description
        title="Pick your scooter"
        icon={<SVGScooter/>}
        description=" We show the most important info for the scooters closest to you. So you know how much 
        charge they have left and can see roughly how much it will cost."
        />
        <Description
        title="Enjoy the ride"
        icon={<SVGRide/>}
        description="Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, 
        and you’re off! Always lock bikes away from walkways and accessibility ramps."
        />
      </section>
    </>
  );
}
