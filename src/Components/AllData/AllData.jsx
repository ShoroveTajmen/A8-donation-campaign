/* eslint-disable react/prop-types */
import DataCard from "./DataCard";


const AllData = ({data}) => {
    console.log(data);

    return (
        <div className="">
            <div className="grid grid-cols-4 gap-5 ">
                {
                    data?.map(data => <DataCard key={data.id} data={data}></DataCard>)
                }
            </div>
            
        </div>
    );
};

export default AllData;