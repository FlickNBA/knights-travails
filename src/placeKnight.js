export const placeKnight = (tile) => {
  let knight = document.createElement("div");
  knight.id = "knight";
  knight.innerHTML = "K";
  document.querySelector(`#${tile}`).appendChild(knight);
};
