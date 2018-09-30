var list = {
	ulist: $("ul"),
	todos: $("li"),
	trash: $("span"),
	input: $("input"),
	hide:  $("h1 span"),
	hidden: false,
	init: function() {
		//Delegate an event handler to the ul element
		//so that clicks on any spans will bubble up
		//to the event handler, rather than attach
		//an event listener to every span.
		list.ulist.on("click", "span", function() {
			$(this).parent().fadeOut( 400, function () {
				$(this).remove();
			});
			event.stopPropagation();
		});

		list.ulist.on("click", "li", function() {
			$(this).css("color", "gray");
			$(this).css("text-decoration", "line-through");
			event.stopPropagation();
		});

		//Insert new element in list
		list.input.on("keypress", function(event) {
			if(event.which === 13) {
				list.ulist.append("<li><span><i class=\"far fa-trash-alt\"></i></span>"
					        		+ $(this).val()
					        		+ "</li>");
				$(this).val("");
			}
		});

		list.input.on("focusin", function() {
			$(this).val("");
		});

		list.input.on("focusout", function() {
			$(this).val("Add New Todo");
		});

		list.hide.on("click", function() {
			if( !(list.hidden) ) {
				list.input.fadeOut();
				list.hidden = true;
				$(this).text("+");
			} else {
				list.input.fadeIn();
				list.hidden = false;
				$(this).text("-");
				// list.input.val("Add New Todo")
				list.inputClicked = false;
			}
		});
	}
};

list.init();
