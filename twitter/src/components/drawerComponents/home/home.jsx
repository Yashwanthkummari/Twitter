import React from "react";
import './home.css'
import { Avatar } from "@mui/material";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ramaImage from '../../images/lordRam.jpeg';
import ram from '../../images/ram.jpeg'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Home() {
    return (
        <div className="HContainer" >

            <div className="HHom">
                <div className="HHome">Home</div>
                <div className="HFY">
                    <div className="HForyou">For You</div>
                    <div className="HFollow">Following</div>
                </div>


            </div>
            <span ><hr /></span>
            <div className="HHappening">
                <div className="HAvatar">
                    <div><Avatar>YK</Avatar></div>
                    <div>
                        <div>What is Happening?!</div>
                    </div>
                </div>

                <div className="HIcons">
                    <div className="HIcons1">
                        <InsertPhotoOutlinedIcon />
                        <GifBoxOutlinedIcon />
                        <BallotOutlinedIcon />
                        <SentimentSatisfiedAltIcon />
                        <CalendarTodayIcon />
                        <RoomOutlinedIcon />
                    </div>
                    <div
                        className="HPost">Post
                    </div>
                </div>
            </div>
            <div className="HPosts">
                <div className="HSposts">Show Posts</div>
                <div className="HPostData">
                    <div className="HPAvatar">
                        <div><Avatar>YK</Avatar></div>
                        <div className="HUD">
                            <div className="HYK">Yashwanth Kummari</div>
                            <div className="HUYK">@Yashwanth_Kummari</div>
                        </div>
                        <div>oct 2</div>
                        <div className="HMoreHorIcon"><MoreHorizOutlinedIcon /></div>
                    </div>
                    <div className="HJSR">Jai Sri Ram <span className="HYSRJAI">#jai sri ram</span></div>
                    <div className="HImage">
                        <img id="rama" src={ramaImage} alt="ramImage" />
                    </div>
                    <div className="HLikeShareSub">
                        <div><ChatBubbleOutlineOutlinedIcon /></div>
                        <div><RepeatOutlinedIcon/></div>
                        <div><FavoriteBorderOutlinedIcon/></div>
                        <div><PollOutlinedIcon/></div>
                        <div><FileUploadOutlinedIcon/></div>
                    </div>


                </div>
                

                
            </div>
           
            
        </div>
    )
}
export default Home