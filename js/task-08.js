const form = document.querySelector(".login-form");
const email = form.elements.email;
const password = form.elements.password;

const formSubmit = (event) => {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    console.clear();
    return;
  }

  const formData = new FormData(event.currentTarget);
  const user = {};
  formData.forEach((value, name) => {
    user[name] = value;
  });
  console.log(user);
  email.value = "";
  password.value = "";
};

form.addEventListener("submit", formSubmit);
