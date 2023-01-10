//helpers
import { json } from "@remix-run/node"; 
import { Outlet, useLoaderData } from "@remix-run/react";
import type {LinksFunction } from "@remix-run/node";
//styles
import careersSharedStyles from  "css/pages/careers/careersShared.css";
import careersMobileStyles from  "css/pages/careers/careersMobile.css";
import careersTabletStyles from  "css/pages/careers/careersTablet.css";
import careersDesktopStyles from  "css/pages/careers/careersDesktop.css";
import careersListSharedStyles from "css/components/careersListShared.css";
import careersListMobileStyles from "css/components/careerListMobile.css";
//  images and svgs
import careersHeroDesktop from "~/assets/images/careers-locations-hero-desktop.jpg";
import careersHeroTablet from "~/assets/images/careers-locations-hero-tablet.jpg";
import careersHeroMobile from "~/assets/images/careers-location-hero-mobile.jpg";
import SvgLeftDownwardArrow from "~/assets/svg/LeftDownwardArrow";
import joinUs from "~/assets/images/join-us.jpg";
//components
import PageTitle from "~/components/PageTitle";
import PageLayoutStyle1 from "~/components/PageLayoutStyle1";
import PageLayoutStyle2 from "~/components/PageLayoutStyle2";
//data
import {careers} from "data/db.json"
import Careers from "~/components/Careers";

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
    {
      rel: "stylesheet",
      href: careersListSharedStyles,
    },
    {
      rel: "stylesheet",
      href: careersListMobileStyles,
      media: "(max-width: 600px)",
    },
  ];
}
export const loader = async () => {
  return json(careers);
};

export default function Index():JSX.Element {
  const jobs = useLoaderData<typeof loader>();

    return (
      <div >
      <PageTitle
      imgDesktop={careersHeroDesktop}
      imgTablet={careersHeroTablet}
      imgMobile={careersHeroMobile}
      title="Careers"
      />
      <section className="ps1_wrapper">
        <PageLayoutStyle1
          img={joinUs}
          arrowImg={<SvgLeftDownwardArrow/>}
          arrowClass="page_left_down_arrow_center"
          title="Care to join our mission?"
          text="We’re always looking for ambitious individuals to help us on our journey. If you’re 
          passionate about our mission to provide clean, accessible transport to improve urban 
          living we want to hear from you!."
          button={true}
          />
      </section>
      <section>
        <PageLayoutStyle2 title="Why Join Us"/>
      </section>
      <section>
        <Outlet/>
      </section>
      </div>
    )
  }