var sys = require('sys'); 
require(__dirname + '/innerTagExpander');

var Tag = function(_tag) {

	var tag = _tag;
	var innerTagExpander = InnerTagExpander();

	var private = {
		attrs: function(_attrs) {
			if (typeof(_attrs) === 'function' || typeof(_attrs) === 'string') return "";
				var attributes = "";
			for(var attr in _attrs) {
				attributes += " " + attr + "=\'" + _attrs[attr] + "\'";
			}
			return attributes;
		}
	}

	return function() {
		args = Array.prototype.slice.call(arguments);
		return "<" + tag + private.attrs(args[0]) + ">" + innerTagExpander.expand(args) + "</" + tag + ">";
	}
}


html = Tag("html");
head = Tag("head");
body = Tag("body");
div = Tag("div");
ul = Tag("ul");
li = Tag("li");
span = Tag("span");
h1 = Tag("h1");
a = Tag("a");

content = function(value) { return value; };
