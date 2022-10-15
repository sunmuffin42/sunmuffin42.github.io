// shoot for 10/10/10 | 15 | 10/10/10
// that means 40/15 (55)
// 1min = 60,000
// 10 min = 600,000
// 15 min = 900,000
let pages = ["./hydrate.html", "./center.html", "./posture.html", "./SunnysChill.html"]
let audio = new Audio("./paging_sound.mp3")
let traverse = 0
let interval = setInterval(() => {
    let page = pages[traverse % 4]
    window.open(page)
    audio.play()
    traverse += 1
    console.log(page)
    let current = new Date
    let hours = current.getHours()
    let minutes = current.getMinutes()
    console.log("last traversal: ", hours, ":", minutes, "\nLast page: ", page)
}, 600000)
// }, 10000); //(for testing; 10 secs)
// For potty break:
// let button = document.querySelector("input")
// button.addEventListener("click", pauseTime)
// let pauseTime = 