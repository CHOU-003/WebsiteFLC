import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ManagerJob() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('/Server/job/quanly');
                setProjects(response.data);
            } catch (error) {
                console.error("Không thể tải dự án", error);
            }
        };

        fetchProjects();
    }, []);

    if (!projects.length) {
        return <div className="managerjob">Không có dự án nào.</div>;
    } 
    


    return (
        <div className="managerjob">
            <h1>Quản Lý Các Dự Án Của Bạn</h1>
            <div className="listjob">
                {projects.map((project) => (
                <div className="itemjob" key={project._id}>
                    <h2>{project.ten_du_an}</h2>
                    <p>{project.mo_ta_du_an}</p>
                    <p>Ngành nghề: {project.nganh_nghe}</p>
                    <p>Số lượng tuyển: {project.so_luong}</p>
                    <p>Kỹ năng cần thiết: {project.ky_nang_can_thiet}</p>
                    <p>Mức lương: {project.muc_luong}</p>
                    <p>Thời hạn dự án: {project.thoi_han_du_an}</p> <p>Hạn chót nộp hồ sơ: {project.han_chot_nop_ho_so}</p>
                    <div className="btn">
                        <Link to={`/editjob/${project._id}`} >
                            <button className="btn-edit">Chỉnh sửa</button>
                        </Link>
                        <Link to={`/deletejob/${project._id}`} >
                            <button className="btn-delete">Xóa</button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default ManagerJob;
