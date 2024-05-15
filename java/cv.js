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
  console.log(BIRTHDAY)
var today = Date.now();
var olday = new Date("13 May 1978");
document.write(dateDiff(olday, today));
document.write(" ans");

let currdate = new Date;
let curryear = currdate.getFullYear();
let currmonth = currdate.getMonth() + 1;
let currday = currdate.getDate();
let moment = currmonth + "/" + currday;

const BIRTHYEAR = 1978;
const BIRTHDAY = 6 + "/" + 5;

let age = curryear - BIRTHYEAR;
if(moment < BIRTHDAY){
  age--;
};

let agespot = document.getElementById("age");
agespot.innerHTML = age + "ans";

