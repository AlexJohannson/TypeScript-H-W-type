type Cards = {
    cardSuit: string;
    valueS: string;
    color: string;
}



const suitS: string[] = ['spade', 'diamond', 'heart', 'club'];
const valuesV: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];


const cardsS: Cards[] = [];
for (const suit of suitS) {
    for (const value of valuesV) {
        const card: Cards = {cardSuit: suit, valueS: value, color: ''};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cardsS.push(card);
    }
}
console.log(cardsS);

const reduce = cardsS.reduce((accum, card) => {
        switch (card.cardSuit){
            case 'spade':
                accum.spades.push(card);
                break;
            case 'diamond':
                accum.diamonds.push(card);
                break;
            case 'heart':
                accum.hearts.push(card);
                break;
            case 'club':
                accum.clubs.push(card);
                break;
        }
        return accum;
    },
    {
        spades:[],
        diamonds:[],
        hearts:[],
        clubs:[]
    }
);
console.log(reduce);