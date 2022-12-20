import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { useState } from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// stylesheets
import styles from 'css/Index.css';
import navMobileStyles from 'css/components/navbarMobile.css';
import navSharedStyles from 'css/components/navbarShared.css';
import navTabletStyles from 'css/components/navTablet.css';
import pageMobileStyles from 'css/pages/allPagesMobile.css';
import pageTabletStyles from 'css/pages/allPagesTablet.css';
import pageDesktopStyles from 'css/pages/allPagesDesktop.css';
import footerTabletStyles from 'css/components/footerTablet.css';
import footerMobileStyles from 'css/components/footerMobile.css';
import footerSharedStyles from "css/components/footerShared.css";
import footerDesktopStyles from "css/components/footerDesktop.css";
//components
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

export const links: LinksFunction = () => {
  return[
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "stylesheet",
      href: navSharedStyles,
    },
    {
      rel: "stylesheet",
      href: navMobileStyles,
      media:"(min-width: 0px)",
    },
    {
      rel: "stylesheet",
      href: navTabletStyles,
      media: "(min-width:  601px)",
    },
    {
      rel: "stylesheet",
      href: pageDesktopStyles,
      media: "(min-width: 1032px)",
    },
    {
      rel: "stylesheet",
      href: pageTabletStyles,
      media: "(max-width: 1031px)",
    },
    {
      rel: "stylesheet",
      href: pageMobileStyles,
      media: "(max-width: 600px)",
    },
    {
      rel: "stylesheet",
      href: footerSharedStyles,
    },
    {
      rel: "stylesheet",
      href: footerDesktopStyles,
      media: "(min-width: 1032px)",
    },
    {
      rel: "stylesheet",
      href: footerTabletStyles,
      media: "(max-width:  1032px)",
    },
    {
      rel: "stylesheet",
      href: footerMobileStyles,
      media:"(max-width: 600px)",
    },
  ]
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Scoot",
  viewport: "width=device-width,initial-scale=1",
  
});

export default function App() {
  
  const [isOpen, setIsOpen]= useState<boolean>(false)


  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <header>
        <Navbar 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        />
      </header>
      <body className={isOpen? "overlay": ""}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
      <Footer/>
    </html>
  );
}
