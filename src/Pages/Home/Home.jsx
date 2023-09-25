import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import AllData from "../../Components/AllData/AllData";


const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner data={data}></Banner>
            <AllData ></AllData>
        </div>
    );
};

export default Home;