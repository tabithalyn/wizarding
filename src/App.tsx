import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Elixirs from "./pages/Elixirs";
import ElixirDetail from "./pages/ElixirDetail";
import Houses from "./pages/Houses";
import HouseDetail from "./pages/HouseDetail";
import Spells from "./pages/Spells";
import SpellDetail from "./pages/SpellDetail";
import Ingredients from "./pages/Ingredients";
import IngredientDetail from "./pages/IngredientDetail";

// https://wizard-world-api.herokuapp.com/swagger/index.html


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elixirs" element={<Elixirs />} />
        <Route path="/elixirs/:id" element={<ElixirDetail />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:id" element={<HouseDetail />} />
        <Route path="/spells" element={<Spells />} />
        <Route path="/spell/:id" element={<SpellDetail />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/ingredients/:id" element={<IngredientDetail />} />
      </Routes>
    </>
  );
}

export default App;
