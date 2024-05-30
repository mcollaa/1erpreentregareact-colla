import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import ItemsListContainer from "./components/items/ItemsListContainer";
import { ItemDetailContainer } from "./components/items/ItemDetailContainer";
import { Layout } from "./components/ui/layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/category/:id"
          element={<ItemsListContainer filtered={true} />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
