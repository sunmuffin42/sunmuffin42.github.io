// links = document.getElementsByTagName("a")
// for (link of links) {
//     link.target = "_blank"
// }

// // links.forEach(link => {
// //     link.target = "_blank"
// // })
// // for (link of links) {
// //     link.target = "_blank"
// // }

// for (link of links) {link.target = "_blank"}


// for collapsible
var coll = document.getElementsByClassName("collapsible");
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