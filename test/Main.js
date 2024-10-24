document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById('inputfirstname').value,
    lastName: document.getElementById('inputlastname').value,
    email: document.getElementById('inputEmail4').value,
    username: document.getElementById('autoSizingInputGroup').value,
    address: document.getElementById('inputAddress').value,
    city: document.getElementById('inputCity').value,
    state: document.getElementById('inputState').value,
    zip: document.getElementById('inputZip').value,
    gender: document.querySelector('input[name="gridRadios"]:checked').value,
    checkMeOut: document.getElementById('gridCheck').checked
  };
//   const gender = document.getElementById
// console.log(gender);
  console.log(formData);
});



const addtaskbtn = document.getElementById("taskAdd");
const taskcontainer = document.getElementById("taskcontainer");
const inputtask = document.getElementById("task");
const taskList = document.getElementById("taskList");

addtaskbtn.addEventListener("click", () => {

  if (inputtask.value !== "") {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.innerText = inputtask.value;
    taskList.appendChild(listItem);
    // console.log(listItem)
    // console.log("hello")

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm float-end";
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      listItem.remove();
    });

    listItem.appendChild(deleteBtn);
    inputtask.value = "";
    // console.log(inputtask);
  } else {
    alert("Please enter a task");
  }
})


////////...json

// let list = " ";
// let posts = " ";

fetch('https://jsonplaceholder.org/posts')
  .then(res => res.json())
  .then(data => {
    // console.log(data);

    const cardslist = document.getElementById('cardslist');
   const arr = data.slice(0, 6);
   console.log(arr);
   const cardHTML = arr.map((post) => {
      return `<div class="col-md-4">
      <div class="card">
        <img src="./images/SperidianYellowGeoBG.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.slug}</h5>
          <p class="card-text">${post.title}</p>
          <a href="#" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>`;

    }).join('');
    cardslist.innerHTML = cardHTML;
    // for(i=0;i=6;i++){

    // }

  }).catch((err)=>console.log(err))


