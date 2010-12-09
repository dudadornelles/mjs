require.paths.unshift('.');
require('mjs-core');

document.write(
	html( [
			head(),
			body( [
					div({style: "border: solid 1px black;"}, [
							content("lalala")
						]) 
				])
		])
);
