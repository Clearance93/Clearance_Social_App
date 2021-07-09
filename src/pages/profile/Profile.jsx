import "./profile.css";
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

export default function profile() {
    return (
        <div>
          <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/Cars/JrJQ.gif" alt="" className="profileCoverImg" />
                            <img src="/assets/Me again.jpg" alt="" className="profileUserImg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Clearance Morumudi</h4>
                            <span className="profileInfodesc">My God above everything</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                    </div>
                </div>

            </div>
        </div>
    )
}
