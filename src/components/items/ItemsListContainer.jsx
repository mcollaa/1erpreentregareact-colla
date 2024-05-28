import { items } from "../../mockup/items";
import ItemCard from "./ItemCard";

export default function ItemsListContainer() {
  return (
    <div className="flex flex-col justify-center w-full items-center">
      <h1 className="text-4xl font-bold">Listado de articulos</h1>
      <ul>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
}
