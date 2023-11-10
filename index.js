const fetchButton = document.getElementById("fetch-button")
const logButtton = document.getElementById("log-button")
const displayButton = document.getElementById("display-button")
const filterButton = document.getElementById("filter-button")
const olList = document.getElementById("todo-list")
const userInput = document.getElementById("user-id-input")
const completedButton = document.getElementById("completed-button")
let todoList = null

function handleFetchTodos() {
    console.log("fetching Todos")

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => todoList = json)
}

function handleLogTodos() {
    console.log(todoList)
}

function handleDisplayTodos() {
    for (let listItem = 0; listItem < todoList.length; listItem++) {
        item = document.createElement("li")
        item.innerText = todoList[listItem].title
        olList.appendChild(item)
    }
}

function handleFilterList() {
    userID = Number(userInput.value)
    if (userID >= 1 && userID <=10 ) {
        olList.innerHTML = ""
        for (let listItem = 0; listItem < todoList.length; listItem++) {
            if(todoList[listItem].userId == userID) {
                item = document.createElement("li")
                item.innerText = todoList[listItem].title
                olList.appendChild(item)
            }
        }
    } else {
            console.error("User ID must be a number between 1 and 10")
        }
    }

function handleRemoveList() {
    olList.innerHTML = ""
}

function handleCompletedList() {
    userID = Number(userInput.value)
    if (userID >= 1 && userID <=10 ) {
        olList.innerHTML = ""
        for (let listItem = 0; listItem < todoList.length; listItem++) {
            if(todoList[listItem].userId == userID) {
                item = document.createElement("li")
                item.innerText = todoList[listItem].completed
                olList.appendChild(item)
            }        
        }
    }
}