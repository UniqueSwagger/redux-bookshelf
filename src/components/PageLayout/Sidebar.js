import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const { readingList } = useSelector((state) => state.books);
  const { finishedList } = useSelector((state) => state.books);
  return (
    <div className="col-md-3">
      <ul className="list-group sticky-top  py-2">
        <NavLink as="li" className="list-group-item" to="/" exact>
          Discover
        </NavLink>
        <NavLink as="li" className="list-group-item" to="/reading">
          Reading List{" "}
          <span className="badge badge-sm bg-primary">
            {readingList.length}
          </span>
        </NavLink>
        <NavLink as="li" className="list-group-item" to="/finish">
          Finished Books{" "}
          <span className="badge badge-sm bg-primary">
            {finishedList.length}
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
