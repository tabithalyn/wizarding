import { useParams } from "react-router-dom";

const SpellDetail = () => {
  const { id } = useParams();

  return (
  <>
  {id}
  </>
  );
}
 
export default SpellDetail;