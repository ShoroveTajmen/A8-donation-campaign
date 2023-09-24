const Banner = () => {
  return (
    <div className="relative w-full h-screen">
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
            />
            <button className="w-[110px] h-[50px] bg-[#FF444A] rounded-r-lg font-semibold text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
