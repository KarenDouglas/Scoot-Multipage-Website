import SVGWhiteCircles from "../assets/svg/WhiteCircles";
interface PageTitleProps {
    imgMobile: string;
    imgDesktop: string;
    imgTablet: string;
    title: string;
}

export default function PageTitle({imgMobile, imgDesktop, imgTablet, title}: PageTitleProps):JSX.Element{

return(
    <div className="page_title_header">
        <picture>
            <source  media="(min-width: 1032px)" srcSet={imgDesktop}/>
            <source  media="(min-width: 600px)" srcSet={imgTablet}/>
            <img  className="page_title_image" src={imgMobile}/>
        </picture>
        <div className="page_title_container">
            <div className="page_title"><h1>{title}</h1></div>
        </div>
            <span className="page_svg_white-circles"><SVGWhiteCircles/></span>
    </div>
   
)

}