document.addEventListener("DOMContentLoaded", () => {
  // your code here

   let sub=document.getElementById('create-task-form');
sub.addEventListener('submit',(event) => {
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
