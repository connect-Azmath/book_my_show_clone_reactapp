// import logo from './logo.svg';
//Routing
import { Route, Routes } from "react-router-dom";
import "./App.css";

//React slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

import Sign_up from "./pages/Sign_up.Page";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.API_KEY;
// axios.defaults.params["api_key"] = "Use my api_Key here directly for the API functioning - 401 will not be displayed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage></MoviePage>} />
      <Route path="/plays" element={<PlayPage />} />
      <Route path="/sign_up" element={<Sign_up />} />
    </Routes>
  );
  // (
  //   <div className="App">
  //     <h2 class="text-3xl font-bold underline"> Hi World, I am React with Tailwind </h2>
  //   </div>
  // );
}

export default App;
