$(function() {

	// prepend todo to page
	const addTodos  = (str) => {
		$('#todoList').prepend(
			$('<li>')
				.addClass('todo')
				.html(str)
		);
	}

	const newTodo = (str) => {
		// ensure there is text entered
		if (str !== '') {

			// add to the page
			addTodos(str);

			// create an array to add todos to
			let arrTodos = [];

			// if there are stored todos get them and add to the array
			if (localStorage.getItem('todo') !== null) {
				arrTodos = JSON.parse(localStorage.getItem('todo'));
			}

			// add new todo to the array and store the array
			arrTodos.push(str);
			localStorage.setItem('todo', JSON.stringify(arrTodos));

			// reset error message
			if ($('#msg').hasClass('error')) {
				$('#msg')
					.removeClass('error')
					.text('What would you like Todo?');
			}

			// clear text from input
			$('#todo').val('');

		} else {
			$('#msg')
				.addClass('error')
				.text('Try entering a Todo first');
		}
	};

	// add the event listener
	$('#frmTodo').on('submit', function(e){
    e.preventDefault();
		newTodo($('#todo').val());
	});

	//
	const populateTodoList = () => {

		// check to make sure there is a list
		if (localStorage.getItem('todo') !== null) {

			console.log('has');

			// parse local storage to an array
			let arrStoredTodos = JSON.parse(localStorage.getItem('todo'));

			for(let i=0; i < arrStoredTodos.length; i++) {
				addTodos(arrStoredTodos[i])
			}
		}
	}
	populateTodoList();

});
