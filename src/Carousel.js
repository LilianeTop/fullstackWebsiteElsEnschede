import {Carousel} from 'react-bootstrap';
import React from "react";


class Carousel extends React.Component {


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
            <Carousel>
                {waterrunningfotos.map(item => (
                    <Carousel.Item>
                        <img className="d-block w-100"
                             src={item.src}
                             alt={item.alt}
                        />
                    </Carousel.Item>
                ))};
            </Carousel>
        );
    }
}


export default Carousel;
