import { todoRender } from "./todoDisplay";
import optionHandler from "./todoDropdownOptionsHandler";

function dropdown() {
  const dropdown = document.createElement("div");
  dropdown.classList.add("dropdown");

  // The dropdown has options and dropdown content
  dropdown.appendChild(dropbtn());

  return dropdown;
}

function dropbtn() {
  const dropbtn = document.createElement("p");
  dropbtn.classList.add("dropbtn");
  dropbtn.textContent = "...";
  dropbtn.addEventListener("click", todoRender.renderDropdown);

  return dropbtn;
}

export default dropdown;
