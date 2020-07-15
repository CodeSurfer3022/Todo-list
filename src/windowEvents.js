function addWindowListener() {
    window.addEventListener('click', hideDropdowns);
}

function hideDropdowns(event) {
    console.log(event.target);
    if(!(event.target.matches('.dropbtn') ||
         event.target.matches('.todo-move') ||
         event.target.matches('.todo-reschedule') ||
         event.target.matches('.todo-priority'))
    ) {
        let dropdowns = document.querySelectorAll('.dropdown-content');
        for(let dropdown of dropdowns) {
            if(dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
}

export default addWindowListener;