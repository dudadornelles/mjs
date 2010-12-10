require('./assertThat');
require('../src/mjs-core');

it("should make all the tags available as a dsl when required", function() {
	assertThat(typeof(html), is("function"));
	assertThat(typeof(select()), is("string"));
	assertThat(typeof(inexistentTagInMjsCoreFile), is("undefined"));
});

warpUp();
