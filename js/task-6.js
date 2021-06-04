const input = document.querySelector("#validation-input");

input.addEventListener("input", isInputValid);
input.addEventListener("blur", onInputBlur);

function isInputValid(event) {
  const currentLength = event.currentTarget.value.length;
  const dataLength = Number(input.dataset.length);
  if (currentLength === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (currentLength !== dataLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
function onInputBlur() {
  if (currentLength === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  if (currentLength !== dataLength) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
