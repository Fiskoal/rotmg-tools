let classesButton = document.getElementById("classes-button");
let classesDropdown = document.getElementById("class-dropdown");
let output = document.getElementById("output-roll");
let buttonClassId = classesButton.getAttribute("class-id");

classesButton.textContent = buttonClassId;

// class declarations
let rogue = document.getElementById("rogue");
let rogueId = rogue.getAttribute(rogue);
let rogueStats = rogue.getAtt
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
let summoner = document.getElementById("summoner");
let summonerId = summoner.getAttribute(summoner);
let allClasses = [rogue, archer, wizard, priest, warrior, knight, paladin, assassin, necromancer, huntress, mystic, trickster, sorcerer, ninja, samurai, bard, summoner];
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
  return;
})

classesDropdown.addEventListener("blur", function () {
  classesDropdown.dataset.state = "hidden";
  classesDropdown.classList.add("hide");
  classesDropdown.classList.remove("show");
  return;
})

// end of "Select Class" button event listeners

// start of class option event listeners
rogue.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Rogue");
  classesButton.setAttribute(("life"), 625);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 29);
  classesButton.setAttribute(("spd"), 43);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 24);
  classesButton.setAttribute(("wis"), 29);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

archer.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Archer");
  classesButton.setAttribute(("life"), 605);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 31);
  classesButton.setAttribute(("dex"), 31);
  classesButton.setAttribute(("vit"), 21);
  classesButton.setAttribute(("wis"), 29);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

wizard.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Wizard");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 29);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 21);
  classesButton.setAttribute(("wis"), 31);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

priest.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Priest");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 31);
  classesButton.setAttribute(("spd"), 40);
  classesButton.setAttribute(("dex"), 31);
  classesButton.setAttribute(("vit"), 19);
  classesButton.setAttribute(("wis"), 43);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

warrior.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Warrior");
  classesButton.setAttribute(("life"), 675);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 43);
  classesButton.setAttribute(("spd"), 26);
  classesButton.setAttribute(("dex"), 29);
  classesButton.setAttribute(("vit"), 38);
  classesButton.setAttribute(("wis"), 29);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

knight.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Knight");
  classesButton.setAttribute(("life"), 675);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 40);
  classesButton.setAttribute(("att"), 43);
  classesButton.setAttribute(("spd"), 26);
  classesButton.setAttribute(("dex"), 29);
  classesButton.setAttribute(("vit"), 38);
  classesButton.setAttribute(("wis"), 29);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

paladin.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Paladin");
  classesButton.setAttribute(("life"), 675);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 30);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 31);
  classesButton.setAttribute(("dex"), 29);
  classesButton.setAttribute(("vit"), 38);
  classesButton.setAttribute(("wis"), 38);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

assassin.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Assassin");
  classesButton.setAttribute(("life"), 625);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 31);
  classesButton.setAttribute(("spd"), 43);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 24);
  classesButton.setAttribute(("wis"), 38);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

necromancer.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Necromancer");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 29);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 19);
  classesButton.setAttribute(("wis"), 40);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

huntress.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Huntress");
  classesButton.setAttribute(("life"), 605);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 31);
  classesButton.setAttribute(("dex"), 31);
  classesButton.setAttribute(("vit"), 21);
  classesButton.setAttribute(("wis"), 29);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

mystic.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Mystic");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 38);
  classesButton.setAttribute(("spd"), 31);
  classesButton.setAttribute(("dex"), 38);
  classesButton.setAttribute(("vit"), 24);
  classesButton.setAttribute(("wis"), 43);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

trickster.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Trickster");
  classesButton.setAttribute(("life"), 625);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 38);
  classesButton.setAttribute(("spd"), 40);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 21);
  classesButton.setAttribute(("wis"), 31);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

sorcerer.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Sorcerer");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 40);
  classesButton.setAttribute(("dex"), 31);
  classesButton.setAttribute(("vit"), 38);
  classesButton.setAttribute(("wis"), 43);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

