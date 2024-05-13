import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Joblist() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/Server/job/alljob');
            setProjects(response.data.project.reverse());
        };
    
        fetchProjects();
    }, []);


    return ( 
        <div className="joblist">
            <div className="container">
                    {projects.slice(0, 3).map((project, index) => (
                    <Link className="link" to={`/ungtuyen/${project._id}`}>
                        <div className="jobinfo" key={index}>
                            <h3>{project.ten_du_an}</h3>
                            <p>Nhóm Ngành: {project.nganh_nghe}</p>
                        <div className="content">
                            <p>Thời hạn dự án: {project.thoi_han_du_an}</p>
                            <p>Thời hạn nộp hồ sơ: {project.han_chot_nop_ho_so}</p>    
                        </div>
                            <p>Mô tả dự án: {project.mo_ta_du_an}
                            </p>
                            <div className="extra">
                                <h5>Kỹ năng cần thiết: {project.ky_nang_can_thiet}</h5>
                                <p>Mức lương: {project.muc_luong}VNĐ</p>
                                <p>Số lượng: {project.so_luong}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
     );
}

export default Joblist;
