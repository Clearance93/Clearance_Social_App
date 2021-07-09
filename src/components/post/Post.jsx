

import "./post.css";
import { MoreVert } from "@material-ui/icons"; 
import { User } from '../../data';
import { useState } from "react";

export default function Post({post}) {

    const [like, setLike] = useState(post.like);
    const [heart, setHeart] = useState(post.heart);
    const[joy, setJoy] = useState(post.joy);
    const[broken, setBroken] = useState(post.broken);
    const[fire, setFire] = useState(post.fire);


    const [isLiked, setIsLiked] = useState(false);
    const [isHeart, setIsHeart] = useState(false);
    const [isJoy, setIsJoy] = useState(false);
    const[isBroken, setIsBroken] = useState(false);
    const[isFire, setIsFire] = useState(false);


    const likeHandler = () => {
        setLike(isLiked? like-1 : like+1)
        setIsLiked(!isLiked)
    }

    const heartHandler =() => {
        setHeart(isHeart? heart-1 : heart+1)
        setIsHeart(!isHeart)
    }

    const tearsHandler = () => {
        setJoy(isJoy? joy-1 : joy+1)
        setIsJoy(!isJoy)
    }

    const sadHandler = () => {
        setBroken(isBroken? broken-1 : broken+1)
        setIsBroken(!isBroken)
    }

    const fireHandler = () => {
        setFire(isFire? fire-1 : fire+1)
        setIsFire(!isFire)
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
                        <span className="postLikeCounter">{heart} loves</span>
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/broken.png" onClick={sadHandler}  alt="broken heart" className="imojiIcon" />
                        <span className="postLikeCounter">{broken} heartbreak</span>
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/fire.png" onClick={fireHandler}  alt="fire" className="imojiIcon" />
                        <span className="postLikeCounter">{fire} hot</span>
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/laugh.png" onClick={tearsHandler}  alt="laugh out load" className="imojiIcon" />
                        <span className="postLikeCounter">{joy} LOL</span>
                    </div>
                    <div className="postBottomLeft">
                        <img src="assets/imojies/thurms-up.png" onClick={likeHandler} alt="thurms up" className="imojiIcon" />
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommenttext">{post.comments} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
