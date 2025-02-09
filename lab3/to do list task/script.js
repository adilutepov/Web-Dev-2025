document.getElementById('add-task-button').addEventListener('click', function() {
    const taskText = document.getElementById('task-input').value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextElement = document.createElement('span');
    taskTextElement.className = 'task-text';
    taskTextElement.innerText = taskText;

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';

    const completeButton = document.createElement('button');
    completeButton.className = 'complete-button';
    completeButton.innerText = 'Completed';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete task';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(taskButtons);

    document.getElementById('task-list').appendChild(taskItem);
    document.getElementById('task-input').value = '';
});
