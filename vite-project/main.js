import "./style.css";
import { food } from "./array";
import { selectors } from "./DOMselectors";

function injector(item) {
  return `
  <div class="food">
    <h4>${item.name}</h4>
    <img src="${item.image}">
    <h5> $${item.price}</h5>
  </div>`;
}
const sushi = food.filter((foo) => foo.type.includes("sushi"));
const not_sushi = food.filter((foo) => foo.type.includes("not_sushi"));

food.forEach((foo) =>
  selectors.foods.insertAdjacentHTML("afterbegin", injector(foo))
);

selectors.sushi.addEventListener("click", function () {
  selectors.foods.innerHTML = "";
  sushi.forEach((sush) =>
    selectors.foods.insertAdjacentHTML("afterbegin", injector(sush))
  );
});

selectors.not_sushi.addEventListener("click", function () {
  selectors.foods.innerHTML = "";
  not_sushi.forEach((sush) =>
    selectors.foods.insertAdjacentHTML("afterbegin", injector(sush))
  );
});

selectors.all.addEventListener("click", function () {
  selectors.foods.innerHTML = "";
  food.forEach((sush) =>
    selectors.foods.insertAdjacentHTML("afterbegin", injector(sush))
  );
});

selectors.dark.addEventListener("click", function () {
  document.body.className = "dark";
});

selectors.light.addEventListener("click", function () {
  document.body.className = "light";
});
