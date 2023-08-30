import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { IngredientType } from "../types";
import { PulseLoader } from "react-spinners";

const Ingredients = () => {
  const [ingredientsData, setIngredientsData] = useState<IngredientType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Ingredients`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setIngredientsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);


  return (
    <div className="w-full flex flex-wrap gap-2 justify-center p-10">
    <PulseLoader
      color="rgb(200 187 171)"
      size={30}
      loading={isLoading}
    />
    {ingredientsData.map((ingredients:IngredientType, id) => {
      return (
        <div key={id} className="bg-shiitake flex flex-wrap border border-forestfloor p-4 w-1/4 font-lora hover:transform hover:scale-125 hover:shadow-lg hover:cursor-default transition-all">
          <h5 className="bg-blue-400 w-full">{ingredients.name}</h5>
        </div>
      );
    })}
    </div>
  );
}
 
export default Ingredients;