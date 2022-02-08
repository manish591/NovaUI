const showToastButton = document.querySelectorAll('.show-toast');

const showToastInView = e => {
    let targetElement = e.target;
    let targetToast = targetElement.nextElementSibling;
    targetToast.classList.remove('toast--hide');
    hideToastAfterThreeSec(targetToast);
}

const hideToastAfterThreeSec = element => {
    setTimeout(() => {
        element.classList.add('toast--hide');
    }, 5000);
}

showToastButton.forEach(button => {
    button.addEventListener('click', showToastInView);
})