import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../api/api";
import { PulseLoader } from "react-spinners";

const ElixirDetail = () => {
  const { id } = useParams();
  const [elixirData, setElixirData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `${BASE_URL}Elixirs/${id}`;
    setIsLoading(true);
    axios.get(url).then((response) => {
      
      setElixirData(response.data[0]);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <>
    <div>
      {isLoading && (
      <PulseLoader
        color="rgb(96 165 250)"
        size={30}
        loading={isLoading}
      />
      )}
      <div key={id}>
        {JSON.stringify(elixirData)}
      </div>
    </div>
    </>
  );
}
 
export default ElixirDetail;