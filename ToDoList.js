function ToDoList() {
    let tasks = [];
    let newTask = '';

    function handleInputChange(event) {
        newTask = event.target.value;
    }

    function addTask() {
        if (newTask.trim() !== '') {
            tasks.push(newTask);
            newTask = '';
            renderTasks();
        }
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    function moveTaskUp(index) {
        if (index > 0) {
            [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
            renderTasks();
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
            renderTasks();
        }
    }

    function renderTasks() {
        const taskList = document.querySelector('.to-do-list ol');
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const li = document.createElement('li');

            const taskText = document.createElement('span');
            taskText.textContent = task;
            taskText.classList.add('text');
            li.appendChild(taskText);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.onclick = () => deleteTask(index);
            li.appendChild(deleteButton);

            const upButton = document.createElement('button');
            upButton.textContent = 'Up';
            upButton.classList.add('move-button');
            upButton.onclick = () => moveTaskUp(index);
            li.appendChild(upButton);

            const downButton = document.createElement('button');
            downButton.textContent = 'Down';
            downButton.classList.add('move-button');
            downButton.onclick = () => moveTaskDown(index);
            li.appendChild(downButton);

            taskList.appendChild(li);
        });
    }

    document.querySelector('.add-button').onclick = addTask;
    document.querySelector('input').oninput = handleInputChange;
}

document.addEventListener('DOMContentLoaded', () => {
    ToDoList();
});




/* import React, { useState } from 'react'

function ToDoList() {
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] =useState('');

   function handleInputChange(event){
      setNewTask(event.target.value);
   }

   function addTask() {
    if (newTask.trim() !== '') {
        setTasks(t => [...t, newTask]);
        setNewTask('');
    }
   }

   function deleteTask(index) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
   }

   function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
   }

   function moveTaskDown(index) {
    if(index <  tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks)
    }
   }

   return (
        <div className='to-do-list'>
                <h1>To-Do-List</h1>

                <div>
                    <input type="text" placeholder='Enter a task...' value={newTask} onChange={handleInputChange}/>
                    <button className='add-button' onClick={addTask}>Add Task</button>
                </div>

                <ol>
                    {tasks.map((task, index) => 
                       <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>Up</button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>Down</button>
                        </li>
                    )}
                </ol>
            </div>)
}

export default ToDoList */