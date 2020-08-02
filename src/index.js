document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let task-description=document.getElementById('new-task-description');
   let create-task-form=document.getElementById('create-task-form');
   let myTasksLists = document.getElementById('tasks');
   body.appendChild(myList);

   create-task-form.addEventListener("submit",function(event){
      event.preventDefault();
      const newListItem= document.createElement(li);
      newListItem.innerHtml=input.value;
       myList.appendChild(newListItem);


   },false);
});
