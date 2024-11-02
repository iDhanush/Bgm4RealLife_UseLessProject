import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={30}
          height={29}
          fill="none"
        >
          <path
            fill="#fff"
            d="M3.75 19.75c-.513 0-.937-.397-.937-.875v-8.75c0-.478.424-.875.937-.875s.938.397.938.875v8.75c0 .478-.425.875-.938.875M9.375 22.666c-.512 0-.937-.396-.937-.875V7.208c0-.478.425-.875.937-.875s.938.397.938.875v14.583c0 .479-.426.875-.938.875M15 25.584c-.512 0-.937-.397-.937-.875V4.292c0-.478.425-.875.937-.875s.938.397.938.875v20.417c0 .478-.426.875-.938.875M20.625 22.666c-.512 0-.937-.396-.937-.875V7.208c0-.478.425-.875.937-.875s.938.397.938.875v14.583c0 .479-.425.875-.938.875M26.25 19.75c-.512 0-.937-.397-.937-.875v-8.75c0-.478.425-.875.937-.875s.938.397.938.875v8.75c0 .478-.425.875-.938.875"
          />
        </svg>
        Bgm4RealLife
      </div>
      <div className="select-wrapper">
        <div className="selection">
          malayalam
        </div>
        <div className="select-box">
          <div className="list-item">Malayalam</div>
          <div className="list-item">English</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
