

import "./post.css";
import { MoreVert } from "@material-ui/icons"; 
import { User } from '../../data';
import { useState } from "react";

export default function Post({post}) {

    const [like, setLike] = useState(post.like);
    const [heart, setHeart] = useState(post.heart);
    const [isLiked, setIsLiked] = useState(false)
    const [isHeart, setIsHeart] = useState(false)


    const likeHandler = () => {
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  const heartHandler =() => {
        setHeart(isHeart? heart-1 : heart+1)
        setIsHeart(!isHeart)
    }

    const user = User.filter(u => u.id === 1)
    console.log(user[0].username);


    console.log(post)
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={User.filter((u) => u.id === post.userId)[0].profilePcture} alt="Clearance" className="postProfileImg" />
                        <span className="postUsername">{User.filter((u) => u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="Mr Morumudi" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/imojies/heart.png" onClick={heartHandler}  alt="heart" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/blush.png" onClick={likeHandler}  alt="blush" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/broken-heart.png" onClick={likeHandler}  alt="broken heart" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/fire.png" onClick={likeHandler}  alt="fire" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/graving.png" onClick={likeHandler}  alt="graving" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/inlove.png" onClick={likeHandler}  alt="in love" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/laugh-out-load.png" onClick={likeHandler}  alt="laugh out load" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/much-of-love.png" onClick={likeHandler}  alt="much of love" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/sad.png" onClick={likeHandler}  alt="sad" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/tears-of-joy.png" onClick={likeHandler}  alt="tears of joy" className="imojiIcon" />
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/thurms-up.png" onClick={likeHandler} alt="thurms up" className="imojiIcon" />
                    </div>
                    <span className="postLikeCounter">{like} likes</span>
                    <span className="postLikeCounter">{heart} loves</span>
                    <div className="postBottomRight">
                        <span className="postCommenttext">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
