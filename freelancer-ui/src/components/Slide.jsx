import React, { useState, useEffect, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import sli from "../img/Slide.jpeg"; 
import sli1 from "../img/Slide1.jpeg";
import sli2 from "../img/Slide2.jpeg";
import { AuthContext } from "../context/authContext";

function Slide() {
  const {  currentUser } = useContext(AuthContext)


  const [currentImage, setCurrentImage] = useState(sli);
  const [title, setTitle] = useState("Title");
  const [content, setContent] = useState("Content Slider");

  const slides = useMemo(() => [
    { backgroundImage: sli, title: "Tại sao nên học tin học văn phòng", content: "Tin học văn phòng là một bộ kỹ năng cần thiết   cho hầu hết các ngành …" },
    { backgroundImage: sli1, title: "Tại sao tìm nơi học IELTS lại quan trọng", content: "Giáo viên giàu kinh nghiệm: Trung tâm uy tín sở hữu đội ngũ giáo viên …" },
    { backgroundImage: sli2, title: "Tìm hiểu ngay về nghành khoa học máy tính", content: "Khoa học máy tính là ngành học sôi động và đầy tiềm năng, đóng vai trò…" },
  ], []); 

  const currentSlide = slides.find((slide) => slide.backgroundImage === currentImage);

  useEffect(() => {
    let intervalId;
    const changeSlide = () => {
      const nextIndex = (slides.indexOf(currentSlide) + 1) % slides.length;
      const nextSlide = slides[nextIndex];
      setCurrentImage(nextSlide.backgroundImage);
      setTitle(nextSlide.title);
      setContent(nextSlide.content);
    };

    intervalId = setInterval(changeSlide, 5000);

    return () => clearInterval(intervalId);
  }, [currentSlide, slides]); 

  return (
    <div style={{ backgroundImage: `url(${currentImage})`}} className="slider">
      <div  className="container">
        <h1>{title}</h1>
        <p>{content}</p>
        { currentUser ? (
          <Link to={"/addjob"}>
              <button className="btn">ĐĂNG DỰ ÁN</button>
          </Link>
        ) : (
          <Link style={{display: "none"}}  to={"/addjob"}>
              <button className="btn">ĐĂNG DỰ ÁN</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Slide;
