import type {LinksFunction } from "@remix-run/node";
import careersSharedStyles from  "css/pages/careers/careersShared.css";
import careersMobileStyles from  "css/pages/careers/careersMobile.css";
import careersTabletStyles from  "css/pages/careers/careersTablet.css";
import careersDesktopStyles from  "css/pages/careers/careersDesktop.css";
// header images
import careersHeroDesktop from "~/assets/images/careers-locations-hero-desktop.jpg";
import careersHeroTablet from "~/assets/images/careers-locations-hero-tablet.jpg";
import careersHeroMobile from "~/assets/images/careers-location-hero-mobile.jpg";

//components
import PageTitle from "~/components/PageTitle";


export const links: LinksFunction = () => {
  return[
    {
      rel: "stylesheet",
      href: careersSharedStyles,
    },
    {
      rel: "stylesheet",
      href: careersDesktopStyles,
      media: "(min-width: 1032px)",
    },
    {
      rel: "stylesheet",
      href: careersTabletStyles,
      media: "(max-width: 1031px)",
    },
    {
      rel: "stylesheet",
      href: careersMobileStyles,
      media: "(max-width: 600px)",
    },
  ];
}


export default function Index() {
    return (
      <div >
      <PageTitle
      imgDesktop={careersHeroDesktop}
      imgTablet={careersHeroTablet}
      imgMobile={careersHeroMobile}
      title="Careers"
      />
      </div>
    )
  }