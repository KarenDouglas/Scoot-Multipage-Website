import type {LinksFunction } from "@remix-run/node";
import locationsSharedStyles from  "css/pages/locations/locationsShared.css";
import locationsMobileStyles from  "css/pages/locations/locationsMobile.css";
import locationsTabletStyles from  "css/pages/locations/locationsTablet.css";
import locationsDesktopStyles from  "css/pages/locations/locationsDesktop.css";

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
      href: locationsSharedStyles,
    },
    {
      rel: "stylesheet",
      href: locationsDesktopStyles,
      media: "(min-width: 1032px)",
    },
    {
      rel: "stylesheet",
      href: locationsTabletStyles,
      media: "(max-width: 1031px)",
    },
    {
      rel: "stylesheet",
      href: locationsMobileStyles,
      media: "(max-width: 600px)",
    },
  ];
}


export default function Index() {
    return (
      <div>
        <PageTitle
        imgDesktop={careersHeroDesktop}
        imgTablet={careersHeroTablet}
        imgMobile={careersHeroMobile}
        title="Locations"
        />
      </div>
    );
  }