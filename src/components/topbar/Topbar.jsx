

import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar(options) {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Clearance Social App</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, Post or Video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    {/* <div className="topbarLink">Home page</div> <br /> */}
                    <div className="topbarLink">Timeline</div>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">55</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">30</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">120</span>
                    </div>
                </div>
                <img src="/assets/Me again.jpg" alt="Clearance" className="topbarImg" />
            </div>
        </div>
    )
}