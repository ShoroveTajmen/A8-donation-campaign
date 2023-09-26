/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import DataCards from "../../AllData/DataCards";


// eslint-disable-next-line react/prop-types
const Banner = ({ data }) => {
  // State variables to manage search input and filtered data
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Function to handle the search button click
  const handleSearch = () => {
    // Filter the data based on the search input
    const filtered = data.filter((item) =>
      item.category.toLowerCase().includes(searchInput.toLowerCase())
    );
    // Update the filteredData state with the filtered results
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="relative w-full h-[650px] ">
        {/* <!-- Background image with an overlay --> */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/m89QXNg/Rectangle-4281.png')] bg-cover bg-center bg-no-repeat h-[600px] "></div>

        {/* <!-- White overlay with opacity --> */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-90"></div>
        <div className="relative ml-[19px] md:ml-[160px] lg:ml-[400px]">
          <div className="absolute mt-[220px]  md:mt-[200px]">
            <h1 className=" text-black text-2xl md:text-3xl lg:text-5xl font-bold mb-[10px] md:mb-[40px]">
              I Grow By Helping People In Need
            </h1>{" "}
            <br />
            <div className="text-center">
              <input
                className="w-[250px]  md:ml-2 lg:ml-5 md:w-[360px] lg:w-[470px] h-[50px] bg-white rounded-l-lg border-solid border border-[#DEDEDE] pl-4 "
                type="text"
                placeholder="Search here..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} // Update searchInput state on input change
              />
              <button
                onClick={handleSearch} // Call handleSearch function on button click
                className="w-[110px] h-[50px] bg-[#FF444A] rounded-r-lg font-semibold text-white"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-5 w-full md:w-[700px] lg:w-[1400px] mx-auto mt-[30px] md:mt-[70px]">
        {filteredData.map((item) => (
          <DataCards key={item.id} data={item} /> // Pass filtered data to DataCards component
        ))}
      </div>
    </div>
  );
};

export default Banner;
