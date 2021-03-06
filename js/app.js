// Menu

let unorderedList = document.getElementById("unordered-list");
let containerCount = document.getElementsByClassName("landing_page_container")
.length;

for (i = 1; i < containerCount + 1; i++) {
	let item = "#section" + i + "-section_title_title";
	let itemValue = document.querySelector(item);
	let itemText = itemValue.textContent;
	let newLine = document.createElement("li");
	let lineText = document.createTextNode(itemText);
	let listItem = "sample-nav-" + i;
	newLine.setAttribute("id", listItem);
	newLine.setAttribute("class", "nav-list-item");
	newLine.appendChild(lineText);
	unorderedList.appendChild(newLine);

	let itemTarget = document.getElementById("section" + i);
	listTarget = document.getElementById(listItem);
	let buttonName = "section" + i + "-button";
	let buttonToAdd = document.getElementById(buttonName);

	// Adds button when scrools into view

	listTarget.addEventListener("click", function() {
		itemTarget.scrollIntoView ({
			behavior: 'smooth'
		})
		buttonToAdd.innerHTML = "<button class='section-button' onclick='goTop()'> Return to Start</button>";

	});
}
// ?HElper
const scrollToTop = () => {
	const scrolling = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrolling > 0) {
		window.requestAnimationFrame(scrollTop);
		window.scrollTo(0, scrolling - scrolling / 50);
	}
};

// Event on button click

function goToTop() {
scrollToTop();

  for (i = 1; i < containerCount + 1; i++) {
    let buttonToDelete = document.getElementById("section" + i + "-button");
    buttonToDelete.innerHTML = "";
  }
}

//Checks if section is in view and adds active-class with moving background and color change
function checkIfSectionInView() {
  let isInViewport = function(elem) {
    let bounding = elem.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < containerCount + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);

    window.addEventListener(
      "scroll",
      function(event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("ur-active-class");
        } else {
          sectionInFullView.classList.remove("ur-active-class");
        }
      },
      false
    );
  }
}

//Add sticky header as per review (Used tutorial here: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header");
console.log(navbar)

// Get the offset position of the navbar
var sticky = header.offsetTop;
console.log(sticky)

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
checkIfSectionInView();