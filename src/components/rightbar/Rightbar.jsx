
import './rightbar.css';
import { User } from '../../data';
import Online from '../../components/Online/Online'; 

export default function rightbar({profile}) {

    const HomeRightbar  = () => {
        return (
            <div>
                <div className="birthdayContainer">
                    <img src="/assets/imojies/birthday-cake.png" alt="birthday" className="birthdayImg" />
                    <span className="birthdayText">
                    You have <strong>27</strong> friend who have birthday today
                    </span>
                </div>
                <img src="/assets/full-stack-development.gif" alt="Full stack" className="rightbarAds" />
                <h4 className="rightbarTitle">Online Firends</h4>
                <ul className="rightBarFriendsList">
                    {User.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        );
    };

    const ProfileRightbar = () => {
        return (
            <div>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightinfoKey">City:</span>
                        <span className="rightbarInfoValue">Polokwane</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightinfoKey">From::</span>
                        <span className="rightbarInfoValue">Mokopane</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightinfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">in-relationship</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/IMG_20210424_165505.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Thapelo Molekwa</span>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
           {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
