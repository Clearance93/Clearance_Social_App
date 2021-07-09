
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export default function share() {
    return (
        <div className="share">
          <div className="shareWrapper">
              <div className="shareTop">
                  <img src="/assets/Me again.jpg" alt="Clearance" className="shareProfileImg" />
                  <input placeholder="What is in your mind Clearance" className="shareInput" />
              </div>
              <hr className="shareHr" />
              <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareoption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareoption">
                        <Label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareoption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions htmlColor="gold" className="shareIcon" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">
                    Share
                </button>
              </div>
          </div>
        </div>
    )
}
