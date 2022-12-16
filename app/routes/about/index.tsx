import type {LinksFunction } from "@remix-run/node";
import aboutSharedStyles from  "css/pages/about/aboutShared.css";
import aboutMobileStyles from  "css/pages/about/aboutMobile.css";
import aboutTabletStyles from  "css/pages/about/aboutTablet.css";
import aboutDesktopStyles from  "css/pages/about/aboutDesktop.css";
import PageTitle from "~/components/PageTitle";
// images and svgs
import aboutHeroDesktop from "~/assets/images/about-hero-desktop.jpg";
import aboutHeroTablet from "~/assets/images/about-hero-tablet.jpg";
import aboutHeroMobile from "~/assets/images/about-hero-mobile.jpg";
import digitalEra from "~/assets/images/digital-era.jpg";
import betterLiving from "~/assets/images/better-living.jpg";
import SvgRightArrow from "~/assets/svg/RightArrow";

import SvgLeftUpwardArrow from "~/assets/svg/LeftUpwardArrow";
// components
import PageLayoutStyle1 from "~/components/PageLayoutStyle1";

export const links: LinksFunction = () => {
  return[
    {
      rel: "stylesheet",
      href: aboutSharedStyles,
    },
    {
      rel: "stylesheet",
      href: aboutDesktopStyles,
      media: "(min-width: 1032px)",
    },
    {
      rel: "stylesheet",
      href: aboutTabletStyles,
      media: "(max-width: 1031px)",
    },
    {
      rel: "stylesheet",
      href: aboutMobileStyles,
      media: "(max-width: 600px)",
    },
  ];
}

export default function Index():JSX.Element {
    return (
      <div >
        <PageTitle
        imgDesktop={aboutHeroDesktop}
        imgTablet={aboutHeroTablet}
        imgMobile={aboutHeroMobile}
        title="About"
        />
        <section className="ps1_wrapper">
        <PageLayoutStyle1
        img={digitalEra}
        arrowImg={<SvgLeftUpwardArrow/>}
        arrowClass="page_left_up_arrow"
        title=" Mobility for the digital era"
        text="Getting around should be simple (and even fun!) for everyone. We embrace technology to 
        provide low cost, smart access to scooters at your fingertips."
        button={false}

        />
         <PageLayoutStyle1
      img={betterLiving}
      arrowImg={<SvgRightArrow/>}
      arrowClass="page_right_arrow"
      title="Better urban living"
      text="We’re helping connect cities and bring people closer together. Our scooters are also 
      fully-electric and we offset the minimal carbon footprint for each ride."
      button={false}
      />
        </section>
      </div>
    );
  }
  