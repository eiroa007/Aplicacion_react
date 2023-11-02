import "./Databank.css";

import { useEffect, useState } from "react";

const Databank = () => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [page, setPage] = useState(1);

  const getItems = async () => {
    const data = await fetch();

    const dataJSON = await data.json();
    setItems(dataJSON.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <main>
      <div>
        <label>Category</label>
        <select>
          <option>Game</option>
          <option>Store</option>
        </select>
      </div>
      <ul className="gallery">
        {items.map((item) => (
          <li>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Databank;
