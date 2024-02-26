import { Routes } from "react-router-dom"
import "./App.css"
import {  Route } from "react-router-dom"
import Home from "./component/Home/Home"
import Movie from "./component/Movies/Movie"
import Trending from "./component/Trending/Trending"
import About from "./component/About/About"
import Login from "./component/Login/Login"
import Register from "./component/Login/Register"
import MovieDetails from "./component/MovieDetails"
import Footer from '../src/component/Footer/Footer'
import Header from '../src/component/Header/Header';
import PageNotFound from "./component/PageNotFound"



function App() {
  return (
    <>
    <Header />
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Movie/>}/>
        <Route path="/trending" element={<Trending/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login/register" element={<Register/>}/>
        <Route path="/movie/:type/:index" element={<MovieDetails/>}/>
        <Route path="/*" element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App