const startingMinute = 1
let time = startingMinute * 60
const countDownEl = document.getElementById("countdown")

setInterval(updateCountdown, 1000)

function updateCountdown() {
    const minutes = Math.floor(time/60)
    let seconds = time % 60

    seconds = seconds < 10 ? '0' + seconds : seconds

    countDownEl.innerHTML = `${minutes}:${seconds}`
    time--
    time = time < 0 ? 0 : time  
    
}