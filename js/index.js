import { render } from './render.js'

let date  = new Date();

render(date);

document.getElementById("next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  render(date);
});

document.getElementById("previous").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  render(date);
});