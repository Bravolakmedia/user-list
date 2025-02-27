import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummy-user-api.onrender.com/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              {user.firstName} {user.lastName} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
