document.addEventListener("DOMContentLoaded", () => {
  // your code here

   let submitForm=document.getElementById('create-task-form');
   submitForm.addEventListener('submit',function(event) {
      event.preventDefault();

      let task_description_input=document.getElementById('new-task-description').value;
      const  my_tasks_lists = document.getElementById('tasks');
      const new_listItem= document.createElement('li');
      new_listItem.innerHTML=task_description_input;
       my_tasks_lists.appendChild(new_listItem);
          console.log(my_tasks_lists);
            let task_description_input=" ";
          // event.target.reset();
   });

});
