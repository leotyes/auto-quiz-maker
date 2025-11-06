import { useState } from "react";
import "./Sidebar.css";
import { House, ClipboardList, Settings, Compass, Menu } from "lucide-react";

export default function Sidebar({ active, showSidebar, setShowSidebar, setPage }) {
	return (
		<aside className={`sidebar${showSidebar ? "" : " sidebar--collapsed"}`}>
			<div className="sidebar__brand">
				<div className="sidebar__logo">
					⚡
				</div>
				<span className="sidebar__brand-name">{showSidebar ? "TBD" : ""}</span>
			</div>
			<nav className="sidebar__nav">
				<button className={`sidebar__button${active === 0 ? " sidebar__button--active" : ""}`} onClick={() => setPage(0)}>
					<House className="sidebar__icon" />{showSidebar ? "Home" : ""}
				</button>
				<button className={`sidebar__button${active === 1 ? " sidebar__button--active" : ""}`} onClick={() => setPage(1)}><ClipboardList className="sidebar__icon" />{showSidebar ? "Quizzes" : ""}</button>
				<button className={`sidebar__button${active === 2 ? " sidebar__button--active" : ""}`} onClick={() => setPage(2)}><Compass className="sidebar__icon" />{showSidebar ? "Explore" : ""}</button>
				<button className={`sidebar__button${active === 3 ? " sidebar__button--active" : ""}`} onClick={() => setPage(3)}><Settings className="sidebar__icon" />{showSidebar ? "Settings" : ""}</button>
			</nav>
			<button className="sidebar__button sidebar__button--secondary" onClick={() => setShowSidebar(prev => !prev)}>
                <Menu className="sidebar__icon" />
				{showSidebar ? "Hide" : ""}
            </button>
		</aside>
	);
}
