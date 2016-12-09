// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

Array.prototype.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }
    return this;
}

window.getDeck = function () {
    var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var cards = [];
    ranks.forEach(function (rank, index) {
        suits.forEach(function (suit, index) {
            cards.push(rank + "_of_" + suit);
        });
    });
    return cards;
}
// END OF STUFF TO NOT MODIFY

var App = React.createClass({
    getInitialState: function() {
        return {
            hand: [],
        };
    },
    onDeal: function (e) {
        e.preventDefault();
        var cards = window.getDeck().shuffle();

        var handArray = [];
        for (var i = 0; i < 5; i++) {
            handArray.push(
                <div className="col-sm-2">
                    <h1><img className="img-responsive" alt="" src={"http://golearntocode.com/images/cards/" + cards[i] + ".png"}/></h1>
                </div>
            )
        }
        this.setState({hand: handArray});

    },
    render: function () {
        return (
            <div>
                <h1>Welcome to the KIEI-924 Casino!</h1>

                <div className="row">
                    {this.state.hand}
                    <div className="col-sm-2">
                        <h1><a href="#" onClick={this.onDeal} className="btn btn-success">Deal</a></h1>
                    </div>
                </div>
            </div>
        )
    }
})

ReactDOM.render(<App />, document.getElementById("app"))
