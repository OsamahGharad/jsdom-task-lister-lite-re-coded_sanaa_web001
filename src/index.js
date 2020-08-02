document.addEventListener("DOMContentLoaded", () => {
  // your code here

   let submitForm=document.getElementById('create-task-form');
   submitForm.addEventListener('submit',(event) => {
      event.preventDefault();

      const task_description_input=document.getElementById('new-task-description').value;
      const myTasksLists = document.getElementById('tasks');
      const newListItem= document.createElement(li);
      newListItem.innerHtml=task_description_input;
       myTasksLists.appendChild(newListItem);
          console.log(myTasksLists);
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
