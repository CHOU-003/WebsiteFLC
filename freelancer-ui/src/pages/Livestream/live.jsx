import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LivePage = () => {

    const [roomCode, setRoomCode] = useState('')
    const navigate = useNavigate();


const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate('/room/');
};

    return (
        <div className='live-page'>
            <form onSubmit={handleFormSubmit} className='form'>
                <div>
                    <lable>Enter Room Code</lable>
                    <input value={roomCode} 
                    onChange={e => setRoomCode(e.target.value)} 
                    type="text" required placeholder='Enter Room Code' />
                </div>
                <button type="submit">Enter Room</button>
            </form>
        </div>
    )

    
}

export default LivePage