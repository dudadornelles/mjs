var tag = function(tagname) {

	return function(setup, innerTags) {

		if(typeof(innerTags) === "undefined") { //no setup for this tag
			innerTags = setup;
			setup = {};
		}

		var setupTag = function(attrs) {
			var attrsForTag = "";
			for(var attr in attrs) {
				attrsForTag += " " + attr + "='" + attrs[attr] + "'";
			}
			return attrsForTag;
		}
	
		var expandInnerTags = function(tags) {
			if(tags) {
				var expandedTags = "";
				for(var i = 0; i < tags.length; i++) {
					expandedTags += typeof(tags[i]) === "Function" ? tags[i]() : tags[i];
				}
				return expandedTags;
			}
			return "";
		}

		return "<" + tagname + setupTag(setup) + ">" + expandInnerTags(innerTags) + "</" + tagname + ">";
	}
}

html = tag("html");
head = tag("head");
body = tag("body");
div = tag("div");
ul = tag("ul");
li = tag("li");
span = tag("span");

content = function(value) { return value; };
