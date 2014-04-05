var Rates = {
    VERY_GOOD: 'GOOD AS HELL',
    GOOD: 'GOOD',
    BAD: 'TOO BAD',

    cardsRankList: ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],

    rateTwoCards: function(cards) {
        var rate = 0;

        if (cards[0].rank === cards[1].rank) {
            rate += 20;
        }

        if (cards[0].suit === cards[1].suit) {
            rate += 10;
        }

        if (this.cardsRankList.indexOf(cards[0].rank) > 8) {
            rate += 6;
        } else if (this.cardsRankList.indexOf(cards[0].rank) > 5) {
            rate += 3;
        }

        if (this.cardsRankList.indexOf(cards[1].rank) > 8) {
            rate += 6;
        } else if (this.cardsRankList.indexOf(cards[1].rank) > 5) {
            rate += 3;
        }

        console.log('Rate: ', rate);

        if (rate >= 20) {
            return Rates.VERY_GOOD;
        }

        if (rate >= 12) {
            return Rates.GOOD;
        }

        return Rates.BAD;
    }
};

module.exports = Rates;