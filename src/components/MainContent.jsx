import StudentsPage from "./StudentsPage";
import CoursesPage from "./CoursesPage";
import StatCard from "./StatCard";
import QuizAPI from "./QuizAPI";
import { CoursesData , StudentsData, InstructorsData} from "../data/data";
import CourseStatus from "./CourseStatus";
import InstructorsPage from "./InstructorsPage";
function MainContent({activePage , courses, setCourses}) {

    const totalCourses = courses.length;
    const totalStudents = StudentsData.length;
    const totalInstructors = InstructorsData.length;
    

    if(activePage === "courses"){
        return(
            <main className="main">
                <CoursesPage  courses={courses} setCourses={setCourses}/>
            </main>
        );
    }
    if (activePage === "students"){
        return(
            <main className="main">
                <StudentsPage />{" "}
            </main>
        );
    }
     if (activePage === "quizAPI"){
        return(
            <main className="main">
                <QuizAPI />{" "}
            </main>
        );
    }
    if (activePage === "instructors"){
        return(
            <main className="main">
                <InstructorsPage />{" "}
            </main>
        );
    }
    return(
        <div className="main-content">
            
            <div className="card-grid">
                <StatCard  title={"total Courses"} value={totalCourses} />
                <StatCard  title={"total Students"} value={totalStudents} />
                <StatCard  title={"total Instructors"} value={totalInstructors} />
                
            </div>
            <CourseStatus courses={CoursesData}/>
        </div>
    );
}
export default MainContent;