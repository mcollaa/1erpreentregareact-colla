import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../ui/spinner";

export default function ItemsListContainer({ filtered }) {
  const { id } = useParams();
  const [itemsData, setItemsData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const getItemsData = async () => {
    const resp = await fetch("/items.json")
      .then((res) => res.json())
      .then((data) => data);

    if (filtered) {
      filterCategories(resp);
    } else {
      setItemsData(resp);
    }

    setTimeout(() => {
      setLoading(false);
    }, 400);
  };

  const filterCategories = (data) => {
    const filteredCategory = data.filter(
      (item) => item.category.toLowerCase() === id.toLowerCase().trim()
    );
    setItemsData(filteredCategory);
  };

  useEffect(() => {
    getItemsData();
  }, [id]);

  if (loading) return <Spinner />;

  return (
    <div className="flex flex-col justify-center w-full items-center">
      <h1 className="text-4xl font-bold">Listado de articulos</h1>
      <ul>
        {itemsData.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
