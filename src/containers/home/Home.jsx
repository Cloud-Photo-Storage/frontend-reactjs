import React from "react";
import "./home.css";
import macbook1 from "../../assets/macbook1.png";

const Home = () => {
  return (
    <div className="home">
      <div className="row1">
        <div>
          <p>Store pictures geographically</p>
        </div>
        <div>
          <img src={macbook1} alt="demo-macbook"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
