first of all i run react project by using command (npx create-react-app projectname  'which is task manager ')

create three files in components folder which is folder of src Task.js ,taskform.js and TaskList.js
// IN TASK.JS
it has functionality of edit and delete task 
use three props 
task:an object that contains task data such as id ,title
deltetask:a function passed from parent component to delete task
edittask:a function passed from parent component to edit task
use two usestate hooks isEdit and updateTask 
when user click in edit button edit mode is true and open input field after trigger on save button edit function passed ,delete button called delteTask function
handleedit function call when save button is clicked


// taskform.js
it contains form for user to addtask  it contains input field where user can add task and submit it
usestate react hook use to manage input field value(task)
handlesubmit function is triggered for  form submit
e.preventDefault( ) used to avoid page reload

// TaskList.js
it is used for rendering  a list of tasks 
props tasks :
an array of task objects such as title and id
deletetask and edittask are function passed from parent component to handles delete and edit task 
use map function to edit or delete  task one by one  , provideing unique key for each task

// App.js 
usestate :used to manage tasks in app
useEffect : used to fetch data from api component 
axios: a library for making http request to intract backend api

taskform and tasklist components use to break down the ui into reusable part
axios.get is used to get data from backend
axios.post is used to post data from frontend to backend 
axios.delete to delete data
 

 // django backend 

 in django create django project by using command django-admin startproject task_manager and create app by using command python manage.py startapp tasks 

 // task_manater /settings.py:

 to run app set the app name tasks in settings.py file in string
 for making restapi install django rest framework by using pip install djangorestframework and add rest_framework in installed app in setting.py 
 // for connect between fronend and backend 
 install coresheaders and add in installed app in settings.py 
 add middelware 'coresheaders.middelware.CoresMiddleware'
 and add react url
 CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',  
]


 // Run django project by using command python manage.py runserver 
 
 // tasks/models.py
  In tasks app create model in models.py file 
 in models.py create a class task in task class create title and completed fields
 to create initializer string function which initailize title
 use commands like python manage.py makemigrations  for makemigrations to migrate fields from model to database fields use python manage.py migrate command is used

 // connect to sqLite database 


 // tasks/serializers.py
 from rest_framework import serializer
 make serializers.py file to import models like Task to serialize the models fields
 in serializers.py use class meta to serialize model and fields

 // tasks/views.py
 import models like Task and serializer like Taskserializer in views
 from  rest_framework  import generics 
 make class to Listcreatapiview from generics to take data from task models  and serializeer data
 make class to retrieve and update data import RetrieveUpdateAPIView from generics
 also for DestroyAPIView for delete data create delete function to delete data from database

 // tasks/urls.py 
 to render urls make tasks urls for tasks,retrieveupdate urls for update tasks and delete urls to delete by id

 //task_manager/urls.py :
 make urls api to render api from tasks app urls

 by making all data is add from frontend to backend and backend to frontend 
 and add in database 
 also edit and save and delete








#   t a s k _ m a n a g e r  
 