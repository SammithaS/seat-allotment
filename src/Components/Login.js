import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [action, setAction] = useState("Welcome to the Seat Allotment Portal!");
  const [hoverAdmin, setHoverAdmin] = useState(false);
  const [hoverStudent, setHoverStudent] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  //const flag = 1;

  //const navigate = useNavigate();

  const handleMouseOverAdmin = () => {
    setHoverAdmin(true);
  };

  const handleMouseOutAdmin = () => {
    setHoverAdmin(false);
  };

  const handleMouseOverStudent = () => {
    setHoverStudent(true);
  };

  const handleMouseOutStudent = () => {
    setHoverStudent(false);
  };

  const onClick = () => {
    setShowSubmitButton(true);
    // if (action === "Login as Student") {
    //   flag=0;
    // } else if (action === "Login as Admin") {
    //   flag=1;
    // }
  };

  const renderInputFields = () => {
    if (action === "Login as Admin") {
      return (
        <>
          <div className="input">
            <img src="" alt="" />
            <input type="text" placeholder="Username" defaultValue="admin" />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input
              type="password"
              placeholder="Password"
              defaultValue="secretadmin"
            />
          </div>
        </>
      );
    } else if (action === "Login as Student") {
      return (
        <>
          <div className="input">
            <img src="" alt="" />
            <input
              type="int"
              placeholder="Registration number"
              defaultValue="123456"
            />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input
              type="email"
              placeholder="Email"
              defaultValue="student@example.com"
            />
          </div>
          <div className="input">
            <img src="" alt="" />
            <input
              type="password"
              placeholder="Password - dd/mm/yyyy"
              defaultValue="password123"
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="body">
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="submit-container">
            <div
              className={`submit ${hoverStudent ? "teal" : "gray"}`}
              onMouseOver={handleMouseOverStudent}
              onMouseOut={handleMouseOutStudent}
              onClick={() => {
                setAction("Login as Student");
                onClick();
              }}
            >
              Login as Student
            </div>
            <div
              className={`submit ${hoverAdmin ? "teal" : "gray"}`}
              onMouseOver={handleMouseOverAdmin}
              onMouseOut={handleMouseOutAdmin}
              onClick={() => setAction("Login as Admin")}
            >
              Login as Admin
            </div>
          </div>
          {renderInputFields()}
          {showSubmitButton && (
            <div className="submit-container">
              <div className="submit">Submit</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
