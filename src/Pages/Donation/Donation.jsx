import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
// eslint-disable-next-line no-unused-vars
import Statistics from "../Statistics/Statistics";


const Donation = () => {
    const [donateCard, setDonateCard] = useState([]);
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        const cardItem = JSON.parse(localStorage.getItem('card'));
        if(cardItem){
            setDonateCard(cardItem);
        }
    },[])


    return (
        <div>
           <div className="grid grid-cols-2 gap-5 mt-14">
            {
                isShow ? 
                donateCard.map(card => <DonationCard key={card.id} card={card}></DonationCard>) :
                donateCard.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
           </div>
           {
            donateCard.length > 4 && (
                <button
                onClick={()=> setIsShow(!isShow)}
                className=" capitalize px-5 bg-[#009444] block mx-auto rounded-lg text-white font-semibold text-2xl  mt-7"
                >
                    {isShow ? '' : "See All"}

                </button>
            )
           }
           {/* {
            donateCard?.map(card => <Statistics key={card.id} card={card}></Statistics>)
           } */}
        </div>
    );
};

export default Donation;