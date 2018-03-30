$(function() {

	// prepend todo to page
	const addTodo  = (str) => {
		// add the text to it
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
			addTodo(str);

			// add to localStorage, add delimiter if todos > 0
			if (localStorage.getItem('todo') !== null) {
				str = localStorage.getItem('todo') + '|todo|' + str;
			}
			localStorage.setItem('todo', str);

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

	const populateTodoList = () => {

		// check to make sure there is a list
		if (localStorage.getItem('todo') !== null) {

			let arrTodos = localStorage.getItem('todo').split('|todo|');

			for(let i=0; i < arrTodos.length; i++) {
				addTodo(arrTodos[i])
			}
		}
	}
	populateTodoList();

	let arrTest = ['1', '2', '3'];
	console.log(arrTest);

	localStorage.setItem('test', JSON.stringify(arrTest));

	let arrTest = JSON.parse(localStorage.getItem('test'));
	console.log(arrTest);



});
