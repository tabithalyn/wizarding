import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { ElixirType } from "../types";
import { DotLoader } from "react-spinners";

const Elixirs = () => {
  const [elixirData, setElixirData] = useState<ElixirType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Elixirs`;
    setIsLoading(true);
    axios.get(url).then((response) => {
      setElixirData(response.data);
      setIsLoading(false);
    });
  }, []);


  return (
    <div className="w-full flex flex-wrap gap-1 justify-center">
    <DotLoader
      color="rgb(96 165 250)"
      size={50}
      loading={isLoading}
    />
    {elixirData.map((elixir:ElixirType, id) => {
      return (
        <div key={id} className="bg-gray-200 flex flex-wrap border border-gray-400 p-3 w-1/4">
          <h5 className="bg-blue-400 w-full">{elixir.name}</h5>
          {elixir.effect && (
            <p className="bg-cyan-400 w-full">{elixir.effect}</p>
          )}
          {elixir.characteristics && (
            <p className="bg-indigo-300 w-full">{elixir.characteristics}</p>
          )}
          {elixir.sideEffects && (
            <p className="bg-sky-400 w-full">{elixir.sideEffects}</p>
          )}
          {elixir.time && (
            <p className="bg-purple-200 w-full">{elixir.time}</p>
          )}
          <div>
            <Link to={`/elixirs/${elixir.name}`}>Learn More</Link>
          </div>
        </div>
      )
    })}
    </div>
  );
}
 
export default Elixirs;