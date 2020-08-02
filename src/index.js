document.addEventListener("DOMContentLoaded", () => {
  // your code here

   let submitForm=document.getElementById('create-task-form');
   submitForm.addEventListener('submit',(event) => {
      event.preventDefault();

      const task_description_input=document.getElementById('new-task-description').value;
      const  my_tasks_lists = document.getElementById('tasks');
      const new_listItem= document.createElement('li');
      new_listItem.innerHtml=task_description_input.value;
       my_tasks_lists.appendChild(new_listItem);
          console.log(my_tasks_lists);
   });
  // let submit = document.getElementById('create-task-form');
  // submit.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //
  //   let input = document.getElementById("new-task-description").value;
  //    let list = document.querySelector("#tasks");
  //    let li = document.createElement('li');
  //    li.innerHTML =`${input} `;
  //    list.appendChild(li);
  //    console.log(list);
  //
  //
  // });
});
