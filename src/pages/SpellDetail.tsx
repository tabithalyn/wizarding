import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  <PulseLoader
    color="rgb(96 165 250)"
    size={30}
    loading={isLoading}
  />
  <div>
    {spell.map((data:SpellType, id:number) => (
      <div key={id}>
        <p>{data.name}</p>
        <p>{data.incantation}</p>
        <p>{data.effect}</p>
        <p>{data.type}</p>
        <p>{data.light}</p>
      </div>
    ))}
  </div>
  </>
  );
}
 
export default SpellDetail;