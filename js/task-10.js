// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const button =document.querySelector(".js-button");
const container =document.querySelector(".js-container");

button.addEventListener("click", onclick);
step=0
function onclick(evt) {
  step+=5px;
  container.style.marginLeft=`${step}`px;
  console.log(evt.currentTarget);
}
