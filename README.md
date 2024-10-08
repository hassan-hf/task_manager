# Task Manager

This is a task management web application built with React for the frontend and Django REST framework for the backend. The app allows users to add, edit, delete, and view tasks, with persistent storage through a backend API.

## Features
- Add new tasks
- Edit existing tasks
- Delete tasks
- Fetch tasks from backend API
- Data persistence with Django and SQLite

## Frontend (React)

The frontend of this project is built using React. The following components are used:

### Components

1. **Task.js**
   - Handles task display, edit, and delete operations.
   - Props:
     - `task`: An object containing the task data (id, title).
     - `deleteTask`: Function to delete a task.
     - `editTask`: Function to edit a task.
   - State:
     - `isEdit`: Manages whether the task is in edit mode.
     - `updateTask`: Stores the updated task during edit.

2. **TaskForm.js**
   - Provides a form for adding new tasks.
   - State:
     - `task`: Manages the input field for task title.
   - Handles form submission with `e.preventDefault()` to prevent page reload.

3. **TaskList.js**
   - Renders a list of tasks.
   - Props:
     - `tasks`: Array of task objects.
     - `deleteTask` and `editTask`: Functions passed to handle task deletion and editing.

4. **App.js**
   - Manages the state of tasks using `useState` and fetches task data from the backend using `useEffect`.
   - Uses `axios` to make HTTP requests:
     - `axios.get()` to fetch tasks.
     - `axios.post()` to add tasks.
     - `axios.delete()` to delete tasks.
     - `axios.put()` or `axios.patch()` to update tasks.

### Running the Frontend

1. Install dependencies:
   ```bash
   npm install
