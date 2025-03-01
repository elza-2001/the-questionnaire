const form = document.querySelector(".form");
const nameInput = document.querySelector("#name");
const secondNameInput = document.querySelector("#secondName");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const checkboxInput = document.querySelector("#agree");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const secondName = secondNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const checkbox = checkboxInput.checked;

  fetch('https://polinashneider.space/user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: elza-2001'
    },
    body: JSON.stringify({
      "name": name,
      "secondName": secondName,
      "phone": phone,
      "email": email,
      "agree": checkbox
    }),
  })
  .then((result) => {
    return result.json()
  })
  .then((data) => {
    form.reset();
    alert('Данные успешно отправлены');
  })
  .catch((error) => {
    alert('Произошла ошибка при отправке данных');
  })
});
