import { Link } from "react-router-dom";
// import car1 from "../assets/car1.png";
// import car2 from "../assets/car2.png";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Posts</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
      </nav>
      <div className="testImgs">
        {/* <img src={car1} alt="Car 1" height={50} />
        <img src={car2} alt="Car 2" height={50} /> */}
      </div>
    </header>
  );
}
