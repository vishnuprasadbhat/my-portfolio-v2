import { getPortfolioData } from "../actions";
import EditData from "./editData";

const Edit = async () => {
  const data = await getPortfolioData();
  return <EditData myData={data} />;
};

export default Edit;
