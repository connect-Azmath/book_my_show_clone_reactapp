import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
    const {title, subtitle, posters, isDark} = props;
    const settings = {

    }
    return (
        <>
            <div className='flex flex-col items-start sm:ml-3 my-2'>
                <h3 className={`text-2xl font-bold ${isDark? 'text-white' : 'text-black'}`}>{title}</h3>
                <p className={`text-sm  ${isDark? 'text-white' : 'text-black'}`}>{title}</p>
            </div>
            <Slider {...settings}>
                {posters.map((each) => (
                    <Poster {...each} isDark={isDark}></Poster>
                ))}
            </Slider>
        </>
    )

}

export default PosterSlider;