import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full p-4 flex justify-around">
    <Link to="/">Home</Link>
    <Link to="/elixirs">Elixirs</Link>
    <Link to="/houses">Houses</Link>
    <Link to="/spells">Spells</Link>
    <Link to="/ingredients">Ingredients</Link>
    </div>
  );
}
 
export default Navbar;