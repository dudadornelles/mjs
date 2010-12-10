var sys = require('sys'); 
require(__dirname + '/innerTagExpander');

TagsGenerator = function() {
	var expander = InnerTagExpander();
	
	var Tag = function(tag) {

		var private = {
			attrs: function(attrs) {
				if (typeof(attrs) === 'function' || typeof(attrs) === 'string') return "";
					var attributes = "";
				for(var attr in attrs) {
					attributes += " " + attr + "=\'" + attrs[attr] + "\'";
				}
				return attributes;
			}
		}
		
		return function() {
			args = Array.prototype.slice.call(arguments);
			return "<" + tag + private.attrs(args[0]) + ">" + expander.expand(args) + "</" + tag + ">";
		}
	}

	return {
	 	generate: function(listOfTagNames) {
			var tags = {};
			listOfTagNames.forEach(function(tagName) {
				tags[tagName] = Tag(tagName);
			});
			return tags;
		}
	}
}

