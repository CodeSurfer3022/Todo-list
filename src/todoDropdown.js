import {todoRender} from './todoDisplay';
import optionHandler from './todoDropdownOptionsHandler';

function dropdown() {
    let dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    // The dropdown has options and dropdown content
    dropdown.appendChild(dropbtn())

    return dropdown;
}

function dropbtn() {
    let dropbtn = document.createElement('p');
    dropbtn.classList.add('dropbtn');
    dropbtn.textContent = '...';
    dropbtn.addEventListener('click', todoRender.renderDropdown);

    return dropbtn;
}

export default dropdown;