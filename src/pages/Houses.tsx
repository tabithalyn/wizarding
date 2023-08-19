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
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setHousesData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);


  return (
    <div className="w-full h-[86vh] flex flex-wrap gap-1 justify-center items-center mt-1">
    {isLoading && (
      <div className="w-full h-[90vh] flex justify-center items-center z-20 py-10">
        <PulseLoader
          color="#81613b"
          size={50}
          loading={isLoading}
        />
      </div>
    )}
    {housesData.map((houses:HousesType, id) => {
      return (
        <div key={id} className={`bg-gray-200 flex flex-wrap border border-gray-400 p-3 w-1/2 justify-center items-center h-1/4 ${houses.name === "Gryffindor" && "bg-gryffindor1" || houses.name === "Slytherin" && "bg-slytherin1" || houses.name === "Ravenclaw" && "bg-ravenclaw1" || houses.name === "Hufflepuff" && "bg-hufflepuff1"} shadow-lg`}>
          <Link to={`/houses/${houses.id}`} className="text-3xl font-lora font-light italic hover:text-nearblack hover:tracking-wider transition-all">{houses.name}</Link>
        </div>
      );
    })}
    </div>
  );
}
 
export default Houses;