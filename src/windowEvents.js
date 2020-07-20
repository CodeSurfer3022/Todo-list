function hideDropdowns(e) {
    console.log('in window');
    console.log(e.target.matches('.dropbtn'));
    if(e.target.matches('.dropbtn')) return;
    console.log('crossed');
    const dropdowns = document.querySelectorAll('.dropdown-content');
    for(let dropdown of dropdowns) {
        if(dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

export default hideDropdowns;