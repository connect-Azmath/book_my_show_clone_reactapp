import React, { useEffect, useState } from "react";
import DefaultlayoutHOC from "../layout/Default.layout";
// DefaultlayoutHOC

//Components
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.Component";

//Axios
import axios from "axios";

const HomePage =() => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);
    
    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get('/3/movies/top_rated');
            setRecommendedMovies(getTopRatedMovies.data.results);
        };
        setRecommendedMovies();
    }, [])

        return  (
            <>
                <HeroCarousel></HeroCarousel>
                <div className="ontainer mx-auto px-4 md:px-12 my-8">
                    <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3"> The Best of Entertainment </h1>
                    <EntertainmentCardSlider> </EntertainmentCardSlider>
                </div>
                <div className="container mx-auto px-4 md:px-12 my-8">
                    <PosterSlider 
                    title="Recommended Movies"
                    subtitle="List of Recommended Movies"
                    posters={recommendedMovies}
                    isDark={false}></PosterSlider>
                    
                </div>
                <div className="bg-premier-800 py-12">
                    <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay" className="w-full h-full" />
                    </div>
                     <PosterSlider 
                    title="Recommended Movies"
                    subtitle="Brand new Release on Tuesday"
                    posters={premierMovies}
                    isDark={true}>
                     </PosterSlider>
                    </div>

                </div>

                <div className="container mx-auto px-4 md:px12 my-8 flex flex-col gap-3">
                <PosterSlider 
                    title="Online Sreaming Events"
                    subtitle="Online Sreaming Events"
                    posters={onlineStreamEvents}
                    isDark={false}>
                     </PosterSlider>
                </div>

            </>
        )
}


export default DefaultlayoutHOC(HomePage);