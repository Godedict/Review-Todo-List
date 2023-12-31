// taskManager.js

import { renderTasksWithHandles, makeTasksAndHandleDraggable } from './domManipulation.js';
import tasks from './tasks.js';

// Function to delete a task
function deleteTask(taskId) {
  // Filter out the task with the specified ID from the tasks array
  const updatedTasks = tasks.filter((task) => task.index !== taskId);

  // Update the tasks array with the filtered tasks
  tasks.length = 0;
  tasks.push(...updatedTasks);

  // Re-render the tasks list
  renderTasksWithHandles(tasks, deleteTask);
  makeTasksAndHandleDraggable();
}

// Function to edit task descriptions
function editTaskDescription(taskId, newDescription) {
  // Find the task with the specified ID in the tasks array
  const taskToEdit = tasks.find((task) => task.index === taskId);

  // If the task is found, update its description
  if (taskToEdit) {
    taskToEdit.description = newDescription;
  }

  // Re-render the tasks list
  renderTasksWithHandles(tasks, deleteTask);
  makeTasksAndHandleDraggable();
}

// Function to add a new task
function addTask(taskDescription) {
  const newTask = {
    description: taskDescription,
    completed: false,
    index: tasks.length,
  };

  tasks.push(newTask);
  // Re-render the tasks list
  renderTasksWithHandles(tasks, deleteTask);
  makeTasksAndHandleDraggable();
}

// Function to clear all completed tasks
function clearCompletedTasks() {
  // Filter out the completed tasks from the array
  const updatedTasks = tasks.filter((task) => !task.completed);

  // Update the tasks array with the filtered tasks
  tasks.length = 0;
  tasks.push(...updatedTasks);

  // Re-render the tasks list without the completed tasks
  renderTasksWithHandles(tasks, deleteTask);
  makeTasksAndHandleDraggable();
}

// Export the functions as named exports
export {
  deleteTask, editTaskDescription, addTask, clearCompletedTasks,
};
