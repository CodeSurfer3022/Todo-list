import {todoRender} from './todoDisplay';
import {dropdownOptions} from './todoDropdownOptions';

function dropdown() {
    let dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');

    // The dropdown has options and dropdown content
    dropdown.appendChild(dropbtn())
    dropdown.appendChild(dropdownContent());

    return dropdown;
}

function dropbtn() {
    let dropbtn = document.createElement('p');
    dropbtn.classList.add('dropbtn');
    dropbtn.textContent = '...';
    dropbtn.addEventListener('click', todoRender.renderDropdown);

    return dropbtn;
}

function dropdownContent() {
    let dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');
    dropdownContent.id = 'myDropdown';

    // The dropdown content has the project options
    for(let option in dropdownOptions) {
        dropdownContent.appendChild(dropdownOptions[option]);
    }

    return dropdownContent;
}

export default dropdown;