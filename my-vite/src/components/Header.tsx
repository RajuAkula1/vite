import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f0f0f0" }}>
      <nav>
        <Link to="/" style={{ marginRight: "1rem" }}>
          🏠 Home
        </Link>
        <Link to="/about">ℹ️ About</Link>
      </nav>
    </header>
  );
}
