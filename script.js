let body = document.body;
let menuIconEl =document.getElementById('menu-icon');
let topMenuEl = document.getElementById('nav')
let closeMenuEl = document.getElementById('close')

menuIconEl.addEventListener('click', () => {
    topMenuEl.style.top = '0'
})
closeMenuEl.addEventListener('click', () => {
    topMenuEl.style.top = '-100%'
});
function closeMenu(){
  topMenuEl.style.top ='-100%'
}


// Variables to store timer data
let startTime; // to store the start time
let timerInterval; // to store the interval ID

// Function to start the timer
function startTimer(durationInSeconds) {
  // Calculate the end time 
  const endTime = new Date().getTime() + durationInSeconds * 1000;

  // Update the timer every second
  timerInterval = setInterval(updateTimer, 1000);

  // Store the start time
  startTime = new Date().getTime();

  // updateTimer to display the correct time
  updateTimer();

  // Function to update the timer display
  function updateTimer() {
    const currentTime = new Date().getTime();
    const remainingTime = endTime - currentTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      document.getElementById("timer").textContent = "00:00";
    } else {
        const hours = Math.floor((remainingTime / 1000 / 3600) % 24); // Calculate hours
        const minutes = Math.floor((remainingTime / 1000 / 60) % 60); // Calculate minutes
        const seconds = Math.floor((remainingTime / 1000) % 60); // Calculate seconds
  

      // Format the time as "hh:mm:ss"
      const formattedTime = `<p>${hours.toString().padStart(2, '0')} <sub>H</sub>  ${minutes.toString().padStart(2, '0')} <sub>M</sub> ${seconds.toString().padStart(2, '0')}<sub>S</sub></p>`
      document.querySelector(".timer").innerHTML = formattedTime;
    }
  }
}

// To start the timer with a duration of 45 hours:
startTimer(45 * 3600 + 30 * 60 + 15);


// open the register form
let theBtn = document.querySelectorAll('#open')
theBtn.forEach(me => me.addEventListener('click', function() {
  
  let filePath = 'register.html';
  
  window.location.href = filePath;
}))

let more = document.querySelector('.js_read_more_btn')
let moreList = document.querySelectorAll('.more')

more.addEventListener('click', () => {
  if (more.innerHTML === 'Read More') {
    moreList.forEach((men) => {
      men.style.display = 'flex'

      more.innerHTML = 'Read Less'
    }) 
  } else {
    moreList.forEach((men) => {
    men.style.display = 'none'

    more.innerHTML = 'Read More'
    })
    }
})