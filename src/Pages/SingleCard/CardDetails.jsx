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
      <div className="w-[1320px]  mx-auto">
        <div className="">
          <img
            className="relative w-[1320px] h-[600px] mx-auto rounded-b-3xl"
            src={picture}
            alt=""
          />

          <div className="w-[1320px]  h-[120px] bg-black opacity-50 absolute top-[620px] left-[300px] rounded-b-3xl">
            {" "}
          </div>
          <button
            className="absolute top-[660px] left-[330px] p-3 text-center rounded font-semibold text-white"
            style={{ backgroundColor: `${text_color}` }}
          >
            Donate {price}
          </button>
        </div>
        <h1 className="font-bold text-4xl mt-9">{title}</h1>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
