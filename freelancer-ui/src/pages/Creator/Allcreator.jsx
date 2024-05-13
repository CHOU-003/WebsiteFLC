import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Allcreator() {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const response = await axios.get('/Server/creator/allcreator');
            setCreators(response.data.creator);
        };
    
        fetchCreators();
    }, []);

    return ( 
        <div className="allcreator">
            <div className="container">
            {creators.map((creator, index) => (
                <div className="item" key={index}>
                    <Link to={`/creator/${creator._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h3>{creator.ten_tac_pham}</h3>
                        <div className="img">
                            <img src={creator.img} alt="" />
                        </div>
                        <div className="content">
                            <p>{creator.mo_ta_tac_pham}</p>
                            <p>Gía: {creator.gia}USD</p>
                        </div>
                        <button className="btn">Mua Ngay</button>
                    </Link>
                </div>
            ))}
            </div>
        </div>
     );
}

export default Allcreator;
