function addWindowListener() {
    window.addEventListener('click', hideDropdowns);
}

function hideDropdowns(event) {
    console.log(event.target);
    if(!event.target.matches('.dropbtn')) {
        let dropdowns = document.querySelectorAll('.dropdown-content');
        for(let dropdown of dropdowns) {
            if(dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }
}

export default addWindowListener;