import { useState } from "react";
import CourseModal from "../components/CourseModal";

function CoursesPage({ courses, setCourses }) {

    const [formData, setFormData] = useState({
        name: "",
        Track: "",
        price: "",
        Enrolled: "",
        active: "",
    })
    const [showForm, setShowForm] = useState(false)
    const [editingCourse, setEditingCourse] = useState(null) 
    const deleteCourse = (id) => {
        setCourses(courses.filter((d) => d.id !== id))
    }
    const handelInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (editingCourse) {
            setCourses(
                courses.map((item) => item.id === editingCourse ? {
                    ...item,
                    name: formData.name, 
                    Track: formData.Track,
                    price: formData.price,
                    Enrolled: formData.Enrolled,
                    active: formData.active === "true" || formData.active === true,
                } : item
                )


            )
        } else {
            const newCourse = {
                id: courses.length + 1,
                name: formData.name,
                Track: formData.Track,
                price: formData.price,
                Enrolled: formData.Enrolled,
                active: formData.active === "true" || formData.active === true
            };
            setCourses([...courses, newCourse])

        }
        CloseForm(); 
    };

    const openAddForm = () => {
        setEditingCourse(null);
        setFormData({
            name: "",
            Track: "",
            price: "",
            Enrolled: "",
            active: "",
        });
        setShowForm(true);
    };
    const openEditForm = (Courses) => { 
        setEditingCourse(Courses.id);
        setFormData({
            name: Courses.name,
            Track: Courses.Track,
            price: Courses.price,
            Enrolled: Courses.Enrolled,
            active: Courses.active
        });
        setShowForm(true)
    };
    const CloseForm = () => {
        setEditingCourse(false);
        setFormData({
            name: "",
            Track: "",
            price: "",
            Enrolled: "",
            active: "",
        });
        setShowForm(false);
    };
    return (
         <div>
        <CourseModal
            showForm={showForm}
            editingCourse={editingCourse}
            formData={formData}
            handelInputChange={handelInputChange}
            handelSubmit={handelSubmit}
            CloseForm={CloseForm}
        />

        <div className="page-header">
            <h2>Courses</h2>
            <button onClick={openAddForm} className="btn-add">Add Course</button>
        </div>

        
        <div className="courses-grid">
            {courses.map((item) => (
                <div className="course-card" key={item.id}>
                    <div className="course-image">
                      
                        <img  className="card-image" src={item.Image } alt={item.name} />
                        <span className={item.active ? "badge active" : "badge inactive"}>
                            {item.active ? "Published" : "Closed"}
                        </span>
                    </div>
                    
                    <div className="course-content">
                        <p className="course-track">{item.Track}</p>
                        <h3 className="course-title">{item.name}</h3>
                        
                        <div className="course-stats">
                            <span><strong>Price:</strong> {item.price} ⃁</span>
                            <span><strong>Enrolled:</strong> {item.Enrolled}</span>
                        </div>

                        <div className="course-actions">
                            <button className="btn-edit" onClick={() => openEditForm(item)}>Edit</button>
                            <button className="btn-delete" onClick={() => deleteCourse(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}
export default CoursesPage;