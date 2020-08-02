document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input=document.getElementById(input);
   let submit=document.getElementById('create-task-form');
   let myList = document.createElement('ul');
   body.appendChild(myList);
   
   submit.addEventListener("submit",function(event){
      event.preventDefault();
       document.createElement(li);
       li.appendChild(ul);
       li.innerHtml+=input;

   },false);
});
