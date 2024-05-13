
import React, { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";
import axios from "axios";

const Creator = () => {

    const [creator, setCreator] = useState({})


    const { id } = useParams();


    useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await axios.get(`http://localhost:3001/Server/creator/${id}`);
              setCreator(res.data);
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
    }, [id]);
  
  
  

    return ( 
        <div className="creator">
            <div className="content">
                <img src={creator.img} alt="" />
                <h1>{creator.ten_tac_pham}</h1>
                <p>
                {creator.loai_tac_pham}
                </p>
                <p>
                {creator.mo_ta_tac_pham}
                </p>
                <p>
                {creator.gia}USD
                </p>
                <Link to={`/payment/${creator._id}`} >
                     <button className="btn-edit">Mua Ngay</button>
                </Link>
            </div>
        </div>
     );
}

export default Creator;