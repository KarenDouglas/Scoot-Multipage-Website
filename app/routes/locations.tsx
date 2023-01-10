import type {LinksFunction } from "@remix-run/node";
import locationsSharedStyles from  "css/pages/locations/locationsShared.css";
import locationsMobileStyles from  "css/pages/locations/locationsMobile.css";
import locationsTabletStyles from  "css/pages/locations/locationsTablet.css";
import locationsDesktopStyles from  "css/pages/locations/locationsDesktop.css";
// SVGS & images
import locationsHeroDesktop from "~/assets/images/careers-locations-hero-desktop.jpg";
import locationsHeroTablet from "~/assets/images/careers-locations-hero-tablet.jpg";
import locationsHeroMobile from "~/assets/images/careers-location-hero-mobile.jpg";
//components
import PageTitle from "~/components/PageTitle";
import WorldMap from "~/components/WorldMap";

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
        imgDesktop={locationsHeroDesktop}
        imgTablet={locationsHeroTablet}
        imgMobile={locationsHeroMobile}
        title="Locations"
        />
        <section>
          <WorldMap/>
        </section>
        <section>
          <div className="locations_notListed_container">
            <div>
              <h2>Your City Not Listed?</h2>
            </div>
            <div>
              <p>
              If you’d like to see Scoot in your hometown, be sure to let us know. We track requests and plan launches based on demand. Feel free to message us by clicking the link or messaging us on social.
              </p>
            </div>
            <button>Message Us</button>
          </div>
        </section>
      </div>
      
    );
  }