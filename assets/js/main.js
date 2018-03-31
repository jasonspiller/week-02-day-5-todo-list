$(function() {

	// prepend todo to page
	const addTodos  = (str) => {
		$('#todoList').prepend(
			$('<li>')
				.addClass('todo')
				.html(
					'<div class="checkbox">' +
					'<i class="far fa-square fa-2x"></i>' +
					'</div>' +
					'<input type="text" class="todo-content" value="' + str + '">' +
					'</span>' +
					'<div class="delete">' +
					'<i class="fas fa-window-close fa-2x"></i>' +
					'</div>'
			)
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

	// add stored todos
	const populateTodoList = () => {

		// check to make sure there is a list
		if (localStorage.getItem('todo') !== null) {

			// parse local storage to an array
			let arrStoredTodos = JSON.parse(localStorage.getItem('todo'));

			for(let i=0; i < arrStoredTodos.length; i++) {
				addTodos(arrStoredTodos[i])
			}
		}
	}
	populateTodoList();


	// add the event listeners
	$('#frmTodo').on('submit', function(e) {
    e.preventDefault();
		newTodo($('#todo').val());
	});

	// completed checkbox
	$('#todoList').on('click', '.checkbox', function() {
		// check to see if box is "checked" and toggle accordingly
		if ($(this).find('svg').hasClass('fa-square')) {

			// toggle icon
			$(this).empty().append('<i class="far fa-check-square fa-2x"></i>');

			//strikethrough text
			$(this).next('.todo-content').addClass('completed');

		} else {

			// toggle icon
			$(this).empty().append('<i class="far fa-square fa-2x"></i>');

			// remove strikethrough
			$(this).next('.todo-content').removeClass('completed');
		}
	})

	// edit todo
	$('#todoList').on('click', '.todo-content', function() {
		console.log('edit');
	})

	// delete todo
	$('#todoList').on('click', '.delete', function() {
		$(this).parent().remove();
	})
});
