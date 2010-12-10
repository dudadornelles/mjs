var sys = require('sys');

var runningTest = "";
var numOfTests = 0;
var numOfFailingAssertions = 0;
var numOfAssertions = 0;
var failingTest = false;
var numOfFailingTests = 0;

assertThat = function(expected, matcher) {
	numOfAssertions++;
	if(!matcher.matches(expected)) {
		console.log('Error in: ' + runningTest);
		console.log('- Assertion Error');
		console.log('\tExpected <' + sys.inspect(expected) + '> '+ matcher.message + ' <' + matcher.value() + '>' + "\n");
		numOfFailingAssertions++;
		failingTest = true;
	}
}

is = function(value) { 
	return {
		matches: function(expected) {
			return expected === value; 
		},
		value: function() { 
			return sys.inspect(value); 
		},
		message: 'to be'
	}
}

contains = function(value) {
	return {
		matches: function(collection) {
			for(var i = 0; i < collection.length; i++) {
				if(collection[i] === value) {
					return true;
				}
			}
			return false;
		},
		value: function() {
			return sys.inspect(value);
		},
		message: 'to contain'
	}
}

warpUp = function() {
	if(numOfFailingTests === 0) {
		console.log("ALL TESTS PASSED!!!");
	}
	console.log("Ran " + numOfTests + " tests with " + numOfFailingTests + " failures.");
	console.log("Total of " + numOfAssertions + " assertions with " + numOfFailingAssertions + " failing assertions.\n");
}

it = function(behaviour, test) {
	runningTest = behaviour;
	failingTest = false;
	numOfTests++;
	test();
	if(failingTest) {
		numOfFailingTests++;
	} 
}

