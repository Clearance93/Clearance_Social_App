
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
                        <img src="assets/Thapelo.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Thapelo</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Kutlwano.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Kutlwano</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Skapie.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Skapie</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Memorial.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Memorial</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Simon.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Simon</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Sekwema.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sekwema</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Ofentse.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Ofentse</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Clearance.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Clearance</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Me.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Thango</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Thango.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Unpredicatable</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Me again.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Clearance T</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Kutlwano S.K.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Swift</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Martina.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Martina</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Mom and son.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Makaleng</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Mrs Morumudi.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mrs Morumudi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Mr Morumudi.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mr Morumudi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Thabiso.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Thabiso</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/fam.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Family</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Micheal.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Micheal</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/Matsobane.jpg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Matsobane</span>
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
