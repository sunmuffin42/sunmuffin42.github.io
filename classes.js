let response = await fetch('All the classes.json')
let classes = await response.json()

let body = document.querySelector("body")
let classesList = ``
classes.classes.forEach(thisClass => {
    let className = thisClass.class
    let classContent = ``
    let infoTypes = ["instructor","grade","description"]
    infoTypes.forEach(info => {
        classContent += `<p>${info.toUpperCase()}: ${thisClass[info]}</p>`
    })
    let readingList = `<ul class="reading-list">`
    thisClass.readings.forEach(reading => {
        readingList += `<li>${JSON.stringify(reading)}</li>`
    })
    readingList += `</ul>`

    classesList += `<button class="collapsible"><h2>${className}</h2></button>
    <div class="content">
        <p>${classContent}</p>
        <p>${readingList}</p>
    </div>`
    
})

body.innerHTML += classesList

var coll = document.getElementsByClassName("collapsible");
console.log(coll)
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
