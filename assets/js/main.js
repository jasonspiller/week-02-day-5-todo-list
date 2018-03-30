// instantiate the form object
const frmPost = document.getElementById('frmPost')

// add the event listener
frmPost.addEventListener('submit', function(e){
    e.preventDefault()

		// create a new article
		let newArticle = document.createElement('article');

		// add the text to it
		newArticle.innerHTML = document.getElementById('postText').value;

		// add the new article to the DOM
		document.getElementById('articleList').appendChild(newArticle);
});
