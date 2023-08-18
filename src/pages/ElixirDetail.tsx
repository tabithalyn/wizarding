import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/api";
import { PulseLoader } from "react-spinners";
import { ElixirType } from "../types";

const ElixirDetail = () => {
  const { id } = useParams();
  const [elixirData, setElixirData] = useState<ElixirType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Elixirs/${id}`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setElixirData([data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
    <>
    <div className=" bg-forestfloor w-full h-screen overflow-hidden p-0 m-0">
      {isLoading && (
        <div className="w-full flex justify-center items-center z-20 py-10">
          <PulseLoader
            color="#A3533E"
            size={30}
            loading={isLoading}
          />
        </div>
      )}
      <div className="mt-5">
        {elixirData.map((data:ElixirType, id:number) => (
          <div key={id} className="w-full flex justify-center">
            <div className="bg-shiitake border border-rich w-2/4 p-2 flex flex-wrap justify-center">
              <p className="text-4xl text-center py-2 w-full font-lora text-oldboots">{data.name}</p>
              {data.effect && (
                <p className="text-center p-2 m-2 w-full font-karla tracking-tight">
                  <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Effect</span>
                  {data.effect}
                </p>
              )}
              {data.sideEffects && (
                <p className="p-2 font-karla tracking-tight w-full text-center">
                  <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Side Effects</span>
                  {data.sideEffects}
                </p>
              )}
              {data.characteristics && (
                <p className="p-3 text-center w-full font-karla tracking-tight">
                  <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Characteristics</span>
                  {data.characteristics}
                </p>
              )}
              {data.ingredients && (
              <>
              <p className="p-2 mt-4 italic text-sm w-full text-center font-lora text-purplebrown">Ingredients</p>
                <div className="w-2/4 h-[300px] flex flex-wrap justify-center pb-4 mb-5 font-karla tracking-tight overflow-auto">
                  {data.ingredients.map((val) => (
                    <ul key={val.id} className="w-full p-1">
                      <li className="w-full my-1 border-b border-b-latte py-2 flex flex-wrap items-center">
                        <i className="fa-regular fa-square-check mr-4"></i>
                        <span>{val.name}</span>
                      </li>
                    </ul>
                  ))}
                </div>
                </>
              )}
              {data.time && (
                <p>{data.time}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
 
export default ElixirDetail;