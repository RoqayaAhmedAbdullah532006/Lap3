const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");

function addTask() {
  const text = input.value.trim();

  if (text === "") return; 

  const li = document.createElement("li");
  li.textContent = text;

  const del = document.createElement("button");
  del.textContent = "حذف";
  del.addEventListener("click", () => {
    li.remove();
  });
li.addEventListener("click", () => {
  li.classList.toggle("done");
});
  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});