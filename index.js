// function addingEventListener() {
//     const input = document.getElementById('input')

// function clickAlert() {
//   alert('I was clicked!');

// }

// input.addEventListener('click', clickAlert); 
  
// }
//  function addEventListener() {
// document.getElementById("#button").addingEventListener
// ("click",alertMe)
// function alertMe(){
// return alert(" I was clicked!")
// }
//  }
// function addEventListener(){
//   console.log(document.getElementsById("input"))
// }
// document.querySelector("#input").addEventListener("click",() => alert("Hi I was clicked"))

function addingEventListener() {
  alert('I was clicked');
  const input = document.getElementById("button");
  input.addEventListener('click', addingEventListener);
}