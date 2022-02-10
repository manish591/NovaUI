const sidenavLinks = document.querySelectorAll('.sidenav__items');

const highlightSelectedLink = e => {
    sidenavLinks.forEach(link => {
        if(link.classList.contains('sidenav__items--selected')) {
            link.classList.remove('sidenav__items--selected');
        }
    })
    e.target.parentElement.classList.add('sidenav__items--selected');
}

sidenavLinks.forEach(link => {
    link.addEventListener('click', highlightSelectedLink);
})