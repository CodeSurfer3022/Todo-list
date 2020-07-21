import optionHandler from './projectDropdownOptionsHandlers';

const projectDropdown = document.querySelector('#projectDropdown');

function projectDropdownOptionsEventListeners() {
    console.log('in project oel');
    for(let child of projectDropdown.children) {
        child.addEventListener('click', optionHandler);
    }
}

export default projectDropdownOptionsEventListeners;
