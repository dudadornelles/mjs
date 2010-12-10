var sys = require('sys'); 
require(__dirname + '/tagsGenerator');

var listOfTags = [
	"html", "head", "body", "div", "ul", "li", 
	"span", "h1", "h2", "h3", "h4", "h5", "a", "p",
	"br", "hr", 
	"input", "textarea", "fieldset", "select", "option",
	"table", "th", "td", "tr", 
	"script"];

tagsGenerator = TagsGenerator();

var tags = tagsGenerator.generate(listOfTags);
for(var tag in tags) {
	GLOBAL[tag] = tags[tag];
}
