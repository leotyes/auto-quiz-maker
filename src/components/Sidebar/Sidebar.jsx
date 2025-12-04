import { useState } from "react";
import "./Sidebar.css";
import { House, ClipboardList, Settings, Compass, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ active, showSidebar, setShowSidebar }) {
	return (
		<aside className={`sidebar${showSidebar ? "" : " sidebar--collapsed"}`}>
			<div className="sidebar__brand">
				<div className="sidebar__logo">
					⚡
				</div>
				<span className="sidebar__brand-name">{showSidebar ? "TBD" : ""}</span>
			</div>
			<nav className="sidebar__nav">
                <NavLink to="/">
                    <button className={`sidebar__button${active === 0 ? " sidebar__button--active" : ""}`}>
                        <House className="sidebar__icon" />{showSidebar ? "Home" : ""}
                    </button>
                </NavLink>
				<NavLink to="/quizzes"><button className={`sidebar__button${active === 1 ? " sidebar__button--active" : ""}`}><ClipboardList className="sidebar__icon" />{showSidebar ? "Quizzes" : ""}</button></NavLink>
				<NavLink to="/"><button className={`sidebar__button${active === 2 ? " sidebar__button--active" : ""}`}><Compass className="sidebar__icon" />{showSidebar ? "Explore" : ""}</button></NavLink>
				<NavLink to="/"><button className={`sidebar__button${active === 3 ? " sidebar__button--active" : ""}`}><Settings className="sidebar__icon" />{showSidebar ? "Settings" : ""}</button></NavLink>
			</nav>
			<button className="sidebar__button sidebar__button--secondary" onClick={() => setShowSidebar(prev => !prev)}>
                <Menu className="sidebar__icon" />
				{showSidebar ? "Hide" : ""}
            </button>
		</aside>
	);
}
