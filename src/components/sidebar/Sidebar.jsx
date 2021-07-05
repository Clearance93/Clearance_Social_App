
import "./sidebar.css";
import { Bookmarks, Chat, Event, Group, HelpOutlined, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@material-ui/icons";

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
               <ul className="sidebarList">
                   <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                   </li>
                   <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chat</span>
                   </li>
                   <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                   </li>
                   <li className="sidebarListItem">
                        <HelpOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                   </li>
                   <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                   </li>
                   <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                   </li>
                   <li className="sidebarListItem">
                        <Bookmarks className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                   </li>
                   <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                   </li>
                   <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                   </li>
               </ul>
               <button className="sidebarButton">Show More</button>
               <hr  className="sidebarHr"/>
               <ul className="sidebarFriendList">
                   <li className="sidebarFriend">
                       <img src="/assets/IMG_20200515_182200.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Thango </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/IMG_20200521_104259.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Kutlwano </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/IMG_20200531_130755.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Thabiso </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/IMG_20210327_161939.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Martina </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723530991882929.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Micheal </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723530877787087.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Basetsana</span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723528004325559.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Malokwane </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723526254043868.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Precious </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723524315984431.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Mohau </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723524315984431.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Thoriso </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723523863611853.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Thathi </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723521854732527.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Doctor </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723520484324532.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Tebogo </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723520484324532.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Sebata </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723528004325559.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Angela </span>
                   </li>
                   <li className="sidebarFriend">
                       <img src="/assets/FB_IMG_15723520484324532.jpg" alt="First Friend" className="sidebarFriendName" />
                       <span className="sidebarFriendName">Joy </span>
                   </li>
               </ul>
           </div>
        </div>
    )
}