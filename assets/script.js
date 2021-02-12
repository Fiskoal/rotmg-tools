let classesButton = document.getElementById("classes-button");
let classesDropdown = document.getElementById("class-dropdown");
let buttonClassId = classesButton.getAttribute("class-id");

classesButton.textContent = buttonClassId;

// class declarations
let rogue = document.getElementById("rogue");
let rogueId = rogue.getAttribute(rogue);
let archer = document.getElementById("archer")
let archerId = archer.getAttribute(archer);
let wizard = document.getElementById("wizard");
let wizardId = wizard.getAttribute(wizard);
let priest = document.getElementById("priest");
let priestId = priest.getAttribute(priest);
let warrior = document.getElementById("warrior");
let warriorId = warrior.getAttribute(warrior);
let knight = document.getElementById("knight");
let knightId = knight.getAttribute(knight);
let paladin = document.getElementById("paladin");
let paladinId = paladin.getAttribute(paladin);
let assassin = document.getElementById("assassin");
let assassinId = assassin.getAttribute(assassin);
let necromancer = document.getElementById("necromancer");
let necromancerId = necromancer.getAttribute(necromancer);
let huntress = document.getElementById("huntress");
let huntressId = huntress.getAttribute(huntress);
let mystic = document.getElementById("mystic");
let mysticId = mystic.getAttribute(mystic);
let trickster = document.getElementById("trickster");
let tricksterId = trickster.getAttribute(trickster);
let sorcerer = document.getElementById("sorcerer");
let sorcererId = sorcerer.getAttribute(sorcerer);
let ninja = document.getElementById("ninja");
let ninjaId = ninja.getAttribute(ninja);
let samurai = document.getElementById("samurai");
let samuraiId = samurai.getAttribute(samurai);
let bard = document.getElementById("bard");
let bardId = bard.getAttribute(bard);
let allClasses = [rogue, archer, wizard, priest, warrior, knight, paladin, assassin, necromancer, huntress, mystic, trickster, sorcerer, ninja, samurai, bard];
// end of class declarations

// "Select Class" button event listeners
classesButton.addEventListener("click", function (event) {
  let state = classesDropdown.getAttribute
    ("data-state");
  if (state === "hidden") {
    classesDropdown.dataset.state = "visible";
    classesDropdown.classList.add("show");
    classesDropdown.classList.remove("hide");
    classesDropdown.focus();
  } else {
    classesDropdown.dataset.state = "hidden";
    classesDropdown.classList.add("hide");
    classesDropdown.classList.remove("show");
  }
}
)

classesDropdown.addEventListener("blur", function () {
  classesDropdown.dataset.state = "hidden";
  classesDropdown.classList.add("hide");
  classesDropdown.classList.remove("show");
})
// end of "Select Class" button event listeners

// start of class option event listeners
rogue.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Rogue");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

archer.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Archer");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

wizard.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Wizard");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

priest.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Priest");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

warrior.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Warrior");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

knight.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Knight");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

paladin.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Paladin");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

assassin.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Assassin");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

necromancer.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Necromancer");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

huntress.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Huntress");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

mystic.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Mystic");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

trickster.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Trickster");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

sorcerer.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Sorcerer");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

ninja.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Ninja");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

samurai.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Samurai");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

bard.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Bard");
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})
// end of class option event listeners