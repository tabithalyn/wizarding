import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { BASE_URL } from "../api/api";
// import { HousesType } from "../types";

const HouseDetail = () => {
  const { id } = useParams();
  const [houseData, setHouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Houses/${id}`;
    setIsLoading(true);
    const fetch = async () => {
      try {
        const {data} = await axios.get(url);
        setHouseData(data);
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
    {houseData}
  </div>
  </>
  );
}
 
export default HouseDetail;