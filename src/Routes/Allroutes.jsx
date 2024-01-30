import { Route, Routes } from "react-router-dom";
import MovieDetails from "../Pages/MovieDetails";
import MovieList from "../Pages/MovieList";
import Pagenotfound from "../Pages/Pagenotfound";
import Search from "../Pages/Search";

import React from 'react'

const Allroutes = () => {
  return (
   <>
   <Routes>
       <Route path="/" element={<MovieList apiPath={"movie/now_playing"}/>}/>
       <Route path="/movies/popular" element={<MovieList apiPath={"movie/popular"}/>}/>
       <Route path="/movies/upcoming" element={<MovieList apiPath={"movie/upcoming"}/>} />
       <Route path="/movies/top" element={<MovieList apiPath={"movie/top_rated"}/>}/>
       <Route path="/movie/:id" element={<MovieDetails/>}/>
       <Route path="search" element={<Search apiPath={"/search/movie"}/>}/>
       <Route path="*" element={<Pagenotfound/>}/>
   </Routes>
   </>
  )
}

export default Allroutes
