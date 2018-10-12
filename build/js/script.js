var quickAddButton = document.querySelector("#quick-add-button");

if (quickAddButton) {
  quickAddButton.addEventListener("click", function() {
    var ourPostData = {
      "title": document.querySelector('.admin-quick-add [name="author"]').value,
      "content": document.querySelector('.admin-quick-add [name="content"]').value,
      "source": document.querySelector('.admin-quick-add [name="source"]').value,
      "status": "publish"
    }
  
    var createPost = new XMLHttpRequest();
    createPost.open("POST", "/quotesondev/wp-json/wp/v2/posts");
    createPost.setRequestHeader("X-WP-Nonce", postQuotes.nonce);
    createPost.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    createPost.send(JSON.stringify(ourPostData));
  });
}

var postsBtn = document.getElementById('posts-btn');
var postsContainer = document.getElementById('posts-container');

if (postsBtn) {
  postsBtn.addEventListener('click', function() {
      var ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', "/quotesondev/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1");
      ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
          var data = JSON.parse(ourRequest.responseText);
          createHTML(data);
        } else {
          console.log("Server error.");
        }
      };

      ourRequest.onerror = function() {
        console.log('Connection error');
      }
      ourRequest.send();
  })
}

function createHTML(postsData) {
  ourHTMLString = '';
  for (i = 0; i < postsData.length; i++) {
    ourHTMLString += '<h2>' + postsData[i].title.rendered + '</h2>';
    ourHTMLString += postsData[i].content.rendered;
  }
  postsContainer.innerHTML = ourHTMLString;
}
