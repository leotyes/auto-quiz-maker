import { useUserStore } from "../../stores/userStore";
import "./UsernameTopBar.css";
import { User } from "lucide-react";
import { Link } from "react-router-dom";

export default function UsernameTopBar() {
    const userId = useUserStore((state) => state.userId);
    const username = useUserStore((state) => state.username);
    const isAuthenticated = useUserStore((state) => state.isAuthenticated);

    return (
		<div className="username-topbar" title={username}>
            {isAuthenticated ? (
                <span className="username-topbar__text">{username}</span>
            ) : (
                <Link to="/login" className="username-topbar__link">
                    <span className="username-topbar__text">Log In</span>
                </Link>
            )}        
            <User className="username-topbar__icon" />
		</div>
	);
}