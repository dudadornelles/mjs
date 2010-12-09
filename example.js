require.paths.unshift('.');
require('src/mjs-core');

var loggedIn = true;

console.log(
	html(
		head(),
		body(
			h1("MJS example"),
			div({id: 'header'},
				ul({id: 'nav'},
					li(a({href: '/home'}, 'Home')),
					function() {
						if(loggedIn) {
							return li(a({href: '/logout'},"Logout"));
						}
					}()
				)
			)
		)
	)
);
