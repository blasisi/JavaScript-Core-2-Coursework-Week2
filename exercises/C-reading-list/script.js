// Write your code here...
const content = document.getElementById("content");
const header = document.createElement("h1");
header.innerHTML = "Book list";
document.body.appendChild(header);

function readingList(books) {
  const unOrderedList = document.createElement("ul");
  unOrderedList.style.width ="300px"
  unOrderedList.id = "ulId";
  content.appendChild(unOrderedList);
  for (let i = 0; i < books.length; i++) {
    const listEl = document.createElement("li");
    // listEl.style.height = "50px";
    // listEl.style.width = "200px";

    // books.filter ((book) => {

    const booksImg = document.createElement("img");
    booksImg.style.width="50px";

    if (books[i].title === "The Design of Everyday Things") {
      booksImg.src = "https://miro.medium.com/max/500/1*uTnQWF3K93mJs5I-UeZ_Dg.png";
    }
    if (books[i].title === "The Most Human Human") {
      booksImg.src = "https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg";
    }

    if (books[i].title === "The Pragmatic Programmer") {
      booksImg.src = "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg";
    }

    const pText = document.createElement("p");
      pText.innerText = `${books[i].title} ${books[i].author}`;

    if (books[i].alreadyRead === true) {
      listEl.style.background = "green";
    }
    if (books[i].alreadyRead === false) {
      listEl.style.background = "red";
    }
     listEl.appendChild(pText);
    listEl.appendChild(booksImg);
    unOrderedList.appendChild(listEl);
    listEl.style.listStyle = "none";

    // listEl.style.margin ="2em";
  }
}
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
