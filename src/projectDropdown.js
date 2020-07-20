import {projectRender} from './projectDisplay';
import {dropdownOptions} from './projectDropdownOptions';
import optionHandler from './projectDropdownOptionsHandlers';

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
    dropbtn.addEventListener('click', projectRender.renderDropdown);

    return dropbtn;
}

function dropdownContent() {
    let dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');
    dropdownContent.id = 'projectDropdown';

    // The dropdown content has the project options
    for(let option in dropdownOptions) {
        const optionElement = dropdownOptions[option];
        dropdownContent.appendChild(optionElement);
        optionElement.addEventListener('click', optionHandler);
    }

    return dropdownContent;
}

export default dropdown;