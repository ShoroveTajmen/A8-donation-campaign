/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import DataCards from "../../AllData/DataCards";
import AllData from "../../AllData/AllData";

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
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[url('https://i.ibb.co/m89QXNg/Rectangle-4281.png')] bg-cover bg-center bg-no-repeat h-[600px]"></div>

        {/* <!-- White overlay with opacity --> */}
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-white opacity-90"></div>
        <div className="relative ml-[400px]">
          <div className="absolute  mt-[200px]">
            <h1 className="text-black text-5xl font-bold mb-[40px]">
              I Grow By Helping People In Need
            </h1>{" "}
            <br />
            <div className="text-center">
              <input
                className="w-[470px] h-[50px] bg-white rounded-l-lg border-solid border border-[#DEDEDE] pl-4 "
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

      <div className="grid grid-cols-4 gap-5 w-[1400px] mx-auto mt-[70px]">
        {filteredData.map((item) => (
          <DataCards key={item.id} data={item} /> // Pass filtered data to DataCards component
        ))}
      </div>
    </div>
  );
};

export default Banner;
