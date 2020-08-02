document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let input=document.getElementById('new-task-description');
   let submit=document.getElementById('create-task-form');
   let myList = document.createElement('ul');
   body.appendChild(myList);

   submit.addEventListener("submit",function(event){
      event.preventDefault();
      const newListItem= document.createElement(li);
      newListItem.innerHtml=input.value;
       myList.appendChild(newListItem);


   },false);
});
