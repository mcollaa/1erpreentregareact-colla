import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../ui/spinner";
import { Link } from "react-router-dom";

export function ItemDetailContainer() {
  const [itemDetails, setItemDetails] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getItemsData = async () => {
    const resp = await fetch("/items.json")
      .then((res) => res.json())
      .then((data) => data);

    const filteredData = resp.find((item) => item.id === Number(id));
    setItemDetails(filteredData);

    setTimeout(() => {
      setLoading(false);
    }, 400);
  };
  useEffect(() => {
    getItemsData();
  }, [id, getItemsData]);

  if (loading) return <Spinner />;

  return (
    <>
      {itemDetails ? (
        <div className="bg-neutral-900 text-white min-h-screen w-screen">
          <h1>{itemDetails.name}</h1>

          <img src={itemDetails.image} alt={itemDetails.name} />
          <h2>{itemDetails.detail}</h2>
          <span>{itemDetails.price}</span>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h2>No existe ese producto</h2>
          <Link
            to="/"
            className="px-2 py-1 bg-purple-500 rounded-full hover:bg-purple-300 text-white"
          >
            Volver a Inicio
          </Link>
        </div>
      )}
    </>
  );
}
