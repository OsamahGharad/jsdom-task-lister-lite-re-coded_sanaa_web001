document.addEventListener("DOMContentLoaded", () => {
  // your code here
   const task-descriptionInput=document.getElementById('new-task-description');
   const create-task-form=document.getElementById('create-task-form');
   const myTasksLists = document.getElementById('tasks');

   create-task-form.addEventListener("submit",function(event){
      event.preventDefault();
      const newListItem= document.createElement(li);
      newListItem.innerHtml=task-descriptionInput.value;
       myTasksLists.appendChild(newListItem);


   },false);
});
