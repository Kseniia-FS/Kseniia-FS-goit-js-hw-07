const input = document.querySelector("#validation-input");

input.addEventListener("input", isInputValid);

function isInputValid(event) {
  const currentLength = event.currentTarget.value.length;
  const dataLength = Number(input.dataset.length);

  function updateClass(addClass, remClass) {
    input.classList.remove(remClass);
    input.classList.add(addClass);
  }
  if (currentLength === dataLength) {
    updateClass("valid", "invalid");
  }
  if (currentLength !== dataLength) {
    updateClass("invalid", "valid");
  }
}
