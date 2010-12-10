
InnerTagExpander = function() {


	var skipAttributes = function(tags) {
		if(tags && typeof(tags[0]) === 'object')
			return tags.slice(1, tags.lenght);
		return tags;
	};

	var expandTags = function(tags) {
		var expandedTags = "";
		for(var i = 0; i < tags.length; i++) {
			expandedTags += (typeof(tags[i]) === 'function' ? tags[i]() : tags[i]) || "";
		}
		return expandedTags;
	};

	return {
		expand : function(tags) {
			return expandTags(skipAttributes(tags));
		}
	}
}

