import SideBar from "../components/Sidebar"
import Header from "../components/Header"
import { useEffect, useState } from "react"
import MainContent from "../components/MainContent"
import { useNavigate } from "react-router-dom"
import { CoursesData } from "../data/data"
function DashboardLayouts({ setIsLoggedIn }) {
    const [showSideBar, setShowSideBar] = useState(true)
    const [activePage, setActivePage] = useState("dashboard")

    const navigate = useNavigate();

    const [courses, setCourses] = useState(() => {
        const savedCourses = localStorage.getItem("courses");
        if (savedCourses) {
        const parsedCourses = JSON.parse(savedCourses);
        return parsedCourses.map(savedItem => {
            const originalItem = CoursesData.find(d => d.id === savedItem.id);
            return {
                ...savedItem,
                Image: originalItem ? originalItem.Image : savedItem.Image
            };
        });
    }
    return CoursesData;

    });

    useEffect(() => {
        localStorage.setItem("courses", JSON.stringify(courses));
    }, [courses]);


    const ToggleSideBar = () => {
        setShowSideBar(!showSideBar)
    };
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/Login")

    }
    return (
        <div className="layout">
            {showSideBar && (
                <SideBar activePage={activePage} onPageChange={setActivePage} onLogout={handleLogout} />
            )}
            <div className="main-area">
                <Header onToggleSideBar={ToggleSideBar} />
                <MainContent activePage={activePage} courses={courses} setCourses={setCourses} />
            </div>


        </div>
    );
}
export default DashboardLayouts;