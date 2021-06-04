const refs = {
  input: document.querySelector("#controls > input"),
  render: document.querySelector(`[data-action="render"]`),
  destroy: document.querySelector(`[data-action="destroy"]`),
  boxes: document.querySelector("#boxes"),
};

refs.render.addEventListener("click", createBoxes);
refs.destroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  let size = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    size += 10;
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;

    fragment.appendChild(div);
  }
  refs.boxes.appendChild(fragment);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}
