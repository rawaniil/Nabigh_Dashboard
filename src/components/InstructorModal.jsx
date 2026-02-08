function InstructorModal({
    showForm,
    editingInstructor,
    formData,
    handelInputChange,
    handelSubmit,
    CloseForm,
}) {

    return (
        <>
            {showForm && (<div className="modal-overlay">
                <div className="modal">
                    <h3>{editingInstructor ? "Edit Instructor" : "Add Instructor"}</h3>
                    <form onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text"
                                name="name"
                                value={formData.name}
                                onChange={handelInputChange}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label>Specialty</label>
                            <input type="text"
                                name="specialty"
                                value={formData.specialty}
                                onChange={handelInputChange}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label>Bio</label>
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handelInputChange}
                                required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Courses Count</label>
                            <input type="number"
                                name="coursesCount"
                                value={formData.coursesCount}
                                onChange={handelInputChange}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label>Image URL</label>
                            <input type="text"
                                name="image"
                                value={formData.image}
                                onChange={handelInputChange}
                                required></input>
                        </div>
                        <div className="form-group">
                            <label>Rating</label>
                            <input type="number"
                                step="0.1"
                                min="0"
                                max="5"
                                name="rating"
                                value={formData.rating}
                                onChange={handelInputChange}
                                required></input>
                        </div>
                        <div className="form-actions">
                            <button type="submit" className="btn-add">{editingInstructor ? "Update" : "Add"}</button>
                            <button type="button" className="btn-cancel" onClick={CloseForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>)}
        </>
    );
}
export default InstructorModal;
