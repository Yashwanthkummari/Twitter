import React, { useState } from "react";
import './drawer.css';
// import twitterlogo from '../images/twitter.jpeg';
import twitterlogo from '../../images/twitter.jpeg';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { Avatar } from "@mui/material";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Home from "../home/home";
import Feed from "../feed/feed";
import { useNavigate } from "react-router-dom";

function Drawer() {
    const [avatar, setAvatar] = useState(false)
    const handleAvatar = () => {
        setAvatar(!avatar)
    }
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }
    return (
        <div className="DBContainer">
            <div className="DBContainer1">
                <div className="DBContainer2">
                    <div className="DBContainer5">
                        <div className="DBTwitterXlogo"> <img id="DBTwitterXlogo" src={twitterlogo} alt="twitterXlogo" /></div>
                        <div className="DBIcons">
                            <div className="DBIcons1"> <HomeIcon /> Home</div>
                            <div className="DBIcons1"> <SearchIcon />Explore</div>
                            <div className="DBIcons1"><NotificationsOutlinedIcon /> Notifications</div>
                            <div className="DBIcons1"><MailOutlineOutlinedIcon />Messages</div>
                            <div className="DBIcons1"><FeaturedPlayListOutlinedIcon />Lists</div>
                            <div className="DBIcons1"><PeopleOutlineOutlinedIcon />Communities</div>
                            <div className="DBIcons1"><img id="twitterlogo" src={twitterlogo} alt="twitterlogo" />Premium</div>
                            <div className="DBIcons1"><PermIdentityOutlinedIcon />Profile</div>
                            <div className="DBIcons1"> <PendingOutlinedIcon />More</div>
                            <div className="DBPost">Post</div>

                        </div>
                    </div>
                    {
                        avatar ?

                            <div className="DBContainer6">
                                <div className="DBAcc">Account</div>

                                <div className="DBLOGOUT" onClick={logout}>LogOut</div>
                            </div>
                            : ""
                    }

                    <div onClick={handleAvatar} className="DBProfile">
                        <div className="DBProfile1">
                            <div ><Avatar>YK</Avatar></div>
                            <div>
                                <div>Yashwanth Kummari</div>
                                <div>@Yashwanth_Kummari</div>
                            </div>
                        </div>
                        <div><MoreHorizOutlinedIcon /></div>
                    </div>:

                </div>
                <div className="DBContainer3">
                    <Home />
                </div>
                <div className="DBContainer4">
                    <Feed />
                </div>
            </div>
        </div>
    )
}
export default Drawer