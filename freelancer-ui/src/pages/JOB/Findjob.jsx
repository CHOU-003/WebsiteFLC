import React, { useEffect, useState } from "react";
import axios from 'axios';

function Findjob() {
    const [projects, setProjects] = useState([]);
    const [fillter, setFillters] = useState([]);
    const [tempFilters, setTempFilters] = useState({});

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await axios.get('/Server/job/alljob', {params: fillter});
            setProjects(response.data.project.reverse());
        };
    
        fetchProjects();
    }, [fillter]);

    const handleFilterChange = (event) => {
        setTempFilters({
            ...tempFilters,
            [event.target.name]: event.target.value
        });
    };

    const handleSearch = () => {
        setFillters(tempFilters);
    };

    return ( 
        <div className="findjob">
            <div className="container">
            <div className="filters">
                <input type="text" name="search" placeholder="Search" onChange={handleFilterChange} />
              { /*  <input type="text" name="projectId" placeholder="Project ID" onChange={handleFilterChange} /> */}
                <input type="text" name="nganh_nghe" placeholder="Ngành nghề" onChange={handleFilterChange} />
                <input type="number" name="min" placeholder="Mức lương tối thiểu" onChange={handleFilterChange} />
                <input type="number" name="max" placeholder="Mức lương tối đa" onChange={handleFilterChange} /><button onClick={handleSearch}>Tìm kiếm</button>
            </div>

                    {projects.map((project, index) => (
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
                    ))}
                </div>
            </div>
     );
}

export default Findjob;
