import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummy-user-api.onrender.com/api/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching user:", err));
  }, [id]);

  if (!user) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h2>User Details</h2>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Gender:</strong> {user.gender}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default UserDetail;
