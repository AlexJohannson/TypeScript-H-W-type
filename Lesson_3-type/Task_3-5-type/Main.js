var suits = ['spade', 'diamond', 'heart', 'clubs'];
var values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
var cards = [];
for (var _i = 0, suits_1 = suits; _i < suits_1.length; _i++) {
    var suit = suits_1[_i];
    for (var _a = 0, values_1 = values; _a < values_1.length; _a++) {
        var value = values_1[_a];
        var card = { cardSuit: suit, value: value, color: '' };
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(function (card) { return card.value === 'ace' && card.cardSuit === 'spade'; }));
console.log(cards.filter(function (card) { return card.value === '6'; }));
console.log(cards.filter(function (card) { return card.color === 'red'; }));
console.log(cards.filter(function (card) { return card.cardSuit === 'diamond'; }));
console.log(cards.filter(function (card) { return card.cardSuit === 'clubs' && (card.value !== '6' && card.value !== '7' && card.value !== '8'); }));
