!function($) {
	var bootstrapTree = {
		init: function() {
			$(this).find('ul').attr('role', 'tree').find('ul').attr('role', 'group');
			$(this).find('li:has(ul)').find(' > ul:not([expanded])').hide();
			$(this)
				.find('li:has(ul)')
				.addClass('parent_li')
				.attr('role', 'treeitem')
				.find(' > span')
				.attr('title', 'Collapse this branch')
				.on('click', function(e) {
					var children = $(this).parent('li.parent_li').find(' > ul');
					if (children.is(':visible')) {
						children.hide('fast');
						$(this).attr('title', 'Expand this branch').find(' > i').addClass('fa-plus-circle').removeClass('fa-minus-circle');
					} else {
						children.show('fast');
						$(this).attr('title', 'Collapse this branch').find(' > i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
					}
					e.stopPropagation();
				});
		}
	};

	$.fn.bootstrapTree = function(method) {
		if (bootstrapTree[method]) {
			return bootstrapTree[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return bootstrapTree.init.apply(this, arguments);
		} else {
			$.error('Method with name ' + method + ' does not exists for jQuery.bootstrapTree');
		}
	};

}(window.jQuery);
