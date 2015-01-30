function howdy() {
	console.log("Rebecca Hall says hiya!");
}

howdy();

var numba = function(string) {
	if (string.length < 7) {
		console.log("What a short little word!");
	} else if (string.length > 7) {
		console.log("I’m sorry, but that’s too many to count.");
	} else {
		console.log("7, what a perfect choice!");
	}
}

numba("7");
numba("seventy");
numba("university");

function inception(callback, value) {
	callback(value);
}

function theCallback(value) {
	console.log(value + " is a fantastic movie");
}

inception( theCallback, "Indiana Jones and the Temple of Doom");

