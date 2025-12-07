import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>

      <Link to={`/users/${user.id}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
}
