import React from 'react';
import { Link } from 'react-router-dom';

function Evaluation(props) {
    let resultMessage = '';

    const nghanh_nghe  = ["Công nghệ thông tin", "Xây dựng", "Sản xuất", "Data", "Tester"]

    if (props.score >= 0 && props.score <= 2) {
        resultMessage = `Bạn có thể phù hợp với ngành ${nghanh_nghe[1]}`;
    } else if (props.score > 2 && props.score <= 4) {
        resultMessage = `Bạn có thể phù hợp với ngành ${nghanh_nghe[2]}`;
    } else if (props.score > 4 && props.score <= 6) {
        resultMessage = `Bạn có thể phù hợp với ngành ${nghanh_nghe[3]}`;
    } else if (props.score > 6 && props.score <= 8) {
        resultMessage = `Bạn có thể phù hợp với ngành ${nghanh_nghe[4]}`;
    } else if (props.score > 8 && props.score <= 10) {
        resultMessage = `Bạn có thể phù hợp với ngành ${nghanh_nghe[5]}`;
    }

    return (
        <>
            {/* <div className='show-score'>Dưới đây là kết quả của bạn:</div> */}
            <div className='show-score'>{resultMessage}</div>
            <Link to={"/findjob"}>
                <button className="btn-job">Tìm Công Việc Phù Hợp</button>
            </Link>
            <button id="next-button" onClick={props.tryAgain}>Thử lại</button>
        </>
    );
}

export default Evaluation;