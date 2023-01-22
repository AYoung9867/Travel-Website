//carousel

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