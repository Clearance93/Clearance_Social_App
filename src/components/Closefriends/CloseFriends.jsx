

import "./closefriends.css";

export default function CloseFriends({user}) {
    return (
        <div>
            <li className="sidebarFriend">
                       <img src={user.profilePcture} alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">{user.username}</span>
                   </li>
        </div>
    )
}
