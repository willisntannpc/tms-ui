function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') return;

    const taskItem = document.createElement('li');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('button');
    const dateAdded = document.createElement('small');
    const dateEdited = document.createElement('small');

    taskText.textContent = taskInput.value;
    deleteButton.textContent = 'Delete';
    editButton.textContent = 'Edit';
    dateAdded.textContent = `Added on: ${new Date().toLocaleDateString()}`;
    dateEdited.textContent = '';

    deleteButton.onclick = () => taskList.removeChild(taskItem);
    editButton.onclick = () => {
        const newTask = prompt('Edit your task:', taskText.textContent);
        if (newTask) {
            taskText.textContent = newTask;
            dateEdited.textContent = `Edited on: ${new Date().toLocaleDateString()}`;
        }
    };

    taskItem.appendChild(taskText);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(dateAdded);
    taskItem.appendChild(dateEdited);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

function changeColor() {
    const button = document.getElementById('colorButton');
    // Set the background color to a specific color of your choice
    button.style.backgroundColor = "grey"; // Change this to any color you want
    button.style.color = "red"; // Optional: Change text color if needed
}