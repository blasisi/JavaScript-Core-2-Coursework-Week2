const people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

function listOfNames(arrayOfPeople) {
  const content = document.querySelector("#content");

  for (let i = 0; i < people.length; i++) {
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    content.appendChild(h1);
    content.appendChild(h2);
    h1.innerHTML = `${people[i].name}`;
    h2.innerHTML = `${people[i].job}`;
    console.log(h1, h2, i);
    // document.getElementById("content").appendChild(h1);
    // document.getElementById("content").appendChild(h2);
  }
}

listOfNames(people);
