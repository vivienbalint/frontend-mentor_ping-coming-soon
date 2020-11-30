const form = document.getElementById("form");
const email = document.getElementById("email");
const errorText = document.getElementById("error-text");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let value = email.value;
  e.preventDefault();
  validateEmail(value);
});

function validateEmail(email) {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    form.classList.remove("error");
    errorText.classList.add("hide");
    form.submit();
  } else {
    form.classList.add("error");
    errorText.classList.remove("hide");
  }
}
