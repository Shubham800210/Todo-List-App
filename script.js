const inputbox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editTodo = null;

const addTodo = () => {

    const inputText = inputbox.value.trim();
    if (inputText.length <= 0) {
        alert("You Must Write Something ");
        return false;
    }

    // checking for edit part 
    if (addBtn.value === "Update") {
        //   Passing the original text to editLocalTodos function before edit it in the todoList
        editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputbox.value = "";
    } else {
        // console.log(inputText);
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit"
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete"
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        inputbox.value = "";

        saveLocalTodos(inputText);

    }

}


const updateTodo = (e) => {
    if (e.target.innerHTML === "Delete") {
        if (confirm("Are You Want to Delet")) {
            todoList.removeChild(e.target.parentElement);
            deleteLocalTodos(e.target.parentElement);
        } else {
            return;
        }
    }
    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addBtn.value = "Update";
        editTodo = e;
    }
}

const saveLocalTodos = (todo) => {

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    //    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos));

}

const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit"
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete"
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);

            todoList.appendChild(li);
            // inputbox.value="";
        });
    }


}


const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todotext = todo.children[0].innerHTML;
    let todoindex = todos.indexOf(todotext);
    //    console.log(todoindex);
    todos.splice(todoindex, 1);
    localStorage.setItem("todos", JSON.stringify(todos))
}

// const editLocalTodos = (todo) => {

//     console.log(JSON.parse(localStorage.getItem("todos")));
//     let todos = JSON.parse(localStorage.getItem("todos"));
//     let todoIndex = todos.indexOf(todo);
//     todos[todoIndex] = inputbox.value;
//     console.log(todos[todoIndex]);
//     localStorage.setItem("todos",JSON.stringify(todos));
//     console.log(localStorage.getItem("todos"));
// }

const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);
todoList.addEventListener('click', updateTodo);
addBtn.addEventListener('click', addTodo);





///////

// const inputBox = document.getElementById('inputBox');
// const addBtn = document.getElementById('addBtn');
// const todoList = document.getElementById('todoList');

// let editTodo = null;

// // Function to add todo
// const addTodo = () => {
//     const inputText = inputBox.value.trim();
//     if (inputText.length <= 0) {
//         alert("You must write something in your to do");
//         return false;
//     }

//     if (addBtn.value === "Edit") {
      
//           // Passing the original text to editLocalTodos function before edit it in the todoList
//           editLocalTodos(editTodo.target.previousElementSibling.innerHTML);
//           editTodo.target.previousElementSibling.innerHTML = inputText;
//         // editLocalTodos(inputText);
//         addBtn.value = "Add";
//         inputBox.value = "";
//     }
//     else {
//         //Creating p tag
//         const li = document.createElement("li");
//         const p = document.createElement("p");
//         p.innerHTML = inputText;
//         li.appendChild(p);


//         // Creating Edit Btn
//         const editBtn = document.createElement("button");
//         editBtn.innerText = "Edit";
//         editBtn.classList.add("btn", "editBtn");
//         li.appendChild(editBtn);

//         // Creating Delete Btn
//         const deleteBtn = document.createElement("button");
//         deleteBtn.innerText = "Remove";
//         deleteBtn.classList.add("btn", "deleteBtn");
//         li.appendChild(deleteBtn);

//         todoList.appendChild(li);
//         inputBox.value = "";

//         saveLocalTodos(inputText);
//     }
// }

// // Function to update : (Edit/Delete) todo
// const updateTodo = (e) => {
//     if (e.target.innerHTML === "Remove") {
//         todoList.removeChild(e.target.parentElement);
//         deleteLocalTodos(e.target.parentElement);
//     }

//     if (e.target.innerHTML === "Edit") {
//         inputBox.value = e.target.previousElementSibling.innerHTML;
//         inputBox.focus();
//         addBtn.value = "Edit";
//         editTodo = e;
//     }
// }

// // Function to save local todo
// const saveLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     todos.push(todo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// // Function to get local todo
// const getLocalTodos = () => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//         todos.forEach(todo => {

//             //Creating p tag
//             const li = document.createElement("li");
//             const p = document.createElement("p");
//             p.innerHTML = todo;
//             li.appendChild(p);


//             // Creating Edit Btn
//             const editBtn = document.createElement("button");
//             editBtn.innerText = "Edit";
//             editBtn.classList.add("btn", "editBtn");
//             li.appendChild(editBtn);

//             // Creating Delete Btn
//             const deleteBtn = document.createElement("button");
//             deleteBtn.innerText = "Remove";
//             deleteBtn.classList.add("btn", "deleteBtn");
//             li.appendChild(deleteBtn);

//             todoList.appendChild(li);
//         });
//     }
// }

// // Function to delete local todo
// const deleteLocalTodos = (todo) => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     }
//     else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     let todoText = todo.children[0].innerHTML;
//     let todoIndex = todos.indexOf(todoText);
//     todos.splice(todoIndex, 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     // Array functions : slice / splice
//     console.log(todoIndex);
// }

// const editLocalTodos = (todo) => {
//     let todos = JSON.parse(localStorage.getItem("todos"));
//     let todoIndex = todos.indexOf(todo);
//     todos[todoIndex] = inputBox.value;
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// document.addEventListener('DOMContentLoaded', getLocalTodos);
// addBtn.addEventListener('click', addTodo);
// todoList.addEventListener('click', updateTodo);