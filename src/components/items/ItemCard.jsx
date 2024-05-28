import { Link } from "react-router-dom";

export default function ItemCard({ image, name, price, id }) {
  return (
    <li>
      <img src={image} alt="" />
      <h2>{name}</h2>
      <h3>$ {price}</h3>
      <Link to={`/item/${id}`}>Ver detalle </Link>
    </li>
  );
}
