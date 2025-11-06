import "./UsernameTopBar.css";
import { User } from "lucide-react";

export default function UsernameTopBar({ username = "Lucas Ding" }) {
    return (
		<div className="username-topbar" title={username}>
			<span className="username-topbar__text">{username}</span>
			<User className="username-topbar__icon" />
		</div>
	);
}