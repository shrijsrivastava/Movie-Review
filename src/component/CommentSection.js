import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { userLoginObj } from "../contextApi/UserContext";
import "./CommentSection.css"

function CommentSection({ movieId }) {
  let navigate=useNavigate();
  let {index}=useParams();
  const { loginStatus, curUser} = useContext(userLoginObj);
  const [newComment, setNewComment] = useState("");
  const [comment,setComment]=useState([]);

  const fetchComment= async ()=>{
    const response=await axios.get("http://localhost:4001/Comment")
    const filterComment = response.data.filter(item=>item.id==index)
    setComment(filterComment)
  }
  useEffect(() => {
    fetchComment()
  }, [])
  
  const handleCommentSection = async (e) => {

    if(loginStatus){
      const upadteComments = {
        id:index,
        user:curUser.username,
        text:newComment
      }
      let re = await axios.post("http://localhost:4001/Comment",upadteComments)

      if(re.data){
         setNewComment("")
         fetchComment()
      }
         
    }
     else {
      alert("User not Logged In , Please Login first");
      navigate("/login")
    }
  };
  return (
    <div className="comment-section">
      <h4>Reviews :</h4>
      {comment.map((comment, index) => (
        <div key={index} className="comment">
          <strong>{comment.user}</strong>
          <div>{comment.text}</div>
        </div>
      ))}
        <div className="comment-input">
          <textarea
            placeholder="Write your comment...."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleCommentSection} >Submit</button>
        </div>
    </div>
  );
}

export default CommentSection;
