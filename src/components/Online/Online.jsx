import "./online.css";

export default function online({user}) {
    return (
        <div>
            <li className="rightbarFriends">
                <div className="rightbarProfileImgContainer">
                        <img src={user.profilePcture} alt="facebook-like" className="rightbarProfileImg" />
                        <span className="rightbarOnline"></span>
                 </div>
                <span className="rightBarUserName">{user.username}</span>
             </li>
        </div>
    )
}
