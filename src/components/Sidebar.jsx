import logo from'../assets/nabigh-logo.png';


function SideBar({ activePage, onPageChange , onLogout}) {
    const navItems = [
        { Id: "dashboard", label: "Dashboard" },
        { Id: "courses", label: "Courses" },
        { Id: "students", label: "Students" },
        { Id: "instructors", label: "Instructors" },
        { Id: "quizAPI"  , label: "QuizAPI"},
    ];
    return (
        <aside className="sidebar">
    
            <div className="logo-container">
        <img src={logo} alt="Nabigh Logo" className="main-logo" />
        
      </div>
            
            <nav>
                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li
                            key={item.Id}
                            className={activePage === item.Id ? "nav-item active" : "nav-title"}
                            onClick={() => onPageChange(item.Id)}>
                        {item.label}
                        </li>
                    ))}

                </ul>
                 <button className="btn-logout" onClick={onLogout}> Logout</button>
            </nav>
        </aside>
    )
}
export default SideBar;