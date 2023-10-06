import React from "react";
import './notifications.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import twitterlogo from '../../images/twitter.jpeg'
import LockIcon from '@mui/icons-material/Lock';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ramaImage from '../../images/ram.jpeg';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';



function Notifications() {
    return (
        <div className="NContainer">
            <div className="NContainer1">
                <div className="NSElect">
                    <div className="Nselect1">
                        <div className="NSearchIcon">
                            <div className="NSearchIcon1">
                                Notifications
                            </div>
                        </div>
                        <div className="NSettingsIcon">
                            <SettingsOutlinedIcon />
                        </div>
                    </div>

                    <div className="NISelect">
                        <div className=" NISElectAll">All</div>
                        <div className=" NISElectH">Verified</div>
                        <div className=" NISElectH">Mentions</div>
                    </div>


                </div>
            <span ><hr /></span>



            </div>
            <div className="NContainer2">
                <div className="NNotification">
                    <div className="NImage">
                        <img id="NTwitterlogo" src={twitterlogo} alt="" />
                    </div>
                    <div className="NNOTicationText"> There was a login to your account @Yashwanth_K1119 from a new devicwe on 05 oct 2023 . Review On it.</div>
                </div>
                <div className="NNotification">
                    <div className="NImage"   >
                        < LockIcon className="NImageLock" />
                    </div>
                    <div className="NNOTicationText"> Your password was reset on your account.Based on this change,additional changes to your account may be resistricted temporarily. </div>
                </div>
            <span ><hr /></span>

            </div>
            <div className="NContainer3">
                <div className="NTExtJSRICon">
                    <div className="NJaiSRiRam"> JaiSriRam</div>
                    <div className="NHorziICon"><MoreHorizOutlinedIcon /></div>
                </div>
                <div className="NNotification2">
                    <div className="NNotificMesssg">
                        <CommentOutlinedIcon  className="NCommentICon"/>
                    </div>
                    <div className="NpostNoti">
                        <div className="NNoticationRamImage">
                            <img id="Nrama" src={ramaImage} alt="ramImage" />

                        </div>
                        <div className="NNoficRamText">
                            Jai Sri Ram <span className="NPosted">posted</span>
                        </div>
                        <div className="NFAvICon"> <FavoriteIcon/> <FavoriteIcon/> <FavoriteIcon/> </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Notifications