const searchElementByType = (type) => {
  let el;
  for (const element of elements) {
    if (element.type === type) {
      el = element;
      return el;
    }
  }
  return undefined;
};

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

const form = document.querySelector(".login-form");
const elements = document.querySelector(".login-form").elements;
const email = searchElementByType("email");
const password = searchElementByType("password");

form.addEventListener("submit", formSubmit);
