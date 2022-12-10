import type {LinksFunction } from "@remix-run/node";
import aboutSharedStyles from  "css/pages/about/aboutShared.css";
import aboutMobileStyles from  "css/pages/about/aboutMobile.css";
import aboutTabletStyles from  "css/pages/about/aboutTablet.css";
import aboutDesktopStyles from  "css/pages/about/aboutDesktop.css";
import PageTitle from "~/components/PageTitle";
// header images
import aboutHeroDesktop from "~/assets/images/about-hero-desktop.jpg";
import aboutHeroTablet from "~/assets/images/about-hero-tablet.jpg";
import aboutHeroMobile from "~/assets/images/about-hero-mobile.jpg";

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
        </div>
    );
  }
  