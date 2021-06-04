const navUl = Array.from(document.querySelectorAll("ul#categories>li.item"));
console.log(`В списке ${navUl.length} категории`);

const ul = Array.from(document.querySelector("#categories").children);
for (let li of ul) {
  let category = li.firstElementChild.textContent;
  let length = li.lastElementChild.children.length;
  console.log(`Категория: ${category} \nКоличество элементов: ${length}`);
}
