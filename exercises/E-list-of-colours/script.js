let  colours = ["red", "blue", "green", "yellow", "pink", "brown"];

function listOfColours(colours) {
  // Write your code here...
  const divElem= document.getElementById("content");
  const select= document.createElement("select");
  const p = document.createElement("p");
  divElem.appendChild(p);

   colours.forEach(element => {
     
        const option = document.createElement("option");
           option.innerText = element;
           select.appendChild(option);
   });
   console.log(select);
   divElem.appendChild(select);
  select.addEventListener("click", function(event){
    p.innerHTML=`you have selected: ${event.target.value} `;
    p.style.color = select.value;
  })

};
listOfColours(colours);
