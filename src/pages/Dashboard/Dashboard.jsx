import React, { useContext } from "react";
import { StoreContext } from "../../ContextAPI/ContextAPI";

const Dashboard = () => {
  const { token, userEmail, handleLogout } = useContext(StoreContext);
  return (
    <div>
      <h3 className="text-3xl text-yellow-500">{userEmail || ""}</h3>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
