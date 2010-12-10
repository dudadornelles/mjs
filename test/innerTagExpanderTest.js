require(__dirname+ '/assertThat');
require('../src/innerTagExpander');
require('../src/mjs-core');

var expander = InnerTagExpander();

it("should create the html tag", function() {
	assertThat(expander.expand(html()), is("<html></html>"))
});

it("should create nested head and body tag", function() {
	assertThat(
		expander.expand(html(
				head(),
				body()
			)), is("<html><head></head><body></body></html>")); 
});

it("should create tag with attrs", function() {
	assertThat(expander.expand(span({class : 'test'})), is("<span class='test'></span>"));
});

it("should allow nested stuff in body and head", function() {
	assertThat(
		expander.expand(html(
				head(),
				body(
					div({id: 'a_div'},'i can haz div')
				)
			)), is("<html><head></head><body><div id='a_div'>i can haz div</div></body></html>")); 
});

it("should expand tags even if only functions are passed", function() {
	assertThat(expander.expand(html(head,body)), 
						is("<html><head></head><body></body></html>"));
});

it("should get anonymous functions to lazy evaluation", function() {
	var expensiveStuff = false;
	assertThat(div(function() { if(expensiveStuff) doExpensive; }, "content that won't change"),
						 is("<div>content that won't change</div>"));
});


warpUp();
