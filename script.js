// Define data for each timeframe
const data = {
    daily: {
      work: { hours: "5hrs", last: "Last Day - 7hrs" },
      play: { hours: "1hr", last: "Last Day - 2hrs" },
      study: { hours: "0hrs", last: "Last Day - 1hr" },
      exercise: { hours: "1hr", last: "Last Day - 1hr" },
      social: { hours: "3hrs", last: "Last Day - 5hrs" },
      selfCare: { hours: "1hr", last: "Last Day - 1hr" },
    },
    weekly: {
      work: { hours: "32hrs", last: "Last Week - 36hrs" },
      play: { hours: "10hrs", last: "Last Week - 8hrs" },
      study: { hours: "4hrs", last: "Last Week - 7hrs" },
      exercise: { hours: "4hrs", last: "Last Week - 5hrs" },
      social: { hours: "5hrs", last: "Last Week - 10hrs" },
      selfCare: { hours: "2hrs", last: "Last Week - 2hrs" },
    },
    monthly: {
      work: { hours: "103hrs", last: "Last Month - 128hrs" },
      play: { hours: "23hrs", last: "Last Month - 29hrs" },
      study: { hours: "13hrs", last: "Last Month - 19hrs" },
      exercise: { hours: "11hrs", last: "Last Month - 18hrs" },
      social: { hours: "21hrs", last: "Last Month - 23hrs" },
      selfCare: { hours: "7hrs", last: "Last Month - 8hrs" },
    },
  };
  
  // Update timeframe data
  function updateTimeframe(timeframe) {
    // Remove 'active' class from all buttons
    document.querySelectorAll(".time-button").forEach((button) => {
      button.classList.remove("active");
    });
  
    // Add 'active' class to the clicked button
    document
      .querySelector(`.time-button[onclick="updateTimeframe('${timeframe}')"]`)
      .classList.add("active");
  
    // Update stats cards with the selected timeframe's data
    document.getElementById("work-hours").textContent = data[timeframe].work.hours;
    document.getElementById("work-last").textContent = data[timeframe].work.last;
  
    document.getElementById("play-hours").textContent = data[timeframe].play.hours;
    document.getElementById("play-last").textContent = data[timeframe].play.last;
  
    document.getElementById("study-hours").textContent = data[timeframe].study.hours;
    document.getElementById("study-last").textContent = data[timeframe].study.last;
  
    document.getElementById("exercise-hours").textContent = data[timeframe].exercise.hours;
    document.getElementById("exercise-last").textContent = data[timeframe].exercise.last;
  
    document.getElementById("social-hours").textContent = data[timeframe].social.hours;
    document.getElementById("social-last").textContent = data[timeframe].social.last;
  
    document.getElementById("self-care-hours").textContent = data[timeframe].selfCare.hours;
    document.getElementById("self-care-last").textContent = data[timeframe].selfCare.last;
  }
  updateTimeframe("daily");
  