# mjs #

Write html in javascript in a functional way.

You can code like that:

	html(
		body(
			div({id: content, background: red},
				div({id: main},
					"Main content of website"
				),
				div({id: navigation},
					"Content for right nav"
				)
			)
		)
	);

				
Install tidy to get pretty printer for the html:
	sudo apt-get install tidy

To run with tidy:
	./run example.js

To run without tidy:
	node example.js

To run tests:
	make

