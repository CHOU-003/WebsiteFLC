import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slide from '../components/Slide';
import Hotjob from '../components/Hotjob';
import Live from '../img/stream.png';
import ChatBot from 'react-simple-chatbot';
import Joblist from './JOB/Joblist';
import HotCreator from '../components/HotCreator';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([])

  const projects = Joblist.projects;

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`Server/posts${cat}`);
        setPosts(res.data.reverse());
      }catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [cat])


    return ( 
      <div>
<ChatBot className="chat-bot"
    headerTitle="Freelancer Support"
    speechSynthesis={{ enable: true, lang: 'vi-VN' }}
    recognitionEnable={true}
    floating={true}
    steps={[
        {
            id: '1',
            message: 'Chào bạn! Tôi có thể giúp gì cho công việc freelancer của bạn?',
            trigger: '2',
        },
        {
            id: '2',
            options: [
                { value: 1, label: 'Tìm Công Việc', trigger: '3' },
                { value: 2, label: 'Cách Đăng Ký', trigger: '11' },
                { value: 3, label: 'Mua Tác Phẩm', trigger: '13' },
                { value: 4, label: 'Viết Blog', trigger: '14' },
                { value: 5, label: 'Nhân Viên Tư Vấn', trigger: 'tuvan' },
            ],
        },
        {
            id: '3',
            message: 'Bạn muốn tìm công việc trong nhóm ngành nghề như thế nào ?',
            trigger: '4',
        },
        {
            id: '4',
            user: true,
            validator: (value) => {
                if (value.trim() === '') {
                    return 'Bạn chưa nhập thông tin. Vui lòng thử lại.';
                }
                return true;
            },
            trigger: '5',
        },
        {
            id: '5',
            message: 'Cảm ơn bạn đã cung cấp thông tin. Tôi sẽ giúp bạn với {previousValue}.',
            trigger: '6',
        },
        {
            id: '6',
            user: true,
            validator: (value) => {
                if (value.trim() === '') {
                    return 'Bạn chưa nhập thông tin. Vui lòng thử lại.';
                }
                return true;
            },
            trigger: '7',
        },
        {
            id: '7',
            message: 'Bên dưới là một số công việc phù hợp bạn có thể ứng tuyển với.',
            trigger: '8',
        },
        {
            id: '8',
            component: <Joblist projects={projects} />,
            trigger: '9',
        },
        {
            id: '9',
            message: 'Tôi mong nó sẽ phù hợp với bạn <3',
            trigger: '18',
        },
        {
            id: '18',
            delay: 1000,
            message: 'Bạn cần tôi giúp gì nữa không ?',
            trigger: '10',
        },
        {
            id: '10',
            options: [
                { value: 1, label: 'Cách Đăng Ký', trigger: '11' },
                { value: 2, label: 'Mua Tác Phẩm', trigger: '13' },
                { value: 3, label: 'Viết Blog', trigger: '14' },
                { value: 4, label: 'Tìm Công Việc', trigger: '3' },
            ],
        },
        {
            id: '11',
            component: <Link className="btn-in-chat" to={"/register"} >Đăng Ký</Link>,
            trigger: '15',
        },
        {
            id: '15',
            message: 'Để đăng ký, bạn cần ấn vào đăng ký và điền đầy đủ thông tin',
            trigger: '10',
        },
        {
            id: 'tuvan',
            component: (
                <div>
                    <a  href="https://www.facebook.com/profile.php?id=100036000002580">Facebook</a><br />
                    <a  href="https://web.whatsapp.com/">WhatsApp</a>
                    <p className="phone-number">Gọi số: 0369855265</p>
                </div>
            )
        },
        {
            id: '13',
            message: 'Để mua tác phẩm, bạn cần làm theo các bước sau: 1. ẤN VÀO TÁC PHẨM MUỐN MUA. 2. ẤN MUA NGAY. 3. THANH TOÁN',
            trigger: '16',
        },
        {
            id: '16',
            component: <Link className="btn-in-chat" to={"/allcreator"} >Các Tác Phẩm</Link>,
            trigger: '10',
        },
        {
            id: '14',
            message: 'Ấn vào nút bên dưới để viết Blog',
            trigger: '17',
        },
        {
            id: '17',
            component: <Link className="btn-in-chat" to={"/write"} >Viết Blog</Link>,
            trigger: '10',
        },
        
    ]}
/>
        <Link className="btn-stream" to={"/livestream"}>
            <img src={Live} alt="" />
        </Link>
        <Slide />
        <Hotjob />
        <div className="home">
            <div className="posts">
                {posts.slice(0, 6).map((posts) => (
                    <div className="post" key={posts._id}>
                        <div className="img">
                            <img src={posts.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${posts._id}`}>
                                <h1>{posts.tieu_de}</h1>
                            </Link>
                            <p>{posts.noi_dung}</p>
                            <button>Đọc Thêm</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <HotCreator />
      </div>
     );
}

export default Home;