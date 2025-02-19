function addTask() {
  const input = document.getElementById('tf-input').value;
  const task = document.createElement('li');
  task.textContent = input;
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add('list-item');
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-button');
  editButton.addEventListener('click', () => {
    editTask(task.id);
  });
  task.appendChild(editButton);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });
  task.appendChild(deleteButton);
  document.getElementById('task-container').appendChild(task);
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id) {
  const task = document.getElementById(id);
  const input = document.getElementById('tf-input');
  input.placeholder = 'Edit a task';
  input.focus();
  input.value = task.innerText.replace('Edit', '').replace('Delete', '');
  document.getElementById('btn-1').hidden = true;
  const editButton = document.getElementById('btn-2');
  editButton.hidden = false;
  editButton.onclick = () => {
    task.childNodes[0].textContent = input.value;
    input.value = '';
    input.placeholder = 'Enter a task';
    editButton.hidden = true;
    document.getElementById('btn-1').hidden = false;
  };
}