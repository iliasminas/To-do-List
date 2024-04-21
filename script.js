document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to create a new task item
    function createTaskItem(taskContent) {
        const li = document.createElement('li');
        const taskText = document.createTextNode(taskContent);
        li.appendChild(taskText);
        taskList.appendChild(li);

        // Add event listener to mark task as completed
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        // Add delete button to remove task
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        // Add event listener to delete task
        deleteBtn.addEventListener('click', function (event) {
            event.stopPropagation(); // Prevent li event from firing
            li.remove();
        });
    }

    // Function to add new task when button is clicked
    function addTask() {
        const taskContent = taskInput.value.trim();
        if (taskContent !== '') {
            createTaskItem(taskContent);
            taskInput.value = ''; // Clear input field
        } else {
            alert('Please enter a task!');
        }
    }

    // Event listener for add task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for 'Enter' key press in input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});