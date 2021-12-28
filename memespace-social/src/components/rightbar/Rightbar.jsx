import "./rightbar.css"
import { Users } from "../../dd"
import Online from "../online/Online"
export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Arnold</b> and <b>3 other friends</b> have a birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {Users.map(u=>(
                       <Online key={u.id} user={u} />
                   ))}
                </ul>
            </>
        )
    }
    
    const ProfileRightbar = () => {
        return (
        <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">NightCity</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">USA</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/2.webp" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Jackie</span>                    
                </div>            
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jackie</span>                    
                    </div>
                </div>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jackie</span>                    
                    </div>
                </div><div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jackie</span>                    
                    </div>
                </div><div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.webp" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jackie</span>                    
                    </div>
                </div>
            </div>
        </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
