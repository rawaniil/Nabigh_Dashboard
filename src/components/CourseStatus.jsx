function CourseStatus({ courses }) {

    const totalCourses = courses.length;
    const published = courses.filter((course) => course.active === true).length;
    const closed = courses.filter((course) => course.active === false).length;
    return (
        <div className="course-status">
            <h3>Course Status</h3>
            <div className="status-item">
                <span>Published</span>
                <span>{published}</span>
                <div className="progress-bar">
                    <div className="progress-fill-green" style={{ width: `${(published/ totalCourses) * 100}%` }}>
                    </div>
                </div>
            </div>
            <div className="status-item">
                <span>Closed</span>
                <span>{closed}</span>
                <div className="progress-bar">
                    <div className="progress-fill-red" style={{ width: `${(closed / totalCourses) * 100}%` }}>
                    </div>
                </div>
            </div>
        </div>
            );
}
            export default CourseStatus;