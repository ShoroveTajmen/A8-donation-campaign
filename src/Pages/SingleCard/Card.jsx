import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";


const Card = () => {
    const [card, setCard] = useState({});

    //get the specific card id when I clicked on the any portion of the card
    const {id} = useParams();

    //also get card details when I clicked on the any portion of the card
    const cards = useLoaderData();

    useEffect(()=>{
        const findCard = cards?.find(card => card.id === id);
        setCard(findCard);
    },[id, cards])
    return (
        <div>
            <CardDetails card={card}></CardDetails>
        </div>
    );
};

export default Card;