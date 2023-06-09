const addTaskInput = document.querySelector('.addTaskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const newData = document.querySelector('.newData');

let tasksArr;
let getTasks = JSON.parse(localStorage.getItem('tasks'));
getTasks ? tasksArr  = getTasks : tasksArr = [];

let todoItem = [];

function Tasks(item){
    this.item = item;
    this.completed = false;

}

addTaskBtn.addEventListener('click', () => {
    if(addTaskInput.value !== "") {
        tasksArr.push(new Tasks(addTaskInput.value));
        addTaskInput.value = "";
        console.log(tasksArr);
    }
})



const updateStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
}



function update() {
    updateStorage();
    fillTasks();
}