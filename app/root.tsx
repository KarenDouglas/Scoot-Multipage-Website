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
import Navbar from './components/Navbar.js';
import styles from 'css/Index.css';
import navMobileStyles from 'css/components/navbarMobile.css';
import navSharedStyles from 'css/components/navbarShared.css';
import navTabletStyles from 'css/components/navTablet.css';


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
    </html>
  );
}
