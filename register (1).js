const form = document.querySelector("#registerForm");
const nameInput = document.querySelector("#name");
const passwordInput = document.querySelector("#password");
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const password = passwordInput.value;

  if (name === "") {
    msg.textContent = "اكتبي اسمك";
    msg.style.color = "red";
  } else if (password.length < 6) {
    msg.textContent = "كلمة السر لازم تكون ٦ حروف على الأقل";
    msg.style.color = "red";
  } else {
    msg.textContent = "أهلاً " + name + "! تم التسجيل بنجاح";
    msg.style.color = "green";
  }
});