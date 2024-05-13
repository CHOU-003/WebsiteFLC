import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Slide from "../components/Slide";
import Hotjob from "../components/Hotjob";
import Live from "../img/stream.png";
import ChatBot from 'react-simple-chatbot';
import Joblist from "./JOB/Joblist";


import HotCreator from "../components/HotCreator";
import axios from "axios";

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
    recognitionEnable={true}
    floating={true}
    steps={[
        {
            id: '1',
            message: 'Chào bạn! Tôi có thể giúp gì cho dự án freelancer của bạn?',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            validator: (value) => {
                if (value.trim() === '') {
                    return 'Bạn chưa nhập thông tin. Vui lòng thử lại.';
                }
                return true;
            },
            trigger: '3',
        },
        {
            id: '3',
            message: 'Bạn muốn tìm công việc trong nhóm ngành nghề như thế nào ?',
            validator: (value) => {
                if (value.trim() === '') {
                    return 'Bạn chưa nhập thông tin. Vui lòng thử lại.';
                }
                return true;
            },
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
            message: 'Bên dưới là một số công việc phù hợp bạn có thể ứng tuyển.',
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
            trigger: '10',
        },
        {
            id: '10',
            message: 'Bạn có câu hỏi cụ thể nào không?',
            trigger: '11',
        },
        {
            id: '11',
            user: true,
            validator: (value) => {
                if (value.trim() === '') {
                    return 'Bạn chưa nhập thông tin. Vui lòng thử lại.';
                }
                return true;
            },
            trigger: (value) => {
                if (typeof value === 'string') {
                    if (value.toLowerCase().includes('cách đăng ký')) {
                        return '12';
                    } else if (value.toLowerCase().includes('cách tìm việc')) {
                        return '13';
                    } else {
                        return '14';
                    }
                } else {
                    return '14';
                }
            },
        },
        {
            id: '12',
            message: 'Để đăng ký, bạn cần làm theo các bước sau...',
            end: true,
        },
        {
            id: '13',
            message: 'Để tìm việc, bạn cần làm theo các bước sau...',
            end: true,
        },
        {
            id: '14',
            message: 'Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi lại không?',
            trigger: '10',
        }        
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
                    <div className="post" key={posts.id}>
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