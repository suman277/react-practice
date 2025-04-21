import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return (
    <>
      <div id="heading">
        <div id="img-src">
          <img
            src="https://images.unsplash.com/photo-1666389785855-a963e0519f18?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="food logo"
          />
        </div>
        <div id="nav-items">
          <ul id="list">
            <li>Home </li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Orders</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const ResCards = () => {
  return (
    <>
      <div id="res-body">
        <div id="res-img">
          <img
            src="https://images.unsplash.com/photo-1666389785855-a963e0519f18?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="food logo"
          />
        </div>
        <div id="res-card">
        <h3>Food Carnival</h3>
        
        </div>
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Heading />
      <ResCards/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
