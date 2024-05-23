import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Hotjob() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/Server/job/alljob');
            setProjects(response.data.project);
        };
    
        fetchProjects();
    }, []);

    return ( 
        <div className="hotjob">
            <div className="container">
                <h1>CÔNG VIỆC ĐƯỢC QUAN TÂM NHẤT</h1>
                
                {projects.slice(0 , 3).map((project, index) => (
                    <Link key={project._id} className="link" to={`/ungtuyen/${project._id}`}>
                        <div className="jobin" >
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
                                <p>Mức lương: {project.muc_luong}USD</p>
                                <p>Số lượng: {project.so_luong}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                <div className="btn">
                <Link to={"/findjob"}>
                        <button className="btn">XEM THÊM CÔNG VIỆC</button>
                </Link>
                </div>
            </div>
        </div>
     );
}

export default Hotjob;