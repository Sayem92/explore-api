
function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))

}

function displayTodos(todos){
    // get the container
    const todosContainer = document.getElementById("todos-container")
    for (const todo of todos){
        // creat the div
        const todosDiv = document.createElement('div');
        // creat the HTML 
        todosDiv.innerHTML = `
        <h4>Id : ${todo.id} </h4>
        <p>UserId : ${todo.userId} </p>
        <h3>Title : ${todo.title} </h3>
        <p>Is completed: ${todo.completed === true ? 'Complete' : 'Uncomplete'} </p>
        `;
        todosContainer.appendChild(todosDiv)
    }
}

loadTodos()