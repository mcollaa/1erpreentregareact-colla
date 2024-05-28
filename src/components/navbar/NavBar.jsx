import { Link } from "react-router-dom";
import CartWidget from "../cart/CartWidget";

const NavBar = () => {
  return (
    <nav className="flex items-center gap-4 h-12 px-4">
      <ul className="flex gap-2 items-center">
        <li>
          <Link to="/">Inicio</Link>{" "}
        </li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
