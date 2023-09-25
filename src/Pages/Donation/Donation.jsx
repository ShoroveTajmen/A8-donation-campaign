import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


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
           <div className="grid grid-cols-2 gap-5">
            {
                isShow ? 
                donateCard.map(card => <DonationCard key={card.id} card={card}></DonationCard>) :
                donateCard.slice(0,2).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
           </div>
           {
            donateCard.length > 2 && (
                <button
                onClick={()=> setIsShow(!isShow)}
                className="px-5 bg-green-200 block mx-auto"
                >
                    {isShow ? "" : "See More"}

                </button>
            )
           }
        </div>
    );
};

export default Donation;