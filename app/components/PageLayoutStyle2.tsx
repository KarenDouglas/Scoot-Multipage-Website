import ourTech from "~/assets/images/our-tech.jpg";
import ourIntegrity from "~/assets/images/our-integrity.jpg";
import ourCommunity from "~/assets/images/our-community.jpg";

interface Ps2Props{
    title: string;
}

export default function PageLayoutStyle2 ({title}:Ps2Props): JSX.Element{

    interface cardProps{
        img: string;
        imgTitle: string;
        description: string;
        num: string;
    }
    function ImageCard({img, imgTitle, description, num}: cardProps):JSX.Element{
        return(
<div className="ps2_content_container">
                <div className="ps2_image">
                    <img src={img} alt="" />
                      <div className="bg-yellow ps2_yellow_circle"><p>{num}</p></div>  
                </div>
                <div className="ps2_title text-center">
                    <h3>{imgTitle}</h3>
                </div>
                <div className="ps2_description text-center">
                <p>{description}</p>
                </div>
            </div>
        )
    }
    return(
        <div>
            <div className="ps2_heading text-center"><h2>{title}</h2></div>
            <div className="ps2_wrapper">
                <ImageCard
                num="01"
                img={ourTech}
                imgTitle= "Our Tech"
                description="We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!"
                />
                <ImageCard
                num="02"
                img={ourIntegrity}
                imgTitle= "Our Integrity"
                description="Our integrity We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve."
                />
                <ImageCard
                num="03"
                img={ourCommunity}
                imgTitle= "Our Community"
                description="We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees."
                />
            </div>
        </div>
        
    )
}