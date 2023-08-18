import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { ElixirType } from "../types";
import { DotLoader } from "react-spinners";
import "./TransitionLink.css";

const Elixirs = () => {
  const [elixirData, setElixirData] = useState<ElixirType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Elixirs`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setElixirData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);


  return (
    <div className="w-full flex flex-wrap gap-2 justify-center bg-darkeggplant py-5">
    {isLoading && (
        <div className="w-full flex justify-center items-center z-20 py-10">
          <DotLoader
            color="#81613b"
            size={50}
            loading={isLoading}
          />
        </div>
      )}
    {elixirData.map((elixir:ElixirType, id) => {
      return (
        <div key={id} className=" bg-morrisgrey flex flex-wrap border border-gray-400 p-3 w-1/4">
          <h5 className="w-full text-center text-xl text-rojomarron font-lora capitalize">{elixir.name}</h5>
          <div className="w-full text-center py-3">
            <Link
              to={`/elixirs/${elixir.id}`}
              className="font-karla hover:text-merlot px-10 py-0 text-3xl before:bg-morrisgrey before:text-lg transition-link"
              title="Learn More"
              data-hover="Learn More"
            >
              &#9758;
            </Link>
          </div>
        </div>
      )
    })}
    </div>
  );
}
 
export default Elixirs;