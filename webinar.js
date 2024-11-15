const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const webinarDate = document.querySelector('.webinarDate');
const webinarClock = document.querySelector('.webinarClock');

let webinarHours = [11, 21]; // Array of daily webinar hours
let firstWebinarDate = new Date('2025-01-10T11:00:00'); // Initial webinar date and time
let currentWebinarDate = new Date(firstWebinarDate); // Track the next webinar date

function getNextWebinarDate(now) {
    let nextWebinarDate = new Date(now);

    // Loop through webinar hours to find the next available time
    for (let hour of webinarHours) {
        nextWebinarDate.setHours(hour, 0, 0, 0); // Set hour to each webinar time
        if (nextWebinarDate > now) return nextWebinarDate; // Return the first future time today
    }

    // If no more webinars today, set the next webinar to the first hour tomorrow
    nextWebinarDate.setDate(nextWebinarDate.getDate() + 1); // Move to the next day
    nextWebinarDate.setHours(webinarHours[0], 0, 0, 0); // Set to first webinar hour
    return nextWebinarDate;
}

function updateCountdown() {
    let now = new Date();
    
    // If the current webinar date has passed, calculate the next one
    if (now >= currentWebinarDate) {
        currentWebinarDate = getNextWebinarDate(now);
        
        // Update the HTML elements with the new date and time
        webinarDate.innerHTML = currentWebinarDate.toLocaleDateString();
        webinarClock.innerHTML = currentWebinarDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Calculate the time difference
    let timeDiff = currentWebinarDate - now;
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the countdown
    day.innerHTML = days.toString().padStart(2, '0');
    hour.innerHTML = hours.toString().padStart(2, '0');
    minute.innerHTML = minutes.toString().padStart(2, '0');
    second.innerHTML = seconds.toString().padStart(2, '0');
}

// Update every second
setInterval(updateCountdown, 1000);
