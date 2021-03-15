const expandedLists = document.querySelectorAll('details');

function closeOtherLists(e) {
    expandedLists.forEach(expandedList => {
        if(this.open) {
            e.target.setAttribute('aria-expanded', 'true');
            if(expandedList !== this && expandedList.hasAttribute('open')) {
                expandedList.setAttribute('aria-expanded', 'false');
                expandedList.open = false;
            }
        }
    })
}
expandedLists.forEach(expandedList => expandedList.addEventListener('toggle', closeOtherLists));

