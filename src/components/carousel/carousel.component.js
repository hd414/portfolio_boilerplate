import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../../assets/a1.jpg';
import a2 from '../../assets/a2.jpg';
import a3 from '../../assets/a3.jpg';
import Scroll from '../scroll/scroll.component';
import './carousel.styles.css';

 const CarouselComponent = () => {
    return (
        <div> 

            <Carousel className="coursel ">
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 "
                    src={a1}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 "
                    src={a2}
                    alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={a3}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                
            </Carousel>
            {/* <Scroll/> */}
        </div>
    )
}

export default CarouselComponent;