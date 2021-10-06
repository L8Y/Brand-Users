import Datadisplay from "./resultgrid";
import { useState } from "react";

function Navbar() {
  const [userData, setuserData] = useState([]);
  const fetchResult = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://reqres.in/api/users?page=1`);

    if (!response.ok) {
      alert("Error in geting Data");
    }

    const getData = await response.json();
    setuserData(getData.data);
  };

  return (
    <div>
      <nav className="nav-bar">
        <div className="navbar-contents">
          <h1 className="logo">Brand Users</h1>
          <button className="button" onClick={fetchResult}>
            Get Users
          </button>
        </div>
      </nav>
      <Datadisplay data={userData} />
    </div>
  );
}

export default Navbar;
