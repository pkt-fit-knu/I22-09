
var team = document.getElementById("team");
var about = document.getElementById("about");
var contacts = document.getElementById("contacts");
var main = document.getElementById("main");
var divs = document.getElementsByTagName("div");
function mainClick() {
  var team = document.getElementById("team");
  var about = document.getElementById("about");
  var contacts = document.getElementById("contacts");
  var main = document.getElementById("main");
  main.style.visibility = "visible";
  team.style.visibility = "hidden";
  about.style.visibility = "hidden";
  contacts.style.visibility = "hidden";
}
function teamClick() {
  var team = document.getElementById("team");
  var about = document.getElementById("about");
  var contacts = document.getElementById("contacts");
  var main = document.getElementById("main");
  main.style.visibility = "hidden";
  team.style.visibility = "visible";
  about.style.visibility = "hidden";
  contacts.style.visibility = "hidden";
}
function aboutClick() {
  var team = document.getElementById("team");
  var about = document.getElementById("about");
  var contacts = document.getElementById("contacts");
  var main = document.getElementById("main");
  main.style.visibility = "hidden";
  team.style.visibility = "hidden";
  about.style.visibility = "visible";
  contacts.style.visibility = "hidden";
}
function contactsClick() {
  var team = document.getElementById("team");
  var about = document.getElementById("about");
  var contacts = document.getElementById("contacts");
  var main = document.getElementById("main");
  main.style.visibility = "hidden";
  team.style.visibility = "hidden";
  about.style.visibility = "hidden";
  contacts.style.visibility = "visible";
}
