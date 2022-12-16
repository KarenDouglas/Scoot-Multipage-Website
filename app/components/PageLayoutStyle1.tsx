import SVGSemiCircles from "../assets/svg/SemiCircles";

import SVGWhiteCircles from "../assets/svg/WhiteCircles";
interface PageStyle1Props {
img: string;
arrowImg: JSX.Element;
title: string;
text: string;
arrowClass: string;
button: boolean;
}

export default function PageLayoutStyle1( {img, arrowImg, title, text, arrowClass, button}: PageStyle1Props ):JSX.Element{

return(
   <div className="page_s1_container">
        <div className="page_s1_img">
            <img src={img} />
            <div className="page_semi-circle"></div>
            <span className={arrowClass}>{arrowImg}</span>
        </div>
        <div className="page_s1_title_container">
            <h2>{title}</h2>
            <p>{text}</p>
           { button && <button>Learn More</button>}

        </div>

   </div>
   
)

}