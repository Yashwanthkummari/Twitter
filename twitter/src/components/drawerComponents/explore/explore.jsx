import React from "react";
import './explore.css'
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import cricketLogo from '../../images/cricketlogo.jpeg'
import pakistanLogo from '../../images/pakisthan.jpeg'
import modiImage from '../../images/modi.jpeg'
import image from '../../images/image.jpeg'
import ground from '../../images/ground.jpeg'


function Explore() {
    return (
        <div className="EContainer">
            <div className="EContainer1">
                <div className="ESElect">
                    <div className="Eselect1">
                        <div className="ESearchIcon">
                            <div className="ESearchIcon1">
                                <SearchIcon />Search
                            </div>
                        </div>
                        <div className="ESettingsIcon">
                            <SettingsOutlinedIcon />
                        </div>
                    </div>
                    <div className="EISelect">
                        <div className=" EISElectH">For you</div>
                        <div className=" EISElectH">Trending</div>
                        <div className=" EISElectH">News</div>
                        <div className=" EISElectH">Sports</div>
                        <div className=" EISElectH">Entertainment</div>
                    </div>

                </div>


            </div>
            <hr className="Ehr"/>
            <div className="EContainer2">
                <div className="ETrend">
                    <div className="ETrend1">
                        <div> ICC</div>
                        <div>INDvsPAk</div>

                    </div>
                    <div className="Etrend2">
                        <div className="Etrendb">
                            <div className="Etrendb1">
                                <div className="Etrendb2">
                                    <div className="ETrendimg"> <img id="cricketlogo" src={cricketLogo} alt="cricket logo" /></div>
                                    <div className="ETEamName">India</div>
                                </div>
                                <div className="ETEamScore"> 300/4</div>
                            </div>
                        </div>
                        <div className="Etrendbb">
                            <div className="Etrendb1">
                                <div className="Etrendb2">
                                    <div className="ETrendimg"> <img id="cricketlogo1" src={pakistanLogo} alt="cricket logo" /></div>
                                    <div className="ETEamName">Pakistan</div>
                                </div>
                                <div className="ETEamScore"> 150/10</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="EtrendI">
                    <div className="ETend1">
                        <div><span className="ETItleNm"> Trending in India </span> </div>
                        <div><MoreHorizOutlinedIcon /></div>
                    </div>
                    <div className="ETrendTitle"><span id="ETItleNm">#Yashwanth</span></div>
                    <div className="ETrendpostsN"><span className="ETItleNm">1.27kposts</span></div>
                </div>
                <div className="EtrendI">
                    <div className="ETend1">
                        <div><span className="ETItleNm"> Trending in India </span> </div>
                        <div><MoreHorizOutlinedIcon /></div>
                    </div>
                    <div className="ETrendTitle"><span id="ETItleNm">#Yashwanth</span></div>
                    <div className="ETrendpostsN"><span className="ETItleNm">1.27kposts</span></div>
                </div>

            </div>
            <hr className="Ehr"/>
            <div className="EContainer3">
                <div className="EVedio">
                    <div className=" Evediotext">Vedios for You</div>
                    <div className="Evediotext1"> checkout this popular and trending vedios for you</div>
                </div>
                <div className="EVedios">
                    <div className="EVEdioss"> <img id="EvediosImage" src={modiImage} alt="modiImage" /></div>
                    <div className="EVEdioss"> <img id="EvediosImage" src={image} alt="Image" /></div>
                    <div className="EVEdioss"> <img id="EvediosImage" src={ground} alt="Ground" /></div>

                </div>
                {/* <div className="EVedios">
                    <div className="EVEdioss"> <img id="EvediosImage" src={modiImage} alt="modiImage" /></div>
                    <div className="EVEdioss"> <img id="EvediosImage" src={image} alt="Image" /></div>
                    <div className="EVEdioss"> <img id="EvediosImage" src={ground} alt="Ground" /></div>

                </div> */}

            </div>
            <div className="EContainer4">   
                <div className="ETend1">
                    <div><span className="ETItleNm"> Trending in India </span> </div>
                    <div><MoreHorizOutlinedIcon /></div>
                </div>
                <div className="ETrendTitle"><span id="ETItleNm">#Yashwanth</span></div>
                <div className="ETrendpostsN"><span className="ETItleNm">1.27kposts</span></div>
            </div>

        </div>
    )
}
export default Explore