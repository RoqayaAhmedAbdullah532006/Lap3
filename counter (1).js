const countEl = document.querySelector("#count");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
let count = 0;

 function render() {
  countEl.textContent = count;
  countEl.classList.toggle("negative", count < 0);
}

plusBtn.addEventListener("click", () => {
  count++;
  render();
});
minusBtn.addEventListener("click", () => {
  count--;
  render();
});
resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});