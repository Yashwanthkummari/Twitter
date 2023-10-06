import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../pages/mainPage/mainpage";
import Drawer from "../dashBoard/dashBoard";



function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<MainPage/>}/>
                    <Route path={"/drawer"} element ={<Drawer/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router