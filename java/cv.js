let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.menu>li');
let birthday = document.getElementById('birthday')

window.onscroll = function() {
    var current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id"); 
      }
    });
  
    navLinks.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
  console.log(birthday)
var today = Date.now();
var olday = new Date("5 June 1978");
document.write(dateDiff(olday, today));
document.write(" ans");

