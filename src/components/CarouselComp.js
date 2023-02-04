import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CarouselComp = () => {
    const [idx, setIdx] = React.useState(0);
    const handleSelect = (selectedIdx) => {
        setIdx(selectedIdx);
    };

    return ( 
        <Carousel activeIndex={idx} onSelect={handleSelect}>
            {[1,2,3].map(e => {
                return (
                    <Carousel.Item>
                        <img src={'https://my-diet-diary.netlify.app/jumbotron/2.png'} alt="Carousel 3" className="d-block w-100" />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    );
}
 
export default CarouselComp;