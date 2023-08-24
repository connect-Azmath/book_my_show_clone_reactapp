// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage></MoviePage>} />
      <Route path="/play" element={<PlayPage />} />
    </Routes>
  );
  // (
  //   <div className="App">
  //     <h2 class="text-3xl font-bold underline"> Hi World, I am React with Tailwind </h2>
  //   </div>
  // );
}

export default App;
