var saySomething = function(sayWhat) {
	alert(sayWhat);
};

var getString = function(myPrompt) {
	return prompt(myPrompt);
};
var convertGallonsLiters = function (gallonsOrLiters, gallonsToLiters) { //if true gallons to liters else liters to gallons
	if (gallonsToLiters) {
		var result = gallonsOrLiters * 3.785411784;
	} else {
		var result = gallonsOrLiters * (1/3.785411784);
	};
	return result;
}

// Test Section:
saySomething("Convert 5 gallons to liters: " + convertGallonsLiters(5, true));
saySomething("Convert 5 liters to gallons: " + convertGallonsLiters(5, false));
