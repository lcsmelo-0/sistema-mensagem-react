import React from "react";
import { headerData } from "./header-db";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { requestRouting } from "../../../actions/routing";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = route => {
    dispatch(requestRouting(route));
  };

  const generateHeaderButtons = () =>
    headerData.map((data, i) => (
      <button
        key={i}
        onClick={() => handleClick(data.route)}
        className={
          window.location.pathname.includes(data.route) ? "active" : null
        }
      >
        {data.title}
      </button>
    ));

  return (
    <header className="Header">
      <div>{generateHeaderButtons()}</div>
    </header>
  );
};

export default Header;
