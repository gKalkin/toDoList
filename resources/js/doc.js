var list = {
	ulist: $("ul"),
	todos: $("li"),
	trash: $("span"),
	input: $("input"),
	init: function() {
		//Delegate an event handler to the ul element
		//so that clicks on any spans will bubble up
		//to the event handler, rather than attach
		//an event listener to every span.
		list.ulist.on("click", "span", function() {
			$(this).parent().fadeOut( 400, function () {
				$(this).remove();
			});
		});

		list.ulist.on("click", "li", function() {
			$(this).css("color", "gray");
			$(this).css("text-decoration", "line-through");

		});

		//Insert new element in list
		list.input.on("keypress", function(event) {
			if(event.which === 13) {
				list.ulist.append("<li><span>X </span>"
					        		+ $(this).val()
					        		+ "</li>");
				$(this).val("");
			}
		});
	}
};

list.init();
