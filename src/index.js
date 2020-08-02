document.addEventListener("DOMContentLoaded", () => {
  // your code here

   let sub-d-f=document.getElementById('create-task-form');
sub-d-f.addEventListener('submit',(event) => {
      event.preventDefault();

      let input = document.getElementById("new-task-description").value;
         let list = document.querySelector("#tasks");
         let li = document.createElement('li');
         li.innerHTML =`${input} `;
         list.appendChild(li);
         console.log(list);
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
