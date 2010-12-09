InnerTagExpander = function() {
	return {
		expand : function(tags) {
			if(tags && typeof(tags[0]) === 'object') {
				tags = tags.slice(1, tags.lenght);
			}
			var expandedTags = "";
			for(var i = 0; i < tags.length; i++) {
				expandedTags += tags[i] || "";
			}
			return expandedTags;
		}
	}
}
