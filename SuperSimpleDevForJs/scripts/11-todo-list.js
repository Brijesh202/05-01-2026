/*const todolist = [];
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  console.log(inputElement);

  const name = inputElement.value;
  console.log(name);

  todolist.push(name);
  console.log(todolist);

  inputElement.value = '';
}*/







// version2:
/*
// const todolist = ['make dinner', 'wash dishes'];
const todolist = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todolist.length; i++){
    const todo = todolist[i];
    //now we create some html code using this above todo variable.
    const html = `<p>${todo}</p>`//this is called generating html.instead of writing in html we just generated html using js.
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  todolist.push(name);
  console.log(todolist);

  inputElement.value = '';

  renderTodoList();
}

function displayOnEnterKey(event){
  // console.log(event);
  if(event.key === 'Enter'){
    addTodo();
  }
}*/




//version3:
/*const todolist = [
  {
    name: 'make dinner',
    dueDate: '2022-12-22'
  },
  {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }
];*/
const todolist = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todolist.length; i++){
    const todoObject = todolist[i];
    //now we create some html code using this above todo variable.

    //const name = todoObject.name;//you can see here variable name and property name is same so we can do destructuring
    //const {name} = todoObject;

    //const dueDate = todoObject.dueDate;//you can see here variable name and property name is same so we can do destructuring and also we can combine both the things in one line
    const {name, dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onClick="
        todolist.splice(${i},1);
        renderTodoList();
      "  class="delete-todo-button">Delete</button>
      `;
      //this is called generating html.instead of writing in html we just generated html using js.
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input')
  const dueDate = dateInputElement.value;

  todolist.push({
    name: name,
    dueDate: dueDate

    //if both are same then we can also write like this
    /*name,
    dueDate*/
  });
  console.log(todolist);

  inputElement.value = '';

  renderTodoList();
}

function displayOnEnterKey(event){
  // console.log(event);
  if(event.key === 'Enter'){
    addTodo();
  }
}