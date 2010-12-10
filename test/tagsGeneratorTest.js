require('./assertThat');
require('../src/tagsGenerator');

var tagsGenerator = TagsGenerator();
var tags = tagsGenerator.generate(["a","span", "html"]);

it("should generate the tags from a list of strings", function() {
	assertThat(typeof(tags.a), is("function"));
	assertThat(typeof(tags.span), is("function"));
	assertThat(typeof(tags.html()), is("string"));
	assertThat(typeof(tags.body), is("undefined"));
});

warpUp();
