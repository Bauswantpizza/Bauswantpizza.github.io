var items = [
{name: 'apple', value: 4},
  {name: 'orange', value:3},
{name: 'elephant', value: 650}
];
var first = document.querySelector("#first");
var second = document.querySelector("#second");
var firstDiv = document.querySelector("#first");
var secondDiv = document.querySelector("#second");

first.addeventListener('click', function(){
  if(firstDiv.value < secondDiv.value) {
    count ++;
  } else {
    console.log("NOPE");
  }
});
second.addeventListener('click', function(){
  if(firstDiv.value > secondDiv.value) {
    count ++;
  } else {
    console.log("NOPE");
  }
});
function setItems() {
  function rand(first) {
    var i = Math.floor(Math.random()*(item.length));
    if(i == first){
      rand(first);
    }else{
      return i;
    }
  }
  firstDiv.value = items[i].vlaue;
  firstDiv.innerText = items[i].name;
  var j = rand(i);
  secondDiv.value = items[j].value;
  secondDiv.innerText = items[j].name;
}
setItems();
