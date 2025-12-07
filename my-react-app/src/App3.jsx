import { useEffect, useState } from "react";

function App3() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users</h1>
      {users.map(u => (
        <p key={u.id}>{u.name}</p>
        
      ))}
    </>
  );
}

export default App3;
