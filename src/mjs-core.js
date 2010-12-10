var sys = require('sys'); 
require(__dirname + '/tagsGenerator');

var listOfTags = [
	"DOCTYPE", "title", "link", "meta", "style", "script",
	"h1", "h2", "h3", "h4", "h5", "h6",
 	"strong", "em", "big", "small",	
	"html", "head", "body",
	"ul", "li", 
	"p", "div", "span", 
	"br", "hr", 
	"input", "textarea", "fieldset", "select", "option",
	"table", "th", "td", "tr"];

tagsGenerator = TagsGenerator();

var tags = tagsGenerator.generate(listOfTags);
for(var tag in tags) {
	GLOBAL[tag] = tags[tag];
}
