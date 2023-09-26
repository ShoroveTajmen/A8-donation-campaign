/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import swal from "sweetalert";

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


  const handleCardAddToDonation = () => {
    //add card data to local storage
    const addedCardsArray = [];
    const cardItem = JSON.parse(localStorage.getItem('card'));

    //when localstorage is empty if block will be executed
    if(!cardItem){
      addedCardsArray.push(card);
      localStorage.setItem('card', JSON.stringify(addedCardsArray));
      swal("Good job!", "Card added successfully", "success")
    }else{
      const isExit = cardItem.find(card => card.id === id);
      //if this isn't already exist in localstorage then id will be added
      if(!isExit){
        addedCardsArray.push(...cardItem, card);
        localStorage.setItem('card', JSON.stringify(addedCardsArray));
        swal("Good job!", "Card added successfully", "success");
      }else{
        swal("Error!", "Duplicate Card can't be added", "error");
      }
    }
  }


  return (
    <div className="py-14 md:py-5">
      <div className="w-full md:w-[700px] lg:w-[1320px]  mx-auto">
        <div className="">
          <img
            className="relative w-[1320px] h-[260px] md:h-[600px] mx-auto rounded-b-xl md:rounded-b-3xl md:rounded-t-3xl"
            src={picture}
            alt=""
          />

          <div className="w-full md:w-[700px] lg:w-[1320px] h-[100px]  md:h-[120px] bg-black opacity-50 absolute top-[355px] md:top-[620px] md:left-[33px]  lg:left-[300px] md:rounded-b-3xl rounded-b-xl">
            {" "}
          </div>
          <button
          onClick={handleCardAddToDonation}
            className="absolute top-[385px] md:top-[660px] left-[25px] md:left-[70px] lg:left-[330px] p-2 md:p-3 text-center rounded font-semibold text-white"
            style={{ backgroundColor: `${text_color}` }}
          >
            Donate {price}
          </button>
        </div>
        <h1 className="font-bold text-3xl md:text-4xl mt-9 ml-[35px] md:ml-0">{title}</h1>
        <p className="text-gray-700 ml-[35px] md:ml-0 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
