
import './rightbar.css'

export default function rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/imojies/birthday-cake.png" alt="birthday" className="birthdayImg" />
                    <span className="birthdayText">
                    You have <strong>27</strong> friend who have birthday today
                    </span>
                </div>
                <img src="/assets/full-stack-development.gif" alt="Full stack" className="rightbarAds" />
                <h4 className="rightbarTitle">Online Firends</h4>
                <ul className="rightBarFriendsList">
                    <li className="rightbarFriends">
                        <div className="rightbarProfileImgContainer">
                            <img src="" alt="" className="rightbarProfileImg" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
