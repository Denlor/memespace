import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";

export default function Share() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef()
  const [file,setFile] = useState(null)
  const submitHandler = async (e) => {
    e.proventDefault()
    const newPost= {
      userId: user._id,
      desc: desc.current.value
    }
    try {
      await axios.post("/posts",newPost)
    } catch (error) {
      
    }
  }
  
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
          />
          <input placeholder={`What's in your mind ${user.username}?`} className="shareInput" ref={desc} />
        </div>
        <hr className="shareHr" />
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">photo or video</span>
              <input style={{display:"none"}}type="file" id="file" accept=".png,.jpeg,.jpg,.gif" onChange={(e)=>setFile(e.target.files[0])} />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">Share</button>
        </form>
      </div>
    </div>
  );
}
