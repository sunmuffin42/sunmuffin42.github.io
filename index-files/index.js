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

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// }

document.body.insertAdjacentHTML("afterbegin",
`
<header class="row">
        <a class="side" href="./index.html"><div><img id="pic" src="./index-files/death_spiral_headshot.jpg" alt="Picture of Sunny, a dark-skinned person with a beard, wearing a purple scarf with International Phonetic Alphabet characters on it" srcset=""></div></a>
        <div class="main">
            <div id="name"><h1>Sunkulp Ananthanarayan</h1></div>
            <div id="email">Email: sunkulp dot ananth at gmail dot com</div>
            <nav>
                <a href="./index.html"><div class="navlink">Home</div></a>
                <a href="./interests.html"><div class="navlink">Interests</div></a>
                <a href="./cv.html"><div class="navlink">Curriculum Vitae (CV)</div></a>
                <a href="./resources.html"><div class="navlink">Resources</div></a>
            </nav>
        </div>
        <div class="right">
            <div class="construction" style="background-color: rgb(192, 79, 79);">
            <h2>Site under <a href="https://wikipedia.org/wiki/Construction_grammar" target="_blank">construction</a></h2>
            <div>Apologies for the lack of CSS and organizational structure. I wanted to push this <a href="http://wikipedia.org/wiki/Minimalist_program" target="_blank" rel="noopener noreferrer">minimal</a> site up so I could actually have it, but I haven't had the time yet to build in prettiness (which I acknowledge as very important!)</div>
            </div>
            <div class="links">
                <ul>
                    <li><a href="https://github.com/sunmuffin42" target="_blank">GitHub</a></li>
                    <li><a href="https://twitter.com/sunmuffin42" target="_blank">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/sunny-ananthanarayan/" target="_blank">LinkedIn</a></li>
                    <li><a href="http://scholar.google.com/citations?user=DdZtCCYAAAAJ" target="_blank">Google Scholar</a></li>
                    <li><a href="https://prototumblinguist.tumblr.com" target="_blank">Ling tumblr</a></li>
                </ul>
            </div>
            </div>
        </div>
    </header>
`

)