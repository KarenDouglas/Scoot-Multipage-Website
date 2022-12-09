import type {LinksFunction } from "@remix-run/node";
import aboutSharedStyles from  "css/pages/about/aboutShared.css";
import aboutMobileStyles from  "css/pages/about/aboutMobile.css";
import aboutTabletStyles from  "css/pages/about/aboutTablet.css";
import aboutDesktopStyles from  "css/pages/about/aboutDesktop.css";

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

export default function Index() {
    return (
      <div >
        <h1> About</h1>
        </div>
    );
  }
  