ninja.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Ninja");
  classesButton.setAttribute(("life"), 625);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 43);
  classesButton.setAttribute(("spd"), 38);
  classesButton.setAttribute(("dex"), 40);
  classesButton.setAttribute(("vit"), 40);
  classesButton.setAttribute(("wis"), 40);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

samurai.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Samurai");
  classesButton.setAttribute(("life"), 625);
  classesButton.setAttribute(("mana"), 195);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 40);
  classesButton.setAttribute(("spd"), 29);
  classesButton.setAttribute(("dex"), 29);
  classesButton.setAttribute(("vit"), 40);
  classesButton.setAttribute(("wis"), 40);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

bard.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Bard");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 38);
  classesButton.setAttribute(("spd"), 29);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 31);
  classesButton.setAttribute(("wis"), 43);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

summoner.addEventListener("click", function () {
  classesButton.setAttribute(("class-id"), "Summoner");
  classesButton.setAttribute(("life"), 575);
  classesButton.setAttribute(("mana"), 290);
  classesButton.setAttribute(("def"), 25);
  classesButton.setAttribute(("att"), 38);
  classesButton.setAttribute(("spd"), 31);
  classesButton.setAttribute(("dex"), 43);
  classesButton.setAttribute(("vit"), 19);
  classesButton.setAttribute(("wis"), 43);
  classesButton.textContent = classesButton.getAttribute("class-id");
  classesDropdown.blur();
})

let rollButton = document.getElementById("check-roll");

rollButton.addEventListener("click", function () {
  let buttonLife = classesButton.getAttribute("life");
  let buttonMana = classesButton.getAttribute("mana");
  let buttonAtt = classesButton.getAttribute("att");
  let buttonSpd = classesButton.getAttribute("spd");
  let buttonDex = classesButton.getAttribute("dex");
  let buttonVit = classesButton.getAttribute("vit");
  let buttonWis = classesButton.getAttribute("wis");

  let lifeInput = document.getElementById("life-input").value;
  let manaInput = document.getElementById("mana-input").value;
  let attInput = document.getElementById("att-input").value;
  let spdInput = document.getElementById("spd-input").value;
  let dexInput = document.getElementById("dex-input").value;
  let vitInput = document.getElementById("vit-input").value;
  let wisInput = document.getElementById("wis-input").value;


  let lifeOutput = document.getElementById("life-output");
  let manaOutput = document.getElementById("mana-output");
  let attOutput = document.getElementById("att-output");
  let spdOutput = document.getElementById("spd-output");
  let dexOutput = document.getElementById("dex-output");
  let vitOutput = document.getElementById("vit-output");
  let wisOutput = document.getElementById("wis-output");

  if ((lifeInput - buttonLife) > 0) {
    lifeOutput.textContent = "+" + (lifeInput - buttonLife);
  } else {
    lifeOutput.textContent = (lifeInput - buttonLife);
  }

  if ((manaInput - buttonMana) > 0) {
    manaOutput.textContent = "+" + (manaInput - buttonMana);
  } else {
    manaOutput.textContent = (manaInput - buttonMana);
  }

  if ((attInput - buttonAtt) > 0) {
    attOutput.textContent = "+" + (attInput - buttonAtt);
  } else {
    attOutput.textContent = (attInput - buttonAtt);
  }

  if ((spdInput - buttonSpd) > 0) {
    spdOutput.textContent = "+" + (spdInput - buttonSpd);
  } else {
    spdOutput.textContent = (spdInput - buttonSpd);
  }

  if ((dexInput - buttonDex) > 0) {
    dexOutput.textContent = "+" + (dexInput - buttonDex);
  } else {
    dexOutput.textContent = (dexInput - buttonDex);
  }

  if ((vitInput - buttonVit) > 0) {
    vitOutput.textContent = "+" + (vitInput - buttonVit);
  } else {
    vitOutput.textContent = (vitInput - buttonVit);
  }

  if ((wisInput - buttonWis) > 0) {
    wisOutput.textContent = "+" + (wisInput - buttonWis);
  } else {
    wisOutput.textContent = (wisInput - buttonWis);
  }
})