// Create a function that returns the number of ways to make the amount of money with coins of the given coins.
// The function passes amount of money and an array of coins.
// var amount = 4 --> (4 cents), var coins = [1,2,3] --> (1 cent, 2 cents, 3 cents)

// Version 1 - Recursive
function changePossibilities(amount, coins) {

	if (amount === 0) return 1;
	if (amount < 0) return 0;
	if (coins.length === 0) return 0;

	var currentCoin = coins[0],
		restOfCoins = coins.slice(1);

	var numPossibilities = 0;
	while (amount >= 0) {
		numPossibilities += changePossibilities(amount, restOfCoins);
		amount -= currentCoin;
	}

	return numPossibilities;
}

// Version 2 - Memoization / Recursive
// Create constructor function
function Change() {
	this.memo = {};
}
// Create a prototype method
Change.prototype.changePossibilities = function(amount, coins) {
	// Check our memo and stop if it's already been solved
	var memoKey = String([amount, coins]);
	if (this.memo.hasOwnProperty(memoKey)) {
		return this.memo[memoKey];
	}

	if (amount === 0) return 1;
	if (amount < 0) return 0;
	if (coins.length === 0) return 0;

	var currentCoin = coins[0],
		remainingCoins = coins.slice(1),
		numPossibilities 0;

	while (amount >= 0) {
		numPossibilities += this.changePossibilities(amount, remainingCoins);
		amount -= currentCoin;
	}

	this.memo[memoKey] = numPossibilities;
	return numPossibilities;

}

// Version 3 - Bottom Up Algorithm
function changePossibilities(amount, coins) {
	// Initialize an array of zeros with indices that equal to the amount
	var possibleCents = [];
	for (var i = 0; i <= amount; i++) {
		possibleCents[i] = 0;
	}
	possibleCents[0] = 1;

	for (var j = 0; j < coins.length; j++) {
		var coin = coins[j];
		for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
			var higherAmountRemainder = higherAmount - coin;
			possibleCents[higherAmount] += possibleCents[higherAmountRemainder];
		}
	}

	return possibleCents[amount];
}





