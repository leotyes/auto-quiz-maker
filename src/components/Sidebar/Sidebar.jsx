import "./Sidebar.css";
import { House, ClipboardList, Settings, Menu } from "lucide-react";

export default function Sidebar() {
	return (
		<aside className="sidebar">
			<div className="sidebar__brand">
				<div className="sidebar__logo" aria-hidden="true">
					⚡
				</div>
				<span className="sidebar__brand-name">TBD</span>
			</div>
			<nav className="sidebar__nav">
				<button className="sidebar__button sidebar__button--active">
					<House className="sidebar__icon" />Home
				</button>
				<button className="sidebar__button"><ClipboardList className="sidebar__icon" />Quizzes</button>
				<button className="sidebar__button"><Settings className="sidebar__icon" />Settings</button>
			</nav>
			<button className="sidebar__button sidebar__button--secondary">
                <Menu className="sidebar__icon" />
                Hide
            </button>
		</aside>
	);
}
