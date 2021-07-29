function todoList(todos) {
  // Write your code here...
     const div = document.getElementById("content");
    const  h1Tag = document.createElement("h1");
    h1Tag.innerText = "To Do List";

  const unOrderedList = document.createElement("UL");

  todos.forEach(item => {
    const liElem = document.createElement("li");
      liElem.innerHTML = item.todo;
      unOrderedList.appendChild(liElem);
      
    liElem.addEventListener("click" , function() {
      if (liElem.style.textDecoration === "line-through") {
        liElem.style.textDecoration ="";
      } else {
        liElem.style.textDecoration ="line-through";
      }
    
    })
  })
  div.appendChild(unOrderedList);
   console.log(unOrderedList);
}
  // ( let i = 0; i < toDos.length; i++){
//   const aTag = document.createElement("a");
//    aTag.id ="anchor";
//    const listEl = document.createElement(`${toDos[i].toDo}`);
//     aTag.appendChild(listEl);
//     liTag.appendChild(aTag);
//     unOrderedList.appendChild(liTag);
//     //click 
//     const clickThrough =  function lineClick(eventClick) {
//       if (listEl.style.textDecoration === "line-through") {
//         listEl.style.textDecoration ="";
//       }else{
//       listEl.style.textDecoration ="line-through";
//     }
//   };
       
//    aTag.addEventListener(click, clickThrough);
//  }
//  document.getElementById("content").appendChild(unOrderedList);

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);