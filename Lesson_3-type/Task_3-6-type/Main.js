var suitS = ['spade', 'diamond', 'heart', 'club'];
var valuesV = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
var cardsS = [];
for (var _i = 0, suitS_1 = suitS; _i < suitS_1.length; _i++) {
    var suit = suitS_1[_i];
    for (var _a = 0, valuesV_1 = valuesV; _a < valuesV_1.length; _a++) {
        var value = valuesV_1[_a];
        var card = { cardSuit: suit, valueS: value, color: '' };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cardsS.push(card);
    }
}
console.log(cardsS);
var reduce = cardsS.reduce(function (accum, card) {
    switch (card.cardSuit) {
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
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});
console.log(reduce);
