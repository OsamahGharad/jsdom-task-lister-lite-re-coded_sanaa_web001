document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //  const task-description-input=document.getElementById('new-task-description');
  //  const create-task-form=document.getElementById('create-task-form');
  //  const myTasksLists = document.getElementById('tasks');
   //
  //  create-task-form.addEventListener("submit", function(event){
  //     event.preventDefault();
  //     const newListItem= document.createElement(li);
  //     newListItem.innerHtml=task-description-input.value;
  //      myTasksLists.appendChild(newListItem);
  //  });
  let submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let input = document.getElementById("new-task-description").value;
     let list = document.querySelector("#tasks");
     let li = document.createElement('li');
     li.innerHTML =`${input} `;
     list.appendChild(li);
     console.log(list);


  });
});
