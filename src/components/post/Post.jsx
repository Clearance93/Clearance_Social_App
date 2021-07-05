

import "./post.css";
import { MoreVert } from "@material-ui/icons"; 

export default function post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/IMG_20200515_112608.jpg" alt="Clearance" className="postProfileImg" />
                        <span className="postUsername">Clearance Morumudi</span>
                        <span className="postDate">10 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! I am new here. can someone Welcome me in :)</span>
                    <img src="assets/IMG_20200521_104259.jpg" alt="Mr Morumudi" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/imojies/heart.png" alt="heart" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/blush.png" alt="blush" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/broken-heart.png" alt="broken heart" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/fire.png" alt="fire" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/graving.png" alt="graving" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/inlove.png" alt="in love" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/laugh-out-load.png" alt="laugh out load" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/much-of-love.png" alt="much of love" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/sad.png" alt="sad" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/tears-of-joy.png" alt="tears of joy" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/thurms-up.png" alt="thurms up" className="imojiIcon" />
                    </div>
                    <span className="postLikeCounter">44 people liked this!</span>
                    <div className="postBottomRight">
                        <span className="postCommenttext">90 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
