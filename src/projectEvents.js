import {projectRender} from './projectDisplay';

const projectEvents = function () {
    const options = document.querySelector('.project-options');

    function addEventListeners() {
        // console.log(options);
        options.addEventListener('click', projectRender.renderOptions);
    }

    return{addEventListeners};
}


export {projectEvents};