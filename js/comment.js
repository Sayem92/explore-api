

function getComment(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(res => res.json())
    .then(data => displayComment(data))
}

function displayComment(comments){
    for(const com of comments){
        const commentContainer = document.getElementById("list-container")
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h1>Id : ${com.id}</h1>
        <p>Name : ${com.name}</p>
        <p>Body : ${com.body}</p>
        `;
        commentContainer.appendChild(div)
    }
}


// getComment()