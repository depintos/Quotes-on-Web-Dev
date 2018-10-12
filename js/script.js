var quickAddButton = document.querySelector("#quick-add-button");

if (quickAddButton) {
  quickAddButton.addEventListener("click", function() {
    var ourPostData = {
      "title": document.querySelector('.admin-quick-add [name="title"]').value,
      "content": document.querySelector('.admin-quick-add [name="content"]').value,
      "status": "publish"
    }
  
    var createPost = new XMLHttpRequest();
    createPost.open("POST", "http://localhost:8888/quotesondev/wp-json/wp/v2/posts");
    createPost.setRequestHeader("X-WP-Nonce", postQuotes.nonce);
    createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    createPost.send(JSON.stringify(ourPostData));
  });
}

console.log('hello');