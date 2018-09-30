var list = {
	ulist: $("ul"),
	todos: $("li"),
	trash: $("span"),
	input: $("input"),
	hide:  $("h1 span"),
	hidden: false,
	inputClicked: false,
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

		list.input.on("click", function() {
			if(!(list.inputClicked)) {
				list.inputClicked = true;

				$(this).val("");
			}
		});

		list.hide.on("click", function() {
			if( !(list.hidden) ) {
				list.input.fadeOut();
				list.hidden = true;
			} else {
				list.input.fadeIn();
				list.hidden = false;
			}
		});
	}
};

list.init();
