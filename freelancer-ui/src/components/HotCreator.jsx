import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HotCreator() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const response = await axios.get('/Server/creator/allcreator');
            setCreators(response.data.creator);
        };
    
        fetchCreators();
    }, []);

    return ( 
        <div className="hotcreator">
            <h1>Những mẫu sáng tạo nổi bật nhất</h1>
            <div className="container">
                {creators.slice(0 , 8).map((creator, index) => (
                        <div className="item" key={index}>
                            <Link to={`/creator/${creator._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="img">
                                    <img src={creator.img} alt="" />
                                </div>
                                <div className="content">
                                    <p>{creator.ten_tac_pham}</p>
                                    <p>Gía: {creator.gia}USD</p>
                                </div>
                            </Link>
                        </div>
                    
                ))}
            </div>
            <div className="btn">
                    <Link to={"/allcreator"}>
                        <button>Xem thêm mẫu sáng tạo</button>
                    </Link>
            </div>
        </div>
     );
}

export default HotCreator;