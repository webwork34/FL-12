const postsBlock = document.querySelector('.posts');
const commentsBlock = document.querySelector('.comments');

const index = JSON.parse(localStorage.getItem('index'));

let posts = `https://jsonplaceholder.typicode.com/posts`;
let comments = `https://jsonplaceholder.typicode.com/comments`;

function openModal() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
}

function closeModal() {
document.getElementById('modal').style.display = 'none';
document.getElementById('fade').style.display = 'none';
}

function sendRequest(method, url){
  openModal();
  return fetch(url).then(response => {
    closeModal();
      return response.json();
  });
}

sendRequest('GET', posts)
  .then(arrPosts => {
    arrPosts.forEach(post => {
      if(post.userId === index){
        postsBlock.insertAdjacentHTML('beforeend', `
          <div class="card">
            <p class="userId">userId ${post.userId}</p>
            <p class="id">id ${post.id}</p>
            <h3 class="title">${post.title}</h3>
            <p class="body">${post.body}</p>
          </div>
        `);
      }
    });
  })
  .catch(err => console.log(err));

sendRequest('GET', comments)
  .then(arrComments => {
    arrComments.forEach(comment => {
      if(comment.postId >= (index * 10 - 9) && comment.postId <= index * 10){
        commentsBlock.insertAdjacentHTML('beforeend', `
        <div class="card">
          <p class="postId">postId ${comment.postId}</p>
          <p class="id">id ${comment.id}</p>
          <h3 class="name">Name: ${comment.name}</h3>
          <p class="email">E-mail: ${comment.email}</p>
          <p class="body">${comment.body}</p>
        </div>
        `);
      }
    });
  })
  .catch(err => console.log(err));