import { Link } from "@remix-run/react";
// svgs
import SvgSemiCircles from "~/assets/svg/SemiCircles";
import SvgGooglePlay from "~/assets/svg/GooglePlay";
import SvgAppStore from "~/assets/svg/AppStore";
import SvgTwitter from "~/assets/svg/Twitter";
import SvgFacebook from "~/assets/svg/Facebook";
import SvgInstagram from "~/assets/svg/Instagram";
import SvgLogo from "~/assets/svg/Logo";



interface LinkProps{
  to: string;
  title: string;
}

export default function Footer():JSX.Element{
  function NavLink({to, title}: LinkProps){
    return(
        <li>
        <Link to={to}>{title}</Link>
        </li>
    )
  }
return(
  <footer>
    <div  className="footer_CTA bg-dark-navy ">
      <div className="footer_semi_circles">
        <SvgSemiCircles/>
      </div>
      <div className="footer_CTA_links_container">
          <div className="footer_CTA_title">
              <h2 className="text-snow">Sign up and Scoot off Today</h2>
          </div>
          <div className="footer_CTA_links">
            <a href="/"><SvgAppStore/></a>
            <a href="/"><SvgGooglePlay/></a>
          </div>
      </div>
    </div>
    <div  className="footer_nav">
      <div className="nav_wrapper">
        <div className="footer_nav_links">
          <a href="/">
            <i><SvgLogo/></i>
          </a>
            <NavLink
            to="/about"
            title="About"
            />
            <NavLink
            to="/locations"
            title="Locations"
            />
            <NavLink
            to="/careers"
            title="Careers"
            />
        </div>
        <div className="footer_social_icons">
          <i><SvgFacebook/></i>
          <i><SvgTwitter/></i>
          <i><SvgInstagram/></i>
        </div>
      </div>
    </div>
  </footer>
   
)

}