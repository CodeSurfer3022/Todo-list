function hideDropdowns(e) {
    console.log('in window');
    if(e.target.matches('.dropbtn')) return;
    const dropdowns = document.querySelectorAll('.dropdown-content');
    for(let dropdown of dropdowns) {
        if(dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

export default hideDropdowns;