import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchdataFromAPI = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        const result = await response.json();
        setUsers(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdataFromAPI();
  }, []);
  return (
    <div>
      <h1>Fetch Data</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
