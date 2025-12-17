const addBtn = document.querySelector("#add");
const todoList = document.querySelector(".todo-body__list");
let todoInput = document.querySelector("#write");
let todoListArr = [];

addBtn.addEventListener("click", () => {
    let todoValue = todoInput.value;

    todoListArr.push(todoValue);

    todoList.insertAdjacentHTML(
        "beforeend",
        `<li class='todo-body__item'><input type='checkbox' name='chk' class=''><span>${todoValue}</span><button class='remove'>삭제</button></li>`
    );
    todoInput.value = "";
});
