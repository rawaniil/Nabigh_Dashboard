import { InstructorsData } from "../data/data";
import { useState } from "react";
import InstructorModal from "../components/InstructorModal";

function InstructorsPage(){
    const [Instructors, setInstructors]= useState(InstructorsData);
    const [searchQuery, setSearchQuery] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        specialty: "",
        bio: "",
        coursesCount: "",
        image: "",
        rating: "",
    });
    const [showForm, setShowForm] = useState(false);
    const [editingInstructor, setEditingInstructor] = useState(null);
    
    const deleteInstructors =(id)=>{
        setInstructors(Instructors.filter((d)=> d.id !==id))
    }
    
    const handelInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSearchChange = (e) => {
        // keep the user's typed value as-is (preserve case in the input)
        setSearchQuery(e.target.value);
    }

    const q = searchQuery.trim().toLowerCase();
    const filteredInstructors = Instructors.filter((instructor) => {
        const name = (instructor.name || "").toLowerCase();
        const specialty = (instructor.specialty || "").toLowerCase();
        const bio = (instructor.bio || "").toLowerCase();
        if (!q) return true; // when query empty, show all
        return (
            name.includes(q) ||
            specialty.includes(q) ||
            bio.includes(q)
        );
    });
    
    const handelSubmit = (e) => {
        e.preventDefault();
        if (editingInstructor) {
            setInstructors(
                Instructors.map((item) => item.id === editingInstructor ? {
                    ...item,
                    name: formData.name,
                    specialty: formData.specialty,
                    bio: formData.bio,
                    coursesCount: parseInt(formData.coursesCount),
                    image: formData.image,
                    rating: parseFloat(formData.rating),
                } : item
                )
            )
        } else {
            const newInstructor = {
                id: Instructors.length + 1,
                name: formData.name,
                specialty: formData.specialty,
                bio: formData.bio,
                coursesCount: parseInt(formData.coursesCount),
                image: formData.image,
                rating: parseFloat(formData.rating),
                active: true
            };
            setInstructors([...Instructors, newInstructor])
        }
        CloseForm();
    };
    
    const openAddForm = () => {
        setEditingInstructor(null);
        setFormData({
            name: "",
            specialty: "",
            bio: "",
            coursesCount: "",
            image: "",
            rating: "",
        });
        setShowForm(true);
    };
    
    const openEditForm = (Instructor) => {
        setEditingInstructor(Instructor.id);
        setFormData({
            name: Instructor.name,
            specialty: Instructor.specialty,
            bio: Instructor.bio,
            coursesCount: Instructor.coursesCount,
            image: Instructor.image,
            rating: Instructor.rating
        });
        setShowForm(true)
    };
    
    const CloseForm = () => {
        setEditingInstructor(false);
        setFormData({
            name: "",
            specialty: "",
            bio: "",
            coursesCount: "",
            image: "",
            rating: "",
        });
        setShowForm(false);
    };
    
    return(
        <div>
            <InstructorModal
                showForm={showForm}
                editingInstructor={editingInstructor}
                formData={formData}
                handelInputChange={handelInputChange}
                handelSubmit={handelSubmit}
                CloseForm={CloseForm}
            />
            
            <div className="page-header">
                <h2>Instructors</h2>
                <button onClick={openAddForm} className="btn-add">Add Instructors </button>
            </div>

            <div className="search-input-group">
                <input 
                    type="text" 
                    placeholder="Search by name, specialty, or bio..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {searchQuery && (
                <div style={{textAlign: 'center', color: 'var(--text-muted)', marginBottom: '12px', fontSize: '0.9rem'}}>
                    Found: {filteredInstructors.length} instructor{filteredInstructors.length !== 1 ? 's' : ''}
                </div>
            )}

            <div className="instructors-grid">
                {filteredInstructors.map((item)=>(
                    <div className="instructor-card" key={item.id}>
                        <div className="instructor-image">
                            <img src={item.image } alt={item.name} />
                            <span className={item.active ? "badge inactive" : "badge active"}>
                                {item.rating} ⭐
                            </span>
                        </div>
                        
                        <div className="instructor-content">
                            <h3 className="instructor-name">{item.name}</h3>
                            <p className="instructor-specialty">{item.specialty}</p>
                            <p className="instructor-bio">{item.bio}</p>
                            
                            <div className="instructor-stats">
                                <span><strong>Courses:</strong> {item.coursesCount}</span>
                            </div>

                            <div className="instructor-actions">
                                <button className="btn-edit" onClick={() => openEditForm(item)}>Edit</button>
                                <button className="btn-delete" onClick={()=>deleteInstructors(item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default InstructorsPage;
