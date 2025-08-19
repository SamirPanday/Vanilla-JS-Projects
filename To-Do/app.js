//selectors
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector('.todo-button');
const filterOption =  document.querySelector('.filter-todo');

//event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);



//functions
function addTodo(event){
    event.preventDefault(); // Prevent form submission  
    
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create list
    const newTodo = document.createElement('li');
    console.log(todoInput.value);
    if (todoInput.value === '') {
        alert('Please enter a todo item');
        return;
    }
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //add todo to local storage
    saveLocalTodos(todoInput.value);


    //create buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append everything above to the main list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value = '';

}


function deleteCheck(event){
    console.log(event.target)

    const item = event.target;
    if (item.classList[0] === 'trash-btn'){
        item.parentElement.classList.toggle('fall');
        removeLocalTodos(item.parentElement);
        item.parentElement.addEventListener('transitionend', function(){
            item.parentElement.remove();
        });
    }
    if (item.classList[0] === 'complete-btn'){
        item.parentElement.classList.toggle('completed');
    }

}


function filterTodo(e){
    const todo = todoList.childNodes;
    todo.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

        }

    })

}


function saveLocalTodos(todo){

    // console.log("Saving to localStorage:", todo);
    // check if i already have saved shit first
    let todos;
    if(localStorage.getItem('todos') === null ){
        todos = [];
    }
    else{
        todos =  JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


function getTodos(){
    let todos;
    if(localStorage.getItem('todos') === null ){
        todos = [];
    }
    else{
        todos =  JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create list
    const newTodo = document.createElement('li');
    console.log(todoInput.value);
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);


    //create buttons
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append everything above to the main list
    todoList.appendChild(todoDiv);
    })
}

function removeLocalTodos(todo){
    // console.log("Removing from localStorage:", todo);
    let todos;
    if(localStorage.getItem('todos') === null ){
        todos = [];
    }
    else{
        todos =  JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todos.indexOf(todo.children[0].innerText);
    todos.splice(todoIndex, 1);
    // console.log(todoIndex);
    localStorage.setItem('todos', JSON.stringify(todos));
}