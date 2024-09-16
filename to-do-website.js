document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove">Remove</button>
    `;
    
    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('completed');
    });
    
    li.querySelector('.remove').addEventListener('click', function() {
        taskList.removeChild(li);
    });
    
    taskList.appendChild(li);
    taskInput.value = '';
});

document.getElementById('new-task').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('add-task').click();
    }
});
