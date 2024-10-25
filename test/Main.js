////////... contact form 
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

//////////... Task manager

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


////////////...json
// fetch('https://jsonplaceholder.org/posts')
//   .then(res => res.json())
//   .then(data => {
//     // console.log(data);

//     const cardslist = document.getElementById('cardslist');
//    const arr = data.slice(0, 6);
//    console.log(arr);
//    const cardHTML = arr.map((post) => {
//       return `<div class="col-md-4">
//       <div class="card">
//         <img src="./images/SperidianYellowGeoBG.jpg" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${post.slug}</h5>
//           <p class="card-text">${post.title}</p>
//           <a href="#" class="btn btn-primary">Read More</a>
//         </div>
//       </div>
//     </div>`;

//     }).join('');
//     cardslist.innerHTML = cardHTML;
//     // for(i=0;i=6;i++){

//     // }

//   }).catch((err)=>console.log(err))

document.addEventListener('DOMContentLoaded', fetchData());


async function fetchData() {
  try {
    const res = await fetch('https://jsonplaceholder.org/posts')
    const data = await res.json();
    // console.log(res);
    // console.log(data);

    const cardslist = document.getElementById('cardslist');
    const arr = data.slice(0, 6);
    // const arr = data.filter((p,i) => i < 6);
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

  } catch (err) {
    console.error('Error fetching data:', err);
  }
}



/////////////...stopwatch

let hours = 0, minutes = 0, seconds = 0;
let running = false;
let timer;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function updateDisplay() {
  display.innerText = `${hours}:${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
  if (running == false) {
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
  running = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  running = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  running = false;
  updateDisplay();
});

////////////... weather ...
var apiKey = "6f98a2d1dc8f4187bbc51239242510";

// https://api.weatherapi.com/v1/current.json?key=6f98a2d1dc8f4187bbc51239242510&q=multan



var cityinput = document.getElementById("cityinput");

cityinput.addEventListener("keyup", () => {
  var cityname = cityinput.value;
  fetchWeather(cityname);
});
var weatherDiv = document.getElementById("weatherdiv");

async function fetchWeather(city) {
  console.log(city);
  try {
    weatherDiv.innerHTML = "";
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await res.json();
    console.log(data);


    // if (data) {

      // if (data.location.name.toLowerCase() == city.toLowerCase()) {
      let p = document.createElement("p");
      let strong = document.createElement("strong");
      weatherDiv.appendChild(p);
      p.appendChild(strong);
      strong.innerText = `${data.location.name}, ${data.location.region}, ${data.location.country}`

      let p2 = document.createElement("p");
      p2.innerText = "Date & Time: ";
      let strong2 = document.createElement("strong");
      strong2.innerText = `${data.location.localtime}`;
      p2.appendChild(strong2);
      weatherDiv.appendChild(p2);

      let p3 = document.createElement("p");
      p3.innerText = "Condition: ";
      let strong3 = document.createElement("strong");
      strong3.innerText = `${data.current.condition.text}`;
      p3.appendChild(strong3);
      weatherDiv.appendChild(p3);

      let p4 = document.createElement("p");
      p4.innerText = "Temperature: ";
      let strong4 = document.createElement("strong");
      strong4.innerText = `${data.current.temp_c}°C`;
      p4.appendChild(strong4);
      weatherDiv.appendChild(p4);

      let img = document.createElement("img");
      img.setAttribute("src", `https:${data.current.condition.icon}`)
      img.setAttribute("alt", "Weather Icon")
      weatherDiv.appendChild(img);
      // }

    // } else {
    //   let weathernot = document.createElement("weathernot");
    //   let span = document.createElement("span");
    //   weathernot.appendChild(span);
    // }



    //same this
    //   <p><strong>Location:</strong> ${data.location.name}, ${data.location.region}, ${data.location.country}</p>
    //   <p><strong>Local Time:</strong> ${data.location.localtime}</p>
    //   <p><strong>Condition:</strong> ${data.current.condition.text}</p>
    //   <img src="https:${data.current.condition.icon}" alt="Weather Icon"/>



  } catch (error) {
    console.log(error)
  }
}



// -------------- jquery

// $("#jhlo").css('color',"red");
// $("#jhlo","#jspan").css('color',"red");
