import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { BASE_URL } from "../api/api";
import { HousesType } from "../types";
import RavenclawCrest from "../assets/ravenclaw-crest.png";
import GryffindorCrest from "../assets/gryffindor-crest.png";
import SlytherinCrest from "../assets/slytherin-crest.png";
import HufflepuffCrest from "../assets/hufflepuff-crest.png";

const HouseDetail = () => {
  const { id } = useParams();
  const [houseData, setHouseData] = useState<HousesType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Houses/${id}`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setHouseData([data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);
  
  return (
  <div className={`${(
    id === "0367baf3-1cb6-4baf-bede-48e17e1cd005" && "bg-gryffindor3" ||
    id === "85af6295-fd01-4170-a10b-963dd51dce14" && "bg-hufflepuff3" ||
    id === "805fd37a-65ae-4fe5-b336-d767b8b7c73a" && "bg-ravenclaw3" ||
    id === "a9704c47-f92e-40a4-8771-ed1899c9b9c1" && "bg-slytherin3"
  )} h-[89vh] flex flex-wrap items-center justify-center`}>
  {isLoading && (
    <div className="w-full flex justify-center items-center z-20 py-10">
      <PulseLoader
        color="#0f0e0d"
        size={30}
        loading={isLoading}
      />
    </div>
  )}
  <div className={`${(
    id === "0367baf3-1cb6-4baf-bede-48e17e1cd005" && "bg-[#fffae9]" ||
    id === "85af6295-fd01-4170-a10b-963dd51dce14" && "bg-[#f4f1e8] text-hufflepuff2" ||
    id === "805fd37a-65ae-4fe5-b336-d767b8b7c73a" && "bg-[#ceccca]" ||
    id === "a9704c47-f92e-40a4-8771-ed1899c9b9c1" && "bg-[#d4d4d4]"
  )} w-2/5 h-2/3 p-3`}>
    {houseData.map((data:HousesType, id:number) => (
      <div key={id} className="flex flex-wrap justify-center items-center">
        <div className={`${
          data.name === "Gryffindor" && "bg-gradient-to-r from-gryffindor1 to-gryffindor2" ||
          data.name === "Hufflepuff" && "bg-gradient-to-r from-hufflepuff1 to-hufflepuff2" ||
          data.name === "Ravenclaw" && "bg-gradient-to-r from-ravenclaw1 to-ravenclaw2" ||
          data.name === "Slytherin" && "bg-gradient-to-r from-slytherin1 to-slytherin2"
        } text-4xl p-4 bg-opacity-50 w-full font-lora italic flex flex-wrap items-center justify-between`}>
          {data.name}
          <img src={`${(
            data.name === "Gryffindor" && GryffindorCrest ||
            data.name === "Slytherin" && SlytherinCrest ||
            data.name === "Ravenclaw" && RavenclawCrest ||
            data.name === "Hufflepuff" && HufflepuffCrest
          )}`} className="w-14" />
        </div>
        <p className="w-full text-center p-2 font-karla mt-4">
          <span className="text-xs w-full block text-greenydark uppercase">Founder</span>
          <span className="font-lora block italic w-full">{data.founder}</span>
        </p>
        <p className="w-full text-center pt-3 pb-2 font-karla">
          <span className="text-xs w-full block text-greenydark uppercase">Common Room</span>
          {data.commonRoom}
        </p>
        <p className="w-full text-center py-2 font-karla">
          <span className="text-xs w-full block text-greenydark uppercase">Ghost</span>
          {data.ghost}
        </p>
        <p className="w-full text-center py-2 font-karla">
          <span className="text-xs w-full block text-greenydark uppercase">House Colours</span>
          {data.houseColours}
        </p>
      </div>
    ))}
  </div>
  </div>
  );
}
 
export default HouseDetail;