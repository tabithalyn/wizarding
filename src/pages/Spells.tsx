import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { SpellType } from "../types";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import "./TransitionLink.css";

const Spells = () => {
  const [spellData, setSpellData] = useState<SpellType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Spells`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setSpellData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);


  return (
    <div className="w-full flex flex-wrap gap-1 justify-center bg-rich py-4">
    {isLoading && (
      <div className="w-full h-[90vh] flex justify-center items-center z-20 py-10">
        <PulseLoader
          color="#81613b"
          size={50}
          loading={isLoading}
        />
      </div>
    )}
    {spellData.map((spell:SpellType, id) => {
      return (
        <div key={id} className="bg-greyish flex flex-wrap border border-gray-400 p-3 w-1/4">
          <h5 className="w-full text-center text-xl text-rojomarron font-lora capitalize">{spell.name}</h5>
          <div className="w-full text-center py-3">
            <Link
              to={`/spells/${spell.id}`}
              className="font-karla hover:text-merlot px-10 py-0 text-3xl before:bg-greyish before:text-lg transition-link"
              title="Learn More"
              data-hover="Learn More"
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </Link>
          </div>
        </div>
      )
    })}
    </div>
  );
}
 
export default Spells;