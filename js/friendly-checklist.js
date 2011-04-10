(function( $ ){
	$.fn.friendlyChecklist = function() {

		var $this = $(this);

		$this.find(":checked").parent().toggleClass("checked");
		$this.find(":disabled").parent().toggleClass("disabled");
		$this.find('input:checkbox').click(function () {
			$(this).parent().toggleClass("checked");
		});

	};
})( jQuery );
