const elForm = document.querySelector(".todo-form");
const elTodoInput = elForm.querySelector(".todo-text-input");
const elTodoList = document.querySelector(".todo-list");
const elTodoTamplated = document.querySelector("#super-todo-template").content;

todoArr = [];

function deleteTodo(evt){
  const todoId = evt.target.dataset.todoId;

  const foundTodoIndex = todoArr.findIndex((item) => item.id == todoId);
  todoArr.splice(foundTodoIndex, 1);
  renderTodos(todoArr, elTodoList);

}

function renderTodos(arr, element) {
  element.innerHTML = null;
  arr.forEach((todo) => {
      todoTemplate = elTodoTamplated.cloneNode(true);
    const todoTitleSpan = todoTemplate.querySelector(".todo-template-text");
    todoTitleSpan.textContent = todo.title;
    const todoDeleteBtn = todoTemplate.querySelector(".todo-delete-btn");
    todoDeleteBtn.dataset.todoId = todo.id;
    todoDeleteBtn.addEventListener("click", deleteTodo)
    element.appendChild(todoTemplate);
  });
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
   
  elInput = elTodoInput.value.trim();

  todoArr.push(
    {
      id: todoArr.length,
      title: elInput,
      isCompleted: false
    }
  )

  console.log(todoArr);
  elTodoInput.value = null;
    renderTodos(todoArr, elTodoList)
})


