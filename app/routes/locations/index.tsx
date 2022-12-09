import type {LinksFunction } from "@remix-run/node";
import locationsSharedStyles from  "css/pages/locations/locationsShared.css";
import locationsMobileStyles from  "css/pages/locations/locationsMobile.css";
import locationsTabletStyles from  "css/pages/locations/locationsTablet.css";
import locationsDesktopStyles from  "css/pages/locations/locationsDesktop.css";

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
      <div >
        <h1> Locations</h1>
        
      </div>
    );
  }