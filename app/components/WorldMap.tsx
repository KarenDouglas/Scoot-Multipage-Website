import worldMapDesktop from "~/assets/images/world-map-desktop.png";
import worldMapTablet from "~/assets/images/world-map-tablet.png";
import worldMapMobile from "~/assets/images/world-map-mobile.png";

export default function WorldMap() {
    return (
      <>
        <div> 
          <div className="locations_worldMap_container">
            <picture>
              <source  media="(min-width: 1032px)" srcSet={worldMapDesktop}/>
              <source  media="(min-width: 600px)" srcSet={worldMapTablet}/>
              <img className="locations_worldMap" src={worldMapMobile}/>
            </picture>
            <div className="locations_markers_container">
                <div className="locations_NewYork_marker">
                  <div className="locations_yellowRect">
                    <h3>New York</h3> 
                    <div className="locations_yellowTri"></div>
                  </div> 
                </div>
                <div className="locations_London_marker">
                  <div className="locations_yellowRect">
                    <h3>London</h3>
                    <div className="locations_yellowTri"></div>
                  </div>
                </div>
                <div className="locations_Yokohama_marker">
                  <div className="locations_yellowRect">
                    <h3>Yokohama</h3>
                    <div className="locations_yellowTri"></div>
                  </div>
                </div>
                <div className="locations_Jakarta_marker">
                  <div className="locations_yellowRect">
                    <h3>Jakarta</h3>
                    <div className="locations_yellowTri"></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </>
     
    );
  }