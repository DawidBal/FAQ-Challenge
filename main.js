const expandedLists = document.querySelectorAll('details');

function closeOtherLists(e) {
    expandedLists.forEach(expandedList => {
        if(this.open) {
            if(expandedList !== this && expandedList.hasAttribute('open')) {
                console.log("Deleted", {expandedList});
                expandedList.open = false;
            }
        }
    })
}
expandedLists.forEach(expandedList => expandedList.addEventListener('toggle', closeOtherLists));

