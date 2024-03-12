import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import UserStatus from "../features/userStatus/UserStatus.js";
const Products = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <UserStatus />
        <ul>
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <HomeIcon />
          </li>
          <li>
            <Link to={"/products"}>
              <h1>Products</h1>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Products;
