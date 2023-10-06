import React from "react";
import './feed.css'
import cricketImage from "../../images/cricket.jpeg"
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


function Feed() {
    return (
        <div className="FContainer">
            <div className="FContainer1">
                <div className="FSearchIcon1">
                    <div className="FSearchIcon">
                        <SearchIcon />Search
                    </div>
                </div>
                <div className="FSUB">
                    <div className="FSUBP">Subscribe to premium</div>
                    <div className="FSubd"> subscribe to unlock new featuers and if eligible,recieve a share of adds revenue</div>
                    <div className="FSubb1">
                        <div className="FSubbt"> Subscribe</div>
                    </div>
                </div>
                <div className="FPosts">
                    <div className="FPOSts1"> Whats's happening</div>
                    <div className="FPosts2">
                        <div className="FLive">
                            <div className="Flive1"> NFL - Live</div>
                            <div className="FLTitle"> Sports</div>
                        </div>
                        <div className="FPic1">
                            <img id="cricketimg" src={cricketImage} alt=" cricket image" />
                        </div>
                    </div>
                    <div className="FTrend">
                        <div className="FTend1">
                            <div><span className="FTItleNm"> Trending </span> </div>
                            <div><MoreHorizOutlinedIcon /></div>
                        </div>
                        <div className="FTrendTitle"><span id="FTItleNm">ERRIHOOKMODEL</span></div>
                        <div className="FTrendpostsN"><span className="FTItleNm">1.27kposts</span></div>
                    </div>
                    <div className="FtrendI">
                        <div className="FTend1">
                            <div><span className="FTItleNm"> Trending in India </span> </div>
                            <div><MoreHorizOutlinedIcon /></div>
                        </div>
                        <div className="FTrendTitle"><span id="FTItleNm">#Yashwanth</span></div>
                        <div className="FTrendpostsN"><span className="FTItleNm">1.27kposts</span></div>
                    </div>
                    <div className="FTrendE">
                        <div className="FTend1">
                            <div><span className="FTItleNm"> Entertainment -Trending </span> </div>
                            <div><MoreHorizOutlinedIcon /></div>
                        </div>
                        <div className="FTrendTitle"><span id="FTItleNm">#SaiPavanGanesh</span></div>
                        <div className="FTrendpostsN"><span className="FTItleNm">1.57kposts</span></div>
                    </div>
                    <div className="FTrendE2">
                        <div className="FTend1">
                            <div><span className="FTItleNm"> Entertainment- Trending </span> </div>
                            <div><MoreHorizOutlinedIcon /></div>
                        </div>
                        <div className="FTrendTitle"><span id="FTItleNm">Yashwanth</span></div>
                        <div className="FTrendpostsN"><span className="FTItleNm">trending with </span>#KYK <span className="FHEYAS">#HelloYashwanth</span></div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Feed