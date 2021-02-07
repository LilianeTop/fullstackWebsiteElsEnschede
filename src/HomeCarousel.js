import React from "react";
import "./HomeCarousel.css";



class HomeCarousel extends React.Component {

    render() {
        const waterrunningfotos =
            [{
                src: "img/homeRunningWater.jpg",
                alt: "waterfoto"
            },
                {
                    src: "img/homeRunningWaterMirror.jpg",
                    alt: "waterfotomirror"
                }];

        return (
            <div className='wrapper'>
                <div className='sliding-background'>
                </div>
            </div>
        );
    }
}


export default HomeCarousel;
