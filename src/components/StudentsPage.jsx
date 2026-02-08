import { StudentsData } from "../data/data";
import { useState } from "react";

function StudentsPage(){
    const [Students, setStudents]= useState(StudentsData);
    const deleteStudents =(id)=>{
        setStudents(Students.filter((d)=> d.id !==id))
    }
    return(
        <div>
            <div className="page-header">
                <h2>Students</h2>
                <button className="btn-add">Add Students </button>
            </div>
            <table className="table">
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Course Name</th>
                    <th>Progress</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {Students.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.course_id}</td>
                        <td>{item.progress}</td>
                        <td>
                            <span className={item.active ? "badge In-Progress": "badge Completed"}>
                                {""}
                                {item.active ? "In Progress" : "Completed"}
                            </span>
                        </td>
                        <td>
                            <button className="btn-edit">Edit</button>
                            <button className="btn-delete" onClick={()=>deleteStudents(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>

            </table>
        </div>
    );
}
export default StudentsPage;
