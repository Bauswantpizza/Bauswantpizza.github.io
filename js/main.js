
var favsongs = [
  {
  order: 1,
  song: "Radio Silence",
  artist: "James Blake"
},
  {
  order: 2,
  song: "Weak",
  artist:"AJR"
  }
];
console.log(favsongs);
var tbody = document.querySelector("tbody");
for(var i in favsongs) {

var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innertext = favsongs[i].order;
var td2 = document.createElement("td");
var td3 = document.createElement("td");
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
}
console.log(tr);
td1.innerText = 1;
console.log(td);
console.log(tbody);
