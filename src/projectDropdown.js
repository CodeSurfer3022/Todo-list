import { projectRender } from './projectDisplay';

function dropdown() {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown');

  // The dropdown has options and dropdown content
  dropdown.appendChild(dropbtn());
  return dropdown;
}

function dropbtn() {
  const dropbtn = document.createElement('p');
  dropbtn.classList.add('dropbtn');
  dropbtn.textContent = '...';
  dropbtn.addEventListener('click', projectRender.renderDropdown);

  return dropbtn;
}

export default dropdown;
