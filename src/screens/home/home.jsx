import React from "react";
import './home.scss';
import Logo from'../../img/laptop.png';
const Home = () => {
  return (
    <div className="home">
     <img src={Logo} alt="" className="icon"/>
      <h1>Trang Chủ</h1>
      <h1>Giới Thiệu</h1>
      <h1>Liên Hệ</h1>
      <h1>Phản Hồi</h1>
    </div>
  );
};

export default Home;
