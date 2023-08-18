import { useEffect, useState } from "react";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { SpellType } from "../types";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

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
    <div className="w-full flex flex-wrap gap-1 justify-center">
    <PulseLoader
      color="rgb(96 165 250)"
      size={30}
      loading={isLoading}
    />
    {spellData.map((spell:SpellType, id) => {
      return (
        <div key={id} className="bg-gray-200 flex flex-wrap border border-gray-400 p-3 w-1/4">
          <h5 className="bg-blue-400 w-full">{spell.name}</h5>
          {spell.effect && (
            <p className="bg-cyan-400 w-full">{spell.effect}</p>
          )}
          {spell.characteristics && (
            <p className="bg-indigo-300 w-full">{spell.characteristics}</p>
          )}
          {spell.sideEffects && (
            <p className="bg-sky-400 w-full">{spell.sideEffects}</p>
          )}
          {spell.time && (
            <p className="bg-purple-200 w-full">{spell.time}</p>
          )}
          <div>
            <Link to={`/spells/${spell.id}`}>Learn More</Link>
          </div>
        </div>
      )
    })}
    </div>
  );
}
 
export default Spells;