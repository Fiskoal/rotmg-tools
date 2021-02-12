let classesButton = document.getElementById("classes-button");
let classesDropdown = document.getElementById("class-dropdown");

classesButton.addEventListener("click", function(event){
  //let element = event.target;
  //console.log(element);
    let state = classesDropdown.getAttribute("data-state");
    if (state === "hidden") {
      classesDropdown.dataset.state = "visible";
      classesDropdown.classList.add("show");
      classesDropdown.classList.remove("hide");
      console.log("this is hidden to visible")
    } else {
      classesDropdown.dataset.state = "hidden";
      classesDropdown.classList.add("hide");
      classesDropdown.classList.remove("show");
      console.log("this is visible to hidden")
    }
  }
)

classesButton.addEventListener("blur", function() {
  classesDropdown.dataset.state = "hidden";
  classesDropdown.classList.add("hide");
  classesDropdown.classList.remove("show");
})