import React from "react";

const LuckyCards = (props) => {
    const { setmessage, cards, message } = props;
    const cardsMap = [1, 2, 3, 4, 5, 6];

    const handleCardsClick = (clicked) =>{
        console.log('sss');
        const msg = Object.keys(cards).find((ele) => ele == clicked);
        setmessage(msg);
    };
    
    return (
        <div>
            <h1>Lucky Cards</h1>
            <div id="cards">
                {cardsMap.map((ele, index) => (
                    <div id={`cards_${index+1}`} onClick={()=>handleCardsClick(ele)}>{ele}</div>
                ))}
            </div>

            <div id="message">
                {cards[message]}
            </div>
        </div>
    );
}

export default LuckyCards;