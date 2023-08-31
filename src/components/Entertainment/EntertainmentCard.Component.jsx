//rafce
import React from "react";

//react-slick
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-full h-full rounded-lg"> 
                <img src={props.src} alt="Entertainment" className="w-full h-full rounded-lg"/>
            </div>   
        </>
    )
}

const EntertainmentCardSlider = () => {
    const EntertainmentCardImage = [];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1, 
                }
            },
        ]
    };

    return (
        <>
        <Slider {...settings}>
        {EntertainmentCardImage.map((image) => (
            <EntertainmentCard src={image}></EntertainmentCard>
        ))}
        </Slider>
        </>
    ) 
}

export default EntertainmentCardSlider;