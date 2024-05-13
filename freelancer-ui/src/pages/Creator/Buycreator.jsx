import React ,{ useState } from "react";
import axios from "axios";
import { useNavigate , useParams} from "react-router-dom";

function Payment() {
    const [input, setInput] = useState({
        phuong_thuc_thanh_toan: ""
    })

    const { id } = useParams();

    const [error , setError] = useState({})

    const navigate = useNavigate();


    const handleChange = (e) => {
        setInput(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3001/Server/payment/pay/${id}`, input)
            alert("XÁC NHẬN THANH TOÁN THÀNH CÔNG <3")
            navigate("/allcreator")
        }
        catch (err) {
            setError(err.response.data)
        }
    }

    return ( 
        <div className="payment">
                <div className="selection">
                <div className="pay-selection">
                    <label>PHƯƠNG THỨC THANH TOÁN:</label>
                        <div>
                            <input type="radio" id="male" name="phuong_thuc_thanh_toan" value="VISA" required onChange={handleChange} />
                            <label htmlFor="male">Visa</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="phuong_thuc_thanh_toan" value="CREDIT" required onChange={handleChange} />
                            <label htmlFor="female">Credit</label>
                        </div>
                        <div>
                            <input type="radio" id="female" name="phuong_thuc_thanh_toan" value="Master Card" required onChange={handleChange} />
                            <label htmlFor="female">Master Card</label>
                        </div>
                </div>
                </div>
                <div className="btn-buy">
                    <button onClick={handleSubmit}  type="submit" className="btn-now">THANH TOÁN</button>
                    {error && <p>{error.message}</p>}
                </div>
        </div>
     );
}

export default Payment;