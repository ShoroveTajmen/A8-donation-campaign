/* eslint-disable react/prop-types */

const CardDetails = ({ card }) => {
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
  return (
    <div className="py-5">
      <div>
        <div className=" w-[1600px] h-[700px] mx-auto">
          <img
            className="relative w-[1320px] h-[700px] mx-auto rounded-b-3xl"
            src={picture}
            alt=""
          />

          <div className="w-[1320px]  h-[120px] bg-black opacity-50 absolute top-[720px] left-[300px] rounded-b-3xl">
            {" "}
          </div>
          <button
            className="absolute top-[760px] left-[330px] p-3 text-center rounded font-semibold text-white"
            style={{ backgroundColor: `${text_color}` }}
          >
            Donate {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
