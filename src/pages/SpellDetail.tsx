import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SpellType } from "../types";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { PulseLoader } from "react-spinners";

const SpellDetail = () => {
  const { id } = useParams();
  const [spell, setSpell] = useState<SpellType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Spells/${id}`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setSpell([data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
  <>
  <div className=" bg-purplebrown w-full h-[90vh] overflow-hidden p-0 m-0">
    {isLoading && (
      <div className="w-full flex justify-center items-center z-20 py-10">
        <PulseLoader
          color="#A3533E"
          size={30}
          loading={isLoading}
        />
      </div>
    )}
    <div className="text-left p-4 absolute left-10 top-20">
      <button className="text-shiitake bg-nearblack py-3 px-5 hover:bg-darkbrown transition-all hover:transform hover:scale-105">
        <Link to="/spells">
          &larr;
          <span className="font-lora italic ml-2">Back</span>
        </Link>
      </button>
    </div>
    <div className="mt-5">
    {spell.map((data:SpellType, id:number) => (
      <div key={id} className="w-full flex justify-center">
        <div className="bg-morrisgrey border border-merlot w-2/4 p-2 flex flex-wrap justify-center">
          <p className="text-4xl text-center py-2 w-full font-lora text-darkeggplant capitalize">{data.name}</p>
          {data.type && (
            <p className="text-center p-2 m-2 w-full font-karla tracking-tight">
              <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Type</span>
              {data.type}
            </p>
          )}
          {data.effect && (
            <p className="text-center p-2 m-2 w-full font-karla tracking-tight">
              <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Effect</span>
              {data.effect}
            </p>
          )}
          {data.incantation && (
            <p className="text-center text-lg p-2 m-2 w-full font-karla tracking-tight">
              <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Incantation</span>
              <i className="fa-solid fa-quote-left text-sm mr-2"></i>
              {data.incantation}
              <i className="fa-solid fa-quote-right text-sm ml-2"></i>
            </p>
          )}
          {data.light && (
            <p className="text-center p-2 m-2 w-full font-karla tracking-tight">
              <span className="p-2 italic text-sm w-full text-center block font-lora text-purplebrown">Light</span>
              <span className={`font-bold ${(
                data.light === "Transparent" && "text-[#fefefe]" ||
                data.light === "White" && "text-[#ffffff]" ||
                data.light === "Red" && "text-[#af4949]" ||
                data.light === "Orange" && "text-[#f48a50]" ||
                data.light === "Yellow" && "text-[#fce205]" ||
                data.light === "Green" && "text-[#308f48]" ||
                data.light === "Blue" && "text-[#5b79b1]" ||
                data.light === "Purple" && "text-[#6b58a8]" ||
                data.light === "Violet" && "text-[#8d59c2]" ||
                data.light === "Gold" && "text-[#f4b15a]" ||
                data.light === "Pink" && "text-[#d15e94]" ||
                data.light === "IcyBlue" && "text-[#6FD8E5]" ||
                data.light === "BrightBlue" && "text-[#336cde]" ||
                data.light === "FieryScarlet" && "text-[#de3e23]" ||
                data.light === "Scarlet" && "text-[#de3e23]"
              )}`}>{data.light}</span>
            </p>
          )}
        </div>
      </div>
    ))}
    </div>
  </div>
  </>
  );
}
 
export default SpellDetail;