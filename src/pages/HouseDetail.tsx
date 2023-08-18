import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { BASE_URL } from "../api/api";
import { HousesType } from "../types";

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
  <>
  <PulseLoader
    color="rgb(96 165 250)"
    size={30}
    loading={isLoading}
  />
  <div>
    {houseData.map((data:HousesType, id:number) => (
      <div key={id}>
        <p>{data.name}</p>
        <p>{data.founder}</p>
        <p>{data.commonRoom}</p>
        <p>{data.ghost}</p>
        <p>{data.houseColours}</p>
      </div>
    ))}
  </div>
  </>
  );
}
 
export default HouseDetail;