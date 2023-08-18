import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { IngredientType } from "../types";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Ingredients = () => {
  const [ingredientsData, setIngredientsData] = useState<IngredientType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Ingredients`;
    setIsLoading(true);
    axios.get(url).then((response) => {
      setIngredientsData(response.data);
      setIsLoading(false);
    });
  }, []);


  return (
    <div className="w-full flex flex-wrap gap-1 justify-center">
    <PulseLoader
      color="rgb(96 165 250)"
      size={30}
      loading={isLoading}
    />
    {ingredientsData.map((ingredients:IngredientType, id) => {
      return (
        <div key={id} className="bg-gray-200 flex flex-wrap border border-gray-400 p-3 w-1/4">
          <h5 className="bg-blue-400 w-full">{ingredients.name}</h5>
          <div>
            <Link to={`/ingredients/${ingredients.name}`}>Learn More</Link>
          </div>
        </div>
      );
    })}
    </div>
  );
}
 
export default Ingredients;