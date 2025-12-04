import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HomeUploadZone from "../HomeUploadZone/HomeUploadZone";
import UsernameTopBar from "../UsernameTopBar/UsernameTopBar";

export default function HomePage({ showSidebar, setShowSidebar }) {

    return (
        <>
            <UsernameTopBar />

            <div className="layout">
                <Sidebar active={0} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                <main className={`layout__main${showSidebar ? "" : " layout__main--collapsed"}`}>
                    <HomeUploadZone />
                </main>
            </div>
        </>
    )
}