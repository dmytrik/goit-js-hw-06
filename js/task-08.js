const form = document.querySelector(".login-form");
const email = form.email;
const password = form.password;

const formSubmit = (event) => {
  event.preventDefault();
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    console.clear();
    return;
  }
  const user = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(user);
};

form.addEventListener("submit", formSubmit);
