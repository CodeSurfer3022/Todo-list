import optionHandler from './todoDropdownOptionsHandler';

const todoDropdown = document.querySelector('#todoDropdown');

function todoDropdownOptionsEventListeners() {
  console.log('in dd oel');
  for (const child of todoDropdown.children) {
    child.addEventListener('click', optionHandler);
  }
}

export default todoDropdownOptionsEventListeners;
