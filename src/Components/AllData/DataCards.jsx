/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DataCards = ({ data }) => {
  const {
    id,
    picture,
    title,
    card_background_color,
    category,
    category_background_color,
    text_color,
  } = data || {};
  return (
    <div className="mb-[50px] max-w-[1600px] mx-auto ">
      <Link to={`/cards/${id}`}>
        <div className=" w-[280px] h-full ">
          <figure>
            <img
              className="w-[300px] h-[194px] rounded-t-lg"
              src={picture}
              alt="data"
            />
          </figure>
          <div
            className="px-3 py-4 rounded-b-lg"
            style={{ backgroundColor: `${card_background_color}` }}
          >
            <h2
              className=" w-[80px] p-1 text-center rounded font-semibold"
              style={{
                backgroundColor: `${category_background_color}`,
                color: `${text_color}`,
              }}
            >
              {category}
            </h2>
            <p
              className="text-lg font-semibold"
              style={{ color: `${text_color}` }}
            >
              {title}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DataCards;
