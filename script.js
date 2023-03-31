//carousel

setInterval(slideChange,5000);

function slideChange() {
	const slides = document.querySelector("[data-slides]")
	const activeSlide = slides.querySelector("[data-active]")
	let newIndex = [...slides.children].indexOf(activeSlide) + 1
	if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})



//sorting newest to oldest

function sortChildrenDivsById(parentId) {
    var parent = document.getElementById(parentId);
    var children = parent.getElementsByTagName("div");
    var ids = [], obj, i, len;
    for (i = 0, len = children.length; i < len; i++) {
        obj = {};
        obj.element = children[i];
        obj.idNum = parseInt(children[i].id.replace(/[^\d]/g, ""), 10);
        ids.push(obj);
    }
    ids.sort(function(a, b) {return(a.idNum - b.idNum);});
     for (i = 0; i < ids.length; i++) {
         parent.appendChild(ids[i].element);
     }
}

function altSortChildrenDivsById(parentId) {
    var parent = document.getElementById(parentId);
    var children = parent.getElementsByTagName("div");
    var ids = [], obj, i, len;
    for (i = 0, len = children.length; i < len; i++) {
        obj = {};
        obj.element = children[i];
        obj.idNum = parseInt(children[i].id.replace(/[^\d]/g, ""), 10);
        ids.push(obj);
    }
    ids.sort(function(a, b) {return(b.idNum - a.idNum);});
     for (i = 0; i < ids.length; i++) {
         parent.appendChild(ids[i].element);
     }
}

//Disappearing Sidebar

function sideBarToggle() {
	var element = document.getElementById("sidebar-toggle");
	element.classList.toggle("closed");
}

var sidebarButton = document.getElementById("sidebar-btn");
sidebarButton.addEventListener("click", sideBarToggle);

var monthButtons = document.getElementsByClassName("month-button");
monthButtons.onclick = sideBarToggle;


//Dropdowns

function dropFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}


function dropFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}


function dropFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

function dropFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}


function dropFunction5() {
  document.getElementById("myDropdown5").classList.toggle("show");
}


function dropFunction6() {
  document.getElementById("myDropdown6").classList.toggle("show");
}


function dropFunction7() {
  document.getElementById("myDropdown7").classList.toggle("show");
}


function dropFunction8() {
  document.getElementById("myDropdown8").classList.toggle("show");
}

function dropFunction9() {
  document.getElementById("myDropdown9").classList.toggle("show");
}

function dropFunction10() {
  document.getElementById("myDropdown10").classList.toggle("show");
}

function dropFunction11() {
  document.getElementById("myDropdown11").classList.toggle("show");
}

function dropFunction12() {
  document.getElementById("myDropdown12").classList.toggle("show");
}

function dropFunction13() {
  document.getElementById("myDropdown13").classList.toggle("show");
}

function dropFunction14() {
  document.getElementById("myDropdown14").classList.toggle("show");
}

function dropFunction15() {
  document.getElementById("myDropdown15").classList.toggle("show");
}

function dropFunction16() {
  document.getElementById("myDropdown16").classList.toggle("show");
}

function dropFunction17() {
  document.getElementById("myDropdown17").classList.toggle("show");
}

function dropFunction18() {
  document.getElementById("myDropdown18").classList.toggle("show");
}

function dropFunction19() {
  document.getElementById("myDropdown19").classList.toggle("show");
}

function dropFunction20() {
  document.getElementById("myDropdown20").classList.toggle("show");
}

function dropFunction21() {
  document.getElementById("myDropdown21").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

