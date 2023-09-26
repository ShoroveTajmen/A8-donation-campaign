import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Banner data={data}></Banner>
    </div>
  );
};

export default Home;
