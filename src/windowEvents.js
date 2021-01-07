function hideDropdowns(e) {
  console.log('in window');
  const { target } = e;
  let parent = target;
  if (target.parentNode.parentNode) {
    parent = target.parentNode.parentNode.previousElementSibling;
  }
  console.log(target);
  if (!parent || target.matches('.dropbtn')
       || target.matches('.todo-move') || parent.matches('.todo-move')
       || target.matches('.todo-reschedule') || parent.matches('.todo-reschedule')
       || target.matches('.todo-priority') || parent.matches('.todo-priority')
  ) return;
  console.log('crossed');
  const dropdowns = document.querySelectorAll('.dropdown-content');
  for (const dropdown of dropdowns) {
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
}

export default hideDropdowns;
