import axios from "axios";
import React, { useEffect, useState } from "react";
import { userLoginObj } from "./UserContext";

function UserContextStore({ children }) {
  let [loginStatus, setLoginStatus] = useState(false);
  let [curUser, setCurUser] = useState({});
  let [movie, setMovie] = useState([]);
  let [Trend,setTrend]=useState([]);
  let [comt,setComt]=useState([]);
  let [Action,setAction]=useState([])
  let [MovieList,setMovieList]=useState([])
  let [Upcome,setUpcome]=useState([])

  const handleUserLogin = async (obj) => {
    try {
      let res = await axios.get(
        `http://localhost:4001/user?username=${obj.username}`
      );

      if (res.status === 200) {
        let data = res.data;
        // console.log(data[0]);
        // console.log(obj);
        if (data.length === 0) {
          alert("User not found");
        } else {
          if (obj.password === data[0].password) {
            setLoginStatus(true);
            setCurUser(data[0]);
            return true;
          }
          return false;
        }
      }
    } catch (error) {
      alert("Error Occurred ");
    }
  };
  const fetchdata =async ()=>{
    try{
        const response=await axios.get('http://localhost:4001/movie')
        setMovie(response.data)
        const trending=await axios.get("http://localhost:4001/Trending")
        setTrend(trending.data)
        const comment=await axios.get("http://localhost:4001/Comment")
        setComt(comment.data)
        const Action=await axios.get("http://localhost:4001/Action")
        setAction(Action.data)
        const MovieList=await axios.get("http://localhost:4001/movieList")
        setMovieList(MovieList.data)
        const Upcoming=await axios.get("http://localhost:4001/Upcoming")
        setUpcome(Upcoming.data)
       }
    catch(error){
        alert("Error fetching data:")
    }
}
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <userLoginObj.Provider
      value={{
        curUser,
        loginStatus,
        movie,
        Trend,
        comt,
        Action,
        MovieList,
        Upcome,
        setCurUser,
        setLoginStatus,
        handleUserLogin,
      }}
    >
      {/* {console.log(movie)} */}
      {children}
    </userLoginObj.Provider>
  );
}

export default UserContextStore;
