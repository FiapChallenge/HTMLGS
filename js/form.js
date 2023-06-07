const form = document.querySelector('#message-form');
const formWrapper = document.querySelector('#form-wrapper');
const submitBtn = document.querySelector('.submit-btn');

function validateForm() {
  var fname = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var privacy = document.getElementById("privacy").checked;

  if (!fname || !email || !phone || !interest || !subject || !message || !source || !privacy) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }
  return true;
}

const inputs = document.querySelectorAll("input, select, textarea");

inputs.forEach(input => {
  input.addEventListener(
    "invalid",
    () => {
      input.classList.add("error");
      input.addEventListener(
        "input",
        () => {
          if (input.validity.valid) {
            input.classList.remove("error");
          }
        },
        false
      );
    },
    false
  );
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateForm()) {
    formWrapper.style.display = "flex";
    formWrapper.style.flexDirection = "column";
    formWrapper.style.justifyContent = "center";
    formWrapper.style.alignItems = "center";
    text = "<h2>Mensagem enviada com sucesso!</h2><p>Fique tranquilo, nossa equipe se empenhará para retornar o mais rápido possível.</p><p>Seu tempo é precioso para nós!</p>";
    formWrapper.innerHTML = text;
  }
});