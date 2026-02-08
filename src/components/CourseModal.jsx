function CourseModal({
    showForm,
    editingCourse,
    formData,
    handelInputChange,
    handelSubmit,
    CloseForm,
}) {

    return (
        <>
            {showForm && (<div className="modal-overlay">
                <div className="modal">
                    <h3>{editingCourse ? "Edit Course" : "Add Course"}</h3> 
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
                            <label>Track</label>
                            <input type="text"
                                name="Track"
                                value={formData.Track}
                                onChange={handelInputChange}
                                required></input>

                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type="number"
                                name="price"
                                value={formData.price}
                                onChange={handelInputChange}
                                required></input>

                        </div>
                        <div className="form-group">
                            <label>Enrolled</label>
                            <input type="number"
                                name="Enrolled"
                                value={formData.Enrolled}
                                onChange={handelInputChange}
                                required></input>

                        </div>
                        <div className="form-group">
                            <label>Status</label>
                            <select
                                name="active"
                                value={formData.active}
                                onChange={handelInputChange}
                                required>
                                <option value="">Select status</option>
                                <option value={true}>Published</option>
                                <option value={false}> Closed</option>
                            </select>
                            <div className="form">
                                <button type="submit" className="btn-add">{editingCourse ? "Update" : "Add"}</button>
                                <button type="button" className="btn-cancel" onClick={CloseForm}>Cancel</button>
                            </div>

                        </div>

                    </form>



                </div>
            </div>

            )}
        </>
    )
}
export default CourseModal;