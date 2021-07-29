function shoppingList(arrayOfItem) {
  // Write your code here...
  const header = document.createElement("h2");

  header.innerText = "shoppingList";
  document.getElementById("content").appendChild(header);
  const unOrderedList = document.createElement("ul");
  document.getElementById("content").appendChild(unOrderedList);

  for (let i = 0; i < arrayOfItem.length; i++) {
    const listEl = document.createElement("li");
    const listText = document.createTextNode(`${arrayOfItem[i]}`);
    listEl.appendChild(listText);
    unOrderedList.appendChild(listEl);
    listEl.style.fontSize = "20px";
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

// * You should use an unordered list: `<ul>`.
// * Each item from the array should be in a `<li>` tag.
// * All of your HTML should go inside the `<div>` with the id **"content"**.
