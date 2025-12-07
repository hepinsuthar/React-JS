import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>User Details</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
