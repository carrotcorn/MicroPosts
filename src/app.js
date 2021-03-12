import http from "./http";
import ui from "./ui";
//get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);
//listen for submit post
document.querySelector(".post-submit").addEventListener("click", submitPost);
// listen for Delete
document.querySelector("#posts").addEventListener("click", deletePost);

// Get Post
function getPosts() {
  http
    .get("http://localhost:3000/posts")
    //returns promise because EasyHttp functions are async
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

// Submit Post
function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;

  //set object literals to the variables above
  const data = {
    title,
    body,
  };

  // Create Post
  http
    .post("http://localhost:3000/posts", data)
    .then((data) => {
      ui.showAlert("Post Added", "alert alert-success");
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}
// Delete Post
function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id; //gets the id on click
    if (confirm("are you sure?")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert("Post Removed", "alert alert-success");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }

  e.preventDefault();
}
