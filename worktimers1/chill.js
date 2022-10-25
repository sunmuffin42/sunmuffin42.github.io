let minute = 60000
let played = false
let current_time = 600000
// let current_time = 6000 (testing; 6 seconds)
let decrement = setInterval(() => {
    current_time = current_time - 1000
    document.getElementById("timer").innerHTML = Math.floor(current_time / minute) + " min " + (current_time % minute) / 1000 + " sec"
    if (current_time == 0) {
        let audio = new Audio("./paging_sound.mp3")
        audio.play()
        played = true
    }
}, 1000)