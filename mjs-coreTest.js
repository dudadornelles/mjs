require.paths.unshift('.');
require('assertThat');
require('mjs-core');

it("should create the html tag", function() {
	assertThat(html(), is("<html></html>"))
});

it("should create nested head and body tag", function() {
	assertThat(
		html(
			[
				head(),
				body()
			]), is("<html><head></head><body></body></html>")); 
});

it("should allow nested stuff in body and head", function() {
	assertThat(
		html(
			[
				head(),
				body(
					div({id: 'a_div'},[content('i can haz div')])
				)
			]), is("<html><head></head><body><div id='a_div'>i can haz div</div></body></html>")); 
});

warpUp();
