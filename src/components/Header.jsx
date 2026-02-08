import { useState } from "react";
import darkIcon from "../assets/dark.png";
import lightIcon from "../assets/turn-on.png";

function Header({onToggleSideBar}){
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark-mode");
    };

    return(
        <div className="header">
            <button className="toggle-btn" onClick={onToggleSideBar}> ☰</button>
            <h2 className="title">
                Nabigh Dashboard 
            </h2>
            <button className="btn-dark-mode" onClick={toggleDarkMode} title="Toggle dark mode">
                <img src={isDarkMode ? darkIcon : lightIcon} alt="Dark mode toggle" className="switch-icon" />
            </button>
        </div>
    )
}
export default Header;