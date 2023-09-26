/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import Statistics from "../Statistics/Statistics";

const DonationCard = ({ card }) => {
  const {
    id,
    picture,
    title,
    card_background_color,
    category,
    category_background_color,
    text_color,
    description,
    price,
  } = card || {};

  const navigate = useNavigate();

  return (
    <div >
      <div
        className="flex flex-col md:flex-row items-center bg-white rounded-lg h-[350px] md:h-[200px]"
        style={{
          backgroundColor: `${card_background_color}`,
        }}
      >
        <img
          className=" w-[220px] md:w-[200px] lg:w-[220px] rounded-t-lg h-[150px] md:h-[200px] rounded-lg"
          src={picture}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 h-[190px] md:h-[220px] lgg:h-[220px] ">
          <h5
            className="mb-2  p-1 w-[100px] rounded text-center"
            style={{
              backgroundColor: `${category_background_color}`,
              color: `${text_color}`,
            }}
          >
            {category}
          </h5>
          <p className=" text-lg md:text-lg lg:text-2xl font-bold text-black dark:text-gray-400">
            {title}
          </p>
          <h3 className="font-semibold" style={{ color: `${text_color}` }}>
            {price}
          </h3>
            <button
            onClick={()=>navigate(`/cards/${id}`)}
              className="text-white font-semibold w-[120px] p-1 lg:p-2 mt-2 md:mt-0 rounded block"
              style={{
                backgroundColor: `${text_color}`,
              }}
            >
              View Details
            </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
