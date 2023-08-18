import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { HousesType } from "../types";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Houses = () => {
  const [housesData, setHousesData] = useState<HousesType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Houses`;
    setIsLoading(true);
    axios.get(url).then((response) => {
      setHousesData(response.data);
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
    {housesData.map((houses:HousesType, id) => {
      return (
        <div key={id} className="bg-gray-200 flex flex-wrap border border-gray-400 p-3 w-1/2">
          <Link to={`/houses/${houses.id}`}>{houses.name}</Link>
        </div>
      );
    })}
    </div>
  );
}
 
export default Houses;