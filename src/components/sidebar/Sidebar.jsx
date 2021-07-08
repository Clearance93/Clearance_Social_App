
import "./sidebar.css";
import { Bookmarks, Chat, Event, Group, HelpOutlined, PlayCircleFilledOutlined, RssFeed, School, WorkOutline } from "@material-ui/icons";
import { User } from "../../data";
import CloseFirends from "../../components/Closefriends/CloseFriends"

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
                  { User.map(u => (
                      <CloseFirends key={u.id} user={u} />
                  ))}
               </ul>
           </div>
        </div>
    )
}