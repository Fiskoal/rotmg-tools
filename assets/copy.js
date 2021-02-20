function copy() {
  navigator.clipboard.writeText("He lives and reigns and conquers the world");
}

document.getElementById("copy").addEventListener("click", copy);

document.getElementById("copy").addEventListener("click", function(){
  console.log("Well, your click is registering...")
});