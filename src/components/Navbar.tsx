import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-6 flex justify-around font-karla bg-nearblack text-softgold">
    <Link to="/" className="hover:text-dustyrose transition-all">Home</Link>
    <Link to="/elixirs" className="hover:text-dustyrose transition-all">Elixirs</Link>
    <Link to="/houses" className="hover:text-dustyrose transition-all">Houses</Link>
    <Link to="/spells" className="hover:text-dustyrose transition-all">Spells</Link>
    <Link to="/ingredients" className="hover:text-dustyrose transition-all">Ingredients</Link>
    </div>
  );
}
 
export default Navbar;