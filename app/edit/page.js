import { getPortfolioData } from "../actions";
import EditData from "./editData";

const Edit = async () => {
  const { id, data } = await getPortfolioData(true);
  return <EditData myData={data} id={id} />;
};

export default Edit;